const express = require('express');
const router = express.Router();
const https = require('https');
const fetch = require('node-fetch');


router.get('*',(req,res) => {
    res.render('index');
    //res.sendfile(path.join(__dirname, '/views/index.html'));
    //console.log(__dirname)
});

router.post('*new2',(req,res) => { 
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
    var localidad = req.body.Localidad;
    var marca = req.body.marca == "0" ? req.body.otramarca : req.body.marca;
    var otramarca = req.body.otramarca == undefined ? "" : req.body.otramarca;
    var iAlineacion = req.body.iAlineacion == undefined ? "N" : "S";
    var iCambioBateria = req.body.iCambioBateria == undefined ? "N" : "S";
    var iCambioCorrea = req.body.iCambioCorrea == undefined ? "N" : "S";
    var iElectricidad = req.body.iElectricidad == undefined ? "N" : "S";
    var iInstalacion = req.body.iInstalacion == undefined ? "N" : "S";
    var iPolarizado = req.body.iPolarizado == undefined ? "N" : "S";
    var iRecubrimiento = req.body.iRecubrimiento == undefined ? "N" : "S";
    var iReparacion = req.body.iReparacion == undefined ? "N" : "S";
    var iRevisionPre = req.body.iRevisionPre == undefined ? "N" : "S";
    var iGrua = req.body.iGrua == undefined ? "N" : "S";
    var iSuspension = req.body.iSuspension == undefined ? "N" : "S";
    var iOtro = req.body.iOtro == undefined ? "N" : req.body.otros;
    var iCambioAceite = req.body.iCambioAceite == undefined ? "N" : "S";
    var iCambioAceiteDom = req.body.iCambioAceiteDom == undefined ? "N" : "S";
    var iCambioLlantas = req.body.iCambioLlantas == undefined ? "N" : "S";
    var iElevavidrios = req.body.iElevavidrios == undefined ? "N" : "S";
    var iLatoneria = req.body.iLatoneria == undefined ? "N" : "S";
    var iLatoneriaPdr = req.body.iLatoneriaPdr == undefined ? "N" : "S";
    var iRevision = req.body.iRevision == undefined ? "N" : "S";
    var iTapiceria = req.body.iTapiceria == undefined ? "N" : "S";
    var iTapiceriaLava = req.body.iTapiceriaLava == undefined ? "N" : "S";
    var iVentaLlantas = req.body.iVentaLlantas == undefined ? "N" : "S";
    var iVentaLujos = req.body.iVentaLujos == undefined ? "N" : "S";

    const data = JSON.stringify({
        razon : razonSocial,
        direcc : dirEmpresa,
        contacto : contacto,
        mail : email,
        tele : celular,
        ciudad : ciudad,
        annos : anno,
        sucursal : sucursalSi,
        alineacion : iAlineacion,
        bateria : iCambioBateria,
        correa : iCambioCorrea,
        electricidad : iElectricidad,
        instalacion : iInstalacion,
        polarizado : iPolarizado,
        recubrimiento : iRecubrimiento,
        reparacion :iReparacion,
        revision : iRevisionPre,
        grua : iGrua,
        suspension : iSuspension,
        otros : iOtro,
        cambio : iCambioAceite,
        cambiodom : iCambioAceiteDom,
        llanta : iCambioLlantas,
        elevavidrios : iElevavidrios,
        latoneria : iLatoneria,
        pdr : iLatoneriaPdr,
        frenos : iRevision,
        tapiceria : iTapiceria,
        tapicerialava : iTapiceriaLava,
        ventallanta : iVentaLlantas,
        ventalujo : iVentaLujos,
        localidad : localidad,
        marca : marca

    });

/* fetch("http://localhost:3000",{*/
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