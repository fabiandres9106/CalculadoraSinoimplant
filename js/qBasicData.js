addEventListener('load',actualizarDatos,false);
addEventListener('load',probar,false);
function probar(){
    //console.log('probando');
}

var shEjecutivoEmpresa=document.getElementById('shEjecutivoEmpresa');
var shEjecutivo=document.getElementById('shEjecutivo');
//var shEmpresa=document.getElementById('shEmpresa');
var nombreEjecutivo=document.getElementById('nombreEjecutivo');
nombreEjecutivo.addEventListener('keyup',actualizarEjecutivo,false);

var incostUniSI=document.getElementById('incostUniSI');
var incostUniJad=document.getElementById('incostUniJad');
var incostUniImp=document.getElementById('incostUniImp');
incostUniSI.addEventListener('keyup',actualizarCostoSI,false);
incostUniJad.addEventListener('keyup',actualizarCostoJad,false);
incostUniImp.addEventListener('keyup',actualizarCostoImp,false);
var inAplicacionSI=document.getElementById('inAplicacionSI');
var inAplicacionJad=document.getElementById('inAplicacionJad');
var inAplicacionImp=document.getElementById('inAplicacionImp');
var costTotalSI=document.getElementById('costTotalSI');
var costTotalJad=document.getElementById('costTotalJad');
var costTotalImp=document.getElementById('costTotalImp');
var incostTotalSI=document.getElementById('incostTotalSI');
var incostTotalJad=document.getElementById('incostTotalJad');
var incostTotalImp=document.getElementById('incostTotalImp');
var induracionSI=document.getElementById('induracionSI');
var induracionJad=document.getElementById('induracionJad');
var induracionImp=document.getElementById('induracionImp');
var costAnualSI=document.getElementById('costAnualSI');
var incostAnualSI=document.getElementById('incostAnualSI');
var costAnualJad=document.getElementById('costAnualJad');
var incostAnualJad=document.getElementById('incostAnualJad');
var costAnualImp=document.getElementById('costAnualImp');
var incostAnualImp=document.getElementById('incostAnualImp');

var cantidadMujeres=document.getElementById('cantidadMujeres');
cantidadMujeres.addEventListener('change',calcular,false);
cantidadMujeres.addEventListener('keyup',calcular,false);

var tasaFecundidad=document.getElementById('tasaFecundidad');
var intasaFecundidad=document.getElementById('intasaFecundidad');
var mujFertiles=document.getElementById('mujFertiles');
var inmujFertiles=document.getElementById('inmujFertiles');

var tasaembNoIntencionales=document.getElementById('tasaembNoIntencionales');
var intasaembNoIntencionales=document.getElementById('intasaembNoIntencionales');
var embNoIntencionales=document.getElementById('embNoIntencionales');
var inembNoIntencionales=document.getElementById('inembNoIntencionales');

var tasamortMaterna=document.getElementById('tasamortMaterna');
var intasamortMaterna=document.getElementById('intasamortMaterna');
var mortMaterna=document.getElementById('mortMaterna');
var inmortMaterna=document.getElementById('inmortMaterna');

var tasamortMatNoDeseados=document.getElementById('tasamortMatNoDeseados');
var intasamortMatNoDeseados=document.getElementById('intasamortMatNoDeseados');
var mortMatNoDeseados=document.getElementById('mortMatNoDeseados');
var inmortMatNoDeseados=document.getElementById('inmortMatNoDeseados');

var hospLevel=document.getElementById('hospLevel');
var riskPr=document.getElementById('riskPr');

var valUDH=document.getElementById('valUDH');
var inValUDH=document.getElementById('inValUDH');
var cantidadDiasHosp=document.getElementById('cantidadDiasHosp');
var totDH=document.getElementById('totDH');
var intotDH=document.getElementById('intotDH');
var valUUCI=document.getElementById('valUUCI');
var inValUUCI=document.getElementById('inValUUCI');
var cantidadUCI=document.getElementById('cantidadUCI');
var totUCI=document.getElementById('totUCI');
var intotUCI=document.getElementById('intotUCI');
var valUPar=document.getElementById('valUPar');
var inValUPar=document.getElementById('inValUPar');
var cantidadParto=document.getElementById('cantidadParto');
var totPar=document.getElementById('totPar');
var intotPar=document.getElementById('intotPar');

hospLevel.addEventListener('change',actualizarGastos,false);
riskPr.addEventListener('change',actualizarGastos,false);

