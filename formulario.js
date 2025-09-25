var botaoAdd = document.querySelector("#adicionar-paciente");

  botaoAdd.addEventListener('click',
    function(event){
    event.preventDefault(); 
var formulario = document.querySelector('#form-adiciona');

//variaveis para acessar valor do <imput> a partir 
dadosPacientesFormulario(formulario);
console.log(paciente);


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
imcTd.textContent = calcularIMC(peso, altura);


pacienteTr.appendChild(nomeTd);
pacienteTr.appendChild(alturaTd);
pacienteTr.appendChild(pesoTd);
pacienteTr.appendChild(gorduraTd);
pacienteTr.appendChild(imcTd);

var tabela = document.querySelector("#tabela-pacientes");
tabela.appendChild(pacienteTr);


    }
  );

function dadosPacientesFormulario(formulario){
//objeto paciente
  var paciente = {
  nome:formulario.nome.value,
altura:formulario.altura.value,
peso:formulario.peso.value,
gordura:formulario.gordura.value,
IMC: calcularIMC(formulario.peso.value,formulario.altura.value)

  }
   
return paciente;



  
}