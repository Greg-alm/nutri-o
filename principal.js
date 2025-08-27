//Alteração do titulo e subtitulo
var nutri = document.querySelector("h1");
nutri.textContent = "Paulista Nutrição";

var pacientes = document.querySelector("h2");
pacientes.textContent = "Meus clientes";
var paciente = document.querySelector("#primeiro-paciente");
var tdPeso = paciente.querySelector(".info-peso");
var peso = tdPeso.textContent;

var tdaltura = paciente.querySelector(".info-altura");
var altura = tdaltura.textContent;

var IMC = peso/(altura*altura);

var tdIMC = paciente.querySelector(".info-imc");
tdIMC.textContent =IMC;

console.log(paciente);