var costEmbNoDesSI=document.getElementById('costEmbNoDesSI');
var costMortMatNoDesSI=document.getElementById('costMortMatNoDesSI');
var costPrevSI=document.getElementById('costPrevSI');
var ahorroSI=document.getElementById('ahorroSI');
var incostEmbNoDesSI=document.getElementById('incostEmbNoDesSI');
var incostMortMatNoDesSI=document.getElementById('incostMortMatNoDesSI');
var incostPrevSI=document.getElementById('incostPrevSI');
var inahorroSI=document.getElementById('inahorroSI');

var costEmbNoDesJad=document.getElementById('costEmbNoDesJad');
var costMortMatNoDesJad=document.getElementById('costMortMatNoDesJad');
var costPrevJad=document.getElementById('costPrevJad');
var ahorroJad=document.getElementById('ahorroJad');
var incostEmbNoDesJad=document.getElementById('incostEmbNoDesJad');
var incostMortMatNoDesJad=document.getElementById('incostMortMatNoDesJad');
var incostPrevJad=document.getElementById('incostPrevJad');
var inahorroJad=document.getElementById('inahorroJad');

var costEmbNoDesImp=document.getElementById('costEmbNoDesImp');
var costMortMatNoDesImp=document.getElementById('costMortMatNoDesImp');
var costPrevImp=document.getElementById('costPrevImp');
var ahorroImp=document.getElementById('ahorroImp');
var incostEmbNoDesImp=document.getElementById('incostEmbNoDesImp');
var incostMortMatNoDesImp=document.getElementById('incostMortMatNoDesImp');
var incostPrevImp=document.getElementById('incostPrevImp');
var inahorroImp=document.getElementById('inahorroImp');

var SIvsJad=document.getElementById('SIvsJad');
var inSIvsJad=document.getElementById('inSIvsJad');
var SIvsImp=document.getElementById('SIvsImp');
var inSIvsImp=document.getElementById('inSIvsImp');

