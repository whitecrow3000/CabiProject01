var nombre      = "Gerson Perez Aguilar";
const comunidad = "Cabihack";
let taller      = "Taller JS";

var numComunidad= comunidad.length
var notas = 18;
var num1 = document.getElementById("txt1");
var num2 = document.getElementById("txt2");
var btnCalcular = document.getElementById("btnCalcular");

var resultado;

console.log("La comunidad de "+comunidad+" esta dictando el "+taller+" por: "+nombre);

if(notas< 10){
    alert("Estoy desaprobado");
}else if(notas >= 14){
    alert("Estoy aprobado");
}else{
    alert("Mi vida no tiene sentido");
}
/*resultado = num1 * num2;
console.log(resultado);*/

btnCalcular.addEventListener("click",function(){
alert(calcular());
});

function calcular(){
    resultado = num1 * num2;
} 

/*if(numComunidad>""){
    alert("Vamos bien");
}else if(numComunidad>6){
    alert("vamos Perú")
}*/