//Este bloco altera o subtitulo e o titulo//
var tituloSegundario = document.querySelector(".titulo-secundario");
tituloSegundario.textContent = "Meus clientes";
var titulo = document.querySelector(".titulo");
titulo.textContent = "M Nutrição";

//Este bloco determina a variavel peso do primeiro paciente//
var pacientes = document.querySelectorAll(".paciente");

for(var i = 0; i < pacientes.length; i++){

  var paciente = pacientes[i];

  var tdPeso = paciente.querySelector(".info-peso");
  var peso = tdPeso.textContent;


  //Este bloco determina a variavel altura do primeiro paciente//

  var tdAltura = paciente.querySelector(".info-altura");
  var altura = tdAltura.textContent;


  //Este bloco determina a variavel IMC do primeiro paciente e muda seu conteúdo//
  var IMC = peso / (altura * altura)

  //valores booleanos
  var pesoValido = true;
  var alturaValida = true;

  if (pesoValido && alturaValida) {
    var tdIMC = paciente.querySelector(".info-imc");
    tdIMC.textContent = IMC.toFixed(2);
  }

  //alerta caso o peso e altura sejam invalidos
  if (peso <= 0 || peso >= 1000) {
    var pesoValido = false;
    tdIMC.textContent = "peso invalido";
    paciente.classList.add("paciente-invalido");
  }

  if (altura <= 0 || altura >= 3.00) {
    var alturaValida = false;
    tdIMC.textContent = "altura invalido";
    paciente.classList.add("paciente-invalido");
  }
}

  titulo.addEventListener('click',function(){
    alert("M nutrição foi catucado");
  });
  
  var botaoAdd = document.querySelector("#adicionar-paciente");

  botaoAdd.addEventListener('click',
    function(event){
    event.preventDefault();
var formulario = document.querySelector('#form-adiciona');

var nome= formulario.nome.value;
var altura = formulario.altura.value;
var peso = formulario.peso.value;
var gordura = formulario.gordura.value;

console.log(nome);
console.log(altura);
console.log(peso);
console.log(gordura);

//cria o elemento tr
var pacienteTr = document.createElement("tr");

//cria as tags <td>
var nomeTd = document.createElement("td");
var alturaTd = document.createElement("td");
var pesoTd = document.createElement("td");
var gorduraTd = document.createElement("td");
var imcTd = document.createElement("td");

// adiciona os valores digitados a <td> criada
nomeTd.textContent = nome;
pesoTd.textContent = peso;
alturaTd.textContent = altura;
gorduraTd.textContent = gordura;


pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(gorduraTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);


    }
  );


  


  
  

