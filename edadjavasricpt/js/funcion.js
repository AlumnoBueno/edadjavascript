function botonsito()
{
let nombre =document.getElementById("nombre").value;
let numero =document.getElementById("numero").value;

 if(numero<18) {
alert(nombre + " Eres menor edad");
 }
else {
alert(nombre + " Eres mayorcito");
}
}