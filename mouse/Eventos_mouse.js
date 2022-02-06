document.addEventListener("mousedown", iniciarTrazo);
document.addEventListener("mouseup", detenerTrazo);
document.addEventListener("mousemove", continuarTrazo);

var c = document.getElementById("area");
var papel = c.getContext("2d");
var color = document.getElementById("colorpicker");
var grosor = document.getElementById("barra_color");
var imageData = c.toDataURL();

var botonDescarga = document.getElementById("boton");
botonDescarga.addEventListener("mousedown", descargaImagen);

var estado;
var rect = c.getBoundingClientRect();

function iniciarTrazo(evento){
    papel.beginPath();
    papel.strokeStyle = color.value;
    papel.lineWidth = parseInt(grosor.value);
    estado = 1;
}

function continuarTrazo(evento) {
    if (estado == 1){
        var rect = c.getBoundingClientRect();
        var x = evento.clientX - rect.left;
        var y = evento.clientY - rect.top;
        papel.lineTo(x, y);
        papel.stroke();
        console.log("x: " + x + " y: " + y);  
    }else{
        var rect = c.getBoundingClientRect();
        var x = evento.clientX - rect.left;
        var y = evento.clientY - rect.top ;
    }
}

function detenerTrazo(){
    estado = 0;
} 

function descargaImagen(){  
    // obtener imagen  
    var image = c.toDataURL();  
  
    // crear link temporal  
    var tmpLink = document.createElement( "a" );  
    tmpLink.download = "image.png"; 
    tmpLink.href = image;  
  
    // temporalmente añade la imagen al cuerpo e inicia la descarga  
    document.body.appendChild( tmpLink );  
    tmpLink.click();  
    document.body.removeChild( tmpLink );  
}



/* function trazo(color, w, x1, y1, x2, y2, lienzo){
    lienzo.beginPath();
    lienzo.strokeStyle = color;
    lienzo.lineWidth = w;
    lienzo.moveTo(x1, y1);
    lienzo.lineTo(x2, y2);
    lienzo.stroke();
    lienzo.closePath();
} */