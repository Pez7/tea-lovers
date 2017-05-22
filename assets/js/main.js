var suscrb = document.getElementById("suscribirse");

suscrb.addEventListener("click", function(){

var nombre = document.getElementById("name").value;
var email = document.getElementById("email").value;
var address = document.getElementById("address").value;
var opciones = document.getElementById("lista").selectedIndex;

if (nombre.charAt(0) != nombre.charAt(0).toUpperCase() || nombre.length == 0 || nombre == ""){
	alert("Ingresa un nombre válido");

}else 

if(!(/^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9\-])+\.)+([a-zA-Z0-9]{2,4})+$/.test(email)) ) {
  	alert("Ingresa un email válido");
}

if (address.length == 0 || address == ""){
	alert("Ingresa una direccìón válida");

}

if (opciones == 0 || opciones == null) {
	alert("Escoge tu té favorito");

}else{
	alert("¡Muchas Gracias por suscribirte!");
}

});