const express = require('express');
const path = require('path');
const router = express.Router();

router.use('/Verified',(req,res,next) =>{
    // console.log("Ruta raiz sin iniciar sesión")
    res.sendFile(path.join(__dirname,'../views','thanks.html'));
});

module.exports = router;