var conexion;
function actualizarDatos(){
    conexion=new XMLHttpRequest();
    conexion.onreadystatechange=procesarEventoLoadBasicData;
    conexion.open('GET','https://eduniversal.com.co/sinoimplant/bbdd/qBasicData.php?documento='+'1', true);
    conexion.send();
    //console.log('programando');
}
function actualizarEjecutivo(){
    shEjecutivoEmpresa.classList.remove('visually-hidden');
    shEjecutivo.innerHTML=nombreEjecutivo.value;
}
function actualizarCostoSI(){
    var valCostoTotalSI=parseInt(incostUniSI.value)+parseInt(inAplicacionSI.value);
    costTotalSI.innerHTML=valCostoTotalSI.toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
    incostTotalSI.value=parseInt(incostUniSI.value)+parseInt(inAplicacionSI.value);
    var valCostoAnualSI=parseInt(incostTotalSI.value)/parseInt(induracionSI.value); 
    costAnualSI.innerHTML=valCostoAnualSI.toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
    incostAnualSI.value=parseInt(incostTotalSI.value)/parseInt(induracionSI.value);
}
function actualizarCostoJad(){
    var valCostoTotalJad=parseInt(incostUniJad.value)+parseInt(inAplicacionJad.value);
    costTotalJad.innerHTML=valCostoTotalJad.toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
    incostTotalJad.value=parseInt(incostUniJad.value)+parseInt(inAplicacionJad.value);
    var valCostoAnualJad=parseInt(incostTotalJad.value)/parseInt(induracionJad.value);
    incostAnualJad.value=parseInt(incostTotalJad.value)/parseInt(induracionJad.value);
    costAnualJad.innerHTML=valCostoAnualJad.toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
}
function actualizarCostoImp(){
    var valCostoTotalImp=parseInt(incostUniImp.value)+parseInt(inAplicacionImp.value)
    costTotalImp.innerHTML=valCostoTotalImp.toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
    incostTotalImp.value=parseInt(incostUniImp.value)+parseInt(inAplicacionImp.value);
    var valCostoAnualImp=parseInt(incostTotalImp.value)/parseInt(induracionImp.value);
    incostAnualImp.value=parseInt(incostTotalImp.value)/parseInt(induracionImp.value);
    costAnualImp.innerHTML=valCostoAnualImp.toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'}); 
}
function procesarEventoLoadBasicData(){
    if(conexion.readyState==4){
        datos=JSON.parse(conexion.responseText);
        tasaFecundidad.innerHTML=datos.tasaFecundidad;
        tasaembNoIntencionales.innerHTML=datos.tasaEmbarazosNoIntencionales;
        tasamortMaterna.innerHTML=datos.tasaMortalidadMaterna;
        tasamortMatNoDeseados.innerHTML=datos.tasaMortalidadMaternaNoDeseados;
        valUDH.innerHTML=parseInt(datos.hosp1).toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
        valUUCI.innerHTML=parseInt(datos.uci).toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
        valUPar.innerHTML=parseInt(datos.parto).toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
        inValUDH.value=datos.hosp1;
        inValUUCI.value=datos.uci;
        inValUPar.value=datos.parto;
        totDH.innerHTML=parseInt(datos.hosp1*1).toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
        totUCI.innerHTML=parseInt(datos.uci*0).toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
        totPar.innerHTML=parseInt(datos.parto*1).toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
        intotDH.value=datos.hosp1*1;
        intotUCI.value=datos.uci*0;
        intotPar.value=datos.parto*1;
    }
}
function calcular(){
    intasaFecundidad.value=datos.tasaFecundidad;
    inmujFertiles.value=Math.round(cantidadMujeres.value*datos.tasaFecundidad/100);
    mujFertiles.innerHTML=Math.round(cantidadMujeres.value*datos.tasaFecundidad/100);

    intasaembNoIntencionales.value=datos.tasaEmbarazosNoIntencionales;
    inembNoIntencionales.value=Math.round(inmujFertiles.value*datos.tasaEmbarazosNoIntencionales/1000);
    embNoIntencionales.innerHTML=Math.round(inmujFertiles.value*datos.tasaEmbarazosNoIntencionales/1000);

    intasamortMaterna.value=datos.tasaMortalidadMaterna;
    inmortMaterna.value=Math.round(inmujFertiles.value*datos.tasaMortalidadMaterna/100000);
    mortMaterna.innerHTML=Math.round(inmujFertiles.value*datos.tasaMortalidadMaterna/100000);

    intasamortMatNoDeseados.value=datos.tasaMortalidadMaternaNoDeseados;
    inmortMatNoDeseados.value=Math.round(inembNoIntencionales.value*datos.tasaMortalidadMaternaNoDeseados/100000);
    mortMatNoDeseados.innerHTML=Math.round(inembNoIntencionales.value*datos.tasaMortalidadMaternaNoDeseados/100000);

    // ACTUALIZAR GRÁFICO PASO 3 - ESTADÍSTICAS MUJERES
    var val1 = parseFloat(inmujFertiles.value) || 0;
    var val2 = parseFloat(inembNoIntencionales.value) || 0;
    var val3 = parseFloat(inmortMaterna.value) || 0;
    var val4 = parseFloat(inmortMatNoDeseados.value) || 0;
    
    chartPaso3Act.data.datasets[0].data = [val1, val2, val3, val4];
    chartPaso3Act.update();
}
function actualizarGastos(){
    switch(hospLevel.value){
        case "1":
            var datosHosp1 = parseInt(datos.hosp1)
            valUDH.innerHTML = datosHosp1.toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
            inValUDH.value=datos.hosp1;
        break;
        case "2":
            var datosHosp2 = parseInt(datos.hosp2);
            valUDH.innerHTML=datosHosp2.toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
            inValUDH.value=datos.hosp2;
        break;
        case "3":
            var datosHosp3 = parseInt(datos.hosp3);
            valUDH.innerHTML=datosHosp3.toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
            inValUDH.value=datos.hosp3;
        break;
    }
    switch(riskPr.value){
        case "1":
            cantidadDiasHosp.value=1;
            cantidadUCI.value=0;
        break;
        case "2":
            cantidadDiasHosp.value=1;
            cantidadUCI.value=2;
        break;
        case "3":
            cantidadDiasHosp.value=1;
            cantidadUCI.value=3;
        break;
    }
    totDH.innerHTML=parseInt(inValUDH.value*cantidadDiasHosp.value).toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
    intotDH.value=inValUDH.value*cantidadDiasHosp.value;
    totUCI.innerHTML=parseInt(inValUUCI.value*cantidadUCI.value).toLocaleString('es-CO', { maximumFractionDigits: 0, style: 'currency', currency: 'COP'});
    intotUCI.value=inValUUCI.value*cantidadUCI.value;

    costEmbNoDesSI.innerHTML=(parseInt(intotDH.value)+parseInt(intotPar.value))*(parseInt(inembNoIntencionales.value)-parseInt(inmortMatNoDeseados.value));
    incostEmbNoDesSI.value=(parseInt(intotDH.value)+parseInt(intotPar.value))*(parseInt(inembNoIntencionales.value)-parseInt(inmortMatNoDeseados.value));
    costEmbNoDesJad.innerHTML=(parseInt(intotDH.value)+parseInt(intotPar.value))*(parseInt(inembNoIntencionales.value)-parseInt(inmortMatNoDeseados.value));
    incostEmbNoDesJad.value=(parseInt(intotDH.value)+parseInt(intotPar.value))*(parseInt(inembNoIntencionales.value)-parseInt(inmortMatNoDeseados.value));
    costEmbNoDesImp.innerHTML=(parseInt(intotDH.value)+parseInt(intotPar.value))*(parseInt(inembNoIntencionales.value)-parseInt(inmortMatNoDeseados.value));
    incostEmbNoDesImp.value=(parseInt(intotDH.value)+parseInt(intotPar.value))*(parseInt(inembNoIntencionales.value)-parseInt(inmortMatNoDeseados.value));

    costMortMatNoDesSI.innerHTML=(parseInt(intotPar.value)+parseInt(intotUCI.value))*parseInt(inmortMatNoDeseados.value);
    incostMortMatNoDesSI.value=(parseInt(intotPar.value)+parseInt(intotUCI.value))*parseInt(inmortMatNoDeseados.value);
    costMortMatNoDesJad.innerHTML=(parseInt(intotPar.value)+parseInt(intotUCI.value))*parseInt(inmortMatNoDeseados.value);
    incostMortMatNoDesJad.value=(parseInt(intotPar.value)+parseInt(intotUCI.value))*parseInt(inmortMatNoDeseados.value);
    costMortMatNoDesImp.innerHTML=(parseInt(intotPar.value)+parseInt(intotUCI.value))*parseInt(inmortMatNoDeseados.value);
    incostMortMatNoDesImp.value=(parseInt(intotPar.value)+parseInt(intotUCI.value))*parseInt(inmortMatNoDeseados.value);

    costPrevSI.innerHTML=parseInt(inembNoIntencionales.value)*parseInt(incostAnualSI.value);
    incostPrevSI.value=parseInt(inembNoIntencionales.value)*parseInt(incostAnualSI.value);
    costPrevJad.innerHTML=parseInt(inembNoIntencionales.value)*parseInt(incostAnualJad.value);
    incostPrevJad.value=parseInt(inembNoIntencionales.value)*parseInt(incostAnualJad.value);
    costPrevImp.innerHTML=parseInt(inembNoIntencionales.value)*parseInt(incostAnualImp.value);
    incostPrevImp.value=parseInt(inembNoIntencionales.value)*parseInt(incostAnualImp.value);

    ahorroSI.innerHTML=parseInt(incostPrevSI.value)-(parseInt(incostEmbNoDesSI.value)+parseInt(incostMortMatNoDesSI.value));
    inahorroSI.value=parseInt(incostPrevSI.value)-(parseInt(incostEmbNoDesSI.value)+parseInt(incostMortMatNoDesSI.value));
    ahorroJad.innerHTML=parseInt(incostPrevJad.value)-(parseInt(incostEmbNoDesJad.value)+parseInt(incostMortMatNoDesJad.value));
    inahorroJad.value=parseInt(incostPrevJad.value)-(parseInt(incostEmbNoDesJad.value)+parseInt(incostMortMatNoDesJad.value));
    ahorroImp.innerHTML=parseInt(incostPrevImp.value)-(parseInt(incostEmbNoDesImp.value)+parseInt(incostMortMatNoDesImp.value));
    inahorroImp.value=parseInt(incostPrevImp.value)-(parseInt(incostEmbNoDesImp.value)+parseInt(incostMortMatNoDesImp.value));

    SIvsJad.innerHTML=parseInt(incostPrevSI.value)-parseInt(incostPrevJad.value);
    inSIvsJad.value=parseInt(incostPrevSI.value)-parseInt(incostPrevJad.value);
    SIvsImp.innerHTML=parseInt(incostPrevSI.value)-parseInt(incostPrevImp.value);
    SIvsImp.value=parseInt(incostPrevSI.value)-parseInt(incostPrevImp.value);
}