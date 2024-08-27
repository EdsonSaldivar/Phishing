const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const getClientIp = require("get-client-ip");
const router = express.Router();

router.use('/verify-number', async (req, res, next) => {
    const ip = getClientIp(req);
    try {
        const db = getDb();

        // Buscar el último documento asociado a la IP del usuario
        const result = await db.collection('numbers')
                               .find({ userip: ip })
                               .sort({ _id: -1 }) // Ordenar por _id descendente (último insertado)
                               .limit(1)
                               .toArray();

        // Verificar si se encontró el número
        if (result.length > 0) {
            const number = result[0].number; // Extraer solo el número
            res.render('number', { number }); // Renderizar la página con el número
        } else {
            res.status(404).send("No se encontró un número para esta IP.");
        }
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving number");
    }
});


module.exports = router;
