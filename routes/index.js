const express = require('express');
const router = express.Router();
const https = require('https');
const fetch = require('node-fetch');


router.get('/',(req,res) => {
    res.render('index');
    //res.sendfile(path.join(__dirname, '/views/index.html'));
    //console.log(__dirname)
});

router.post('/new',(req,res) => {
    res.json({requestBody: req.body}); 
    console.log(req.body);
    var razonSocial = req.body.NomEmpresa;
    var dirEmpresa = req.body.DirEmpresa;
    var ciudad = req.body.Ciudad;
    var sucursalSi = req.body.gridRadios;
    var contacto = req.body.Contacto;
    var celular = req.body.Celular;
    var anno = req.body.Annos;
    var email = req.body.Email;
    var iServicio;
    if(!req.body.iServicioGeneral){
        iServicio = "N";
    }
    else {
        iServicio = "S";
    }
    var iLatoneria;
    if(!req.body.iLatoneria){
        iLatoneria = "N";
    }
    else {
        iLatoneria = "S";
    }
    var iRevision = req.body.iRevision == undefined ? "N" : "S";
    var iReparaciones = req.body.iReparaciones == undefined ? "N" : "S";
    var iReparaMayores = req.body.IReparacionesMayores == undefined ? "N" : "S";
    var iCambioLlantas = req.body.iCambioLlano == undefined ? "N" : "S";
    var iRectificacion = req.body.iRectificacion == undefined ? "N" : "S";
    var iPersonalizacion = req.body.iPersonalizacion == undefined ? "N" : "S";
    var iLavado = req.body.iLavado == undefined ? "N" : "S";
    var iGrua = req.body.iGrua == undefined ? "N" : "S";
    var iElectricidad = req.body.iElectricidad == undefined ? "N" : "S";
    var iOtros = req.body.iOtros == undefined ? "N" : "S";

    const data = JSON.stringify({
        razon : razonSocial,
        direcc : dirEmpresa,
        contacto : contacto,
        mail : email,
        tele : celular,
        ciudad : ciudad,
        annos : anno,
        sucursal : sucursalSi,
        servicio : iServicio,
        latoneria : iLatoneria,
        revision : iRevision,
        reparmenor : iReparaciones,
        reparmayor : iReparaMayores,
        cambio : iCambioLlantas,
        rectificacion : iRectificacion,
        personalizacion :iPersonalizacion,
        lavado : iLavado,
        grua : iGrua,
        electrico : iElectricidad,
        otros : iOtros
    });

    // prepare the header
    var postheaders = {
        'Content-Type' : 'application/json',
        'Content-Length' : Buffer.byteLength(data, 'utf8')
    };

    // the post options
    var optionspost = {
        host : 'primo.com.co/Service',
        port : 443,
        path : '/',
        method : 'POST',
        headers : postheaders
    };

    var reqPost = https.request(optionspost, function(res) {
        console.log("statusCode: ", res.statusCode);
        // uncomment it for header details
    //  console.log("headers: ", res.headers);
    
        res.on('data', function(d) {
            console.info('POST result:\n');
            process.stdout.write(d);
            console.info('\n\nPOST completed');
        });
    });

    // write the json data
    reqPost.write(data);
    reqPost.end();
    reqPost.on('error', function(e) {
        console.error(e);
    });
});


router.post('/new2',(req,res) => { 
    //res.json({requestBody: req.body}); 
    //console.log(req.body);
    var razonSocial = req.body.NomEmpresa;
    var dirEmpresa = req.body.DirEmpresa;
    var ciudad = req.body.Ciudad;
    var sucursalSi = req.body.gridRadios;
    var contacto = req.body.Contacto;
    var celular = req.body.Celular;
    var anno = req.body.Annos;
    var email = req.body.Email;
    var iServicio;
    if(!req.body.iServicioGeneral){
        iServicio = "N";
    }
    else {
        iServicio = "S";
    }
    var iLatoneria;
    if(!req.body.iLatoneria){
        iLatoneria = "N";
    }
    else {
        iLatoneria = "S";
    }
    var iRevision = req.body.iRevision == undefined ? "N" : "S";
    var iReparaciones = req.body.iReparaciones == undefined ? "N" : "S";
    var iReparaMayores = req.body.IReparacionesMayores == undefined ? "N" : "S";
    var iCambioLlantas = req.body.iCambioLlano == undefined ? "N" : "S";
    var iRectificacion = req.body.iRectificacion == undefined ? "N" : "S";
    var iPersonalizacion = req.body.iPersonalizacion == undefined ? "N" : "S";
    var iLavado = req.body.iLavado == undefined ? "N" : "S";
    var iGrua = req.body.iGrua == undefined ? "N" : "S";
    var iElectricidad = req.body.iElectricidad == undefined ? "N" : "S";
    var iOtros = req.body.iOtros == undefined ? "N" : "S";

    const data = JSON.stringify({
        razon : razonSocial,
        direcc : dirEmpresa,
        contacto : contacto,
        mail : email,
        tele : celular,
        ciudad : ciudad,
        annos : anno,
        sucursal : sucursalSi,
        servicio : iServicio,
        latoneria : iLatoneria,
        revision : iRevision,
        reparmenor : iReparaciones,
        reparmayor : iReparaMayores,
        cambio : iCambioLlantas,
        rectificacion : iRectificacion,
        personalizacion :iPersonalizacion,
        lavado : iLavado,
        grua : iGrua,
        electrico : iElectricidad,
        otros : iOtros
    });


    fetch("http://www.primo.com.co/Servicio",{
        method: 'POST',
        body : data,
        headers : {"Content-Type" : "application/json; charset=UTF-8"}

    })
    .then(function(res){
        //return res.json()
    })
    /*
    .then(function(data){
        console.log(data);
    })*/

    res.redirect('/');
});


module.exports = router;