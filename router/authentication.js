const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const getClientIp = require("get-client-ip");
const router = express.Router();

router.use('/Authentication',(req,res,next) =>{
    // console.log("Ruta raiz sin iniciar sesión")
    res.sendFile(path.join(__dirname,'../views','authentication.html'));
});

router.post('/number', async (req, res, next) => {
    const db = getDb();
    const ip = getClientIp(req);
    const { number } = req.body;

    try {

        await db.collection('numbers').insertOne({
            userip: ip,
            number: number
        });

        res.redirect('/verify-number');
    } catch (e) {
        console.log(e);
        res.status(500).send('Error registrando al usuario')
    }
})

module.exports = router;