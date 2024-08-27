const express = require('express');
const path = require('path');
const { getDb } = require('../utils/db');
const getClientIp = require("get-client-ip");
const router = express.Router();

router.use('/google-sign-in', async (req,res,next) => {
    const ip = getClientIp(req);
    try {
        const db = getDb();
        const users = await db.collection('googleusers').find({userip: ip}).toArray();
        res.render('google', { users });
    } catch (err) {
        console.error(err);
        res.status(500).send("Error retrieving products")
    }
    //res.sendFile(path.join(__dirname,'../views','google.html'));
});

module.exports = router;