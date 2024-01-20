var texto = document.getElementById("Texto");
var page = document.getElementById("Fondo");
var card = document.getElementById("Card");

function colorTexto(color){
    texto.style.color = color;
}

function colorFondo(color){
    page.style.backgroundColor = color;
}

function cardColor(color){
    card.style.backgroundColor = color;
}

function refresh(){
    texto.style.color = 'black';
    page.style.backgroundColor = 'gray';
    card.style.backgroundColor = '';
}