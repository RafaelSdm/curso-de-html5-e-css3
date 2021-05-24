// instrução

console.log("Quebre 3 ovos");

console.log("misture com farinha");

console.log("leve ao forno");


//bloco de codigos

{
  
  console.log("Quebre 3 ovos");

  console.log("misture com farinha");

  console.log("leve ao forno");
  
}

console.log("coma um pedaco de pizza")


// comentarios

// cosoloe.log("comentario de linha")


/*
a

f
g
f

comentatio de multiplas linhas */


// constantes e variáveis

var nome = 'Rafa'

let altura = 1.70;

let peso = 80

let resultado = peso/(altura * altura)

const pi = 3.14


// variaveis e seus tipos

let name1 = 'Rafael';
let name2 = "Damaasceno"; // string

let numero = 1200 // inteiros ou decimais

let decimal = 1.25 //decimal

let boolean = false //booleanos



// operadores aritimeticos

let n1 = 10
let n2 = 2;

let resul = n1 + n2;

let div = n1/n2

console.log(resul);

console.log(div);


// operadores logicos e racionais

let resultado1 = 10 <= 10;
let resultado2 = 9 != 10;

let idade = 19;

let maiorIdade = idade > 18

console.log(maiorIdade)
console.log(resultado1)
console.log(resultado2)


let t = true && true;

console.log(t)

// estrutura if, else, else if

let id = 8
if(id >=18){
  console.log("voce é maior de idade")
}else{
  console.log("voce é menor de idade")
}

let opcao = 1;
if(opcao ==1){
  console.log("saldo conta")
}else if(opcao ==2){
  console.log("cartao de credito")
  
}else{
  console.log("nenhuma das opções acima")
}

// operador terario e switch

let op =3

switch(op){
  case 1:
    console.log("saldo");
    break;
  
  case 2:
    console.log("cartao");
    break;
    
  case 3:
    console.log("descontos");
    break;
  
  default:
    console.log("falar com um atendente");
    
    
}

// operador ternario

let idad = 20;

idad >= 18 ? "maior de idade" : "menor de idade"


// funcoes

function desligar(){
  console.log("desligue a torneira")
}


desligar()







// arrays

let namer1 = "Rafael";
let namer4 = "josefino";

let namer = ["Rafael", "Souza", "Damasceno"]

let qtd = namer.length

namer.push("Novo item")

delete namer[1]

console.log(namer[0])
console.log(namer[3])



// concatenacao e tempalte string

const a = 'Rafael'
const carrinho = 2

console.log(a + " " + carrinho);
console.log("Bem vindo " + a)

console.log(`Olha só ${a} voce escolheu o produto do carrinho ${carrinho}`)


// while loops

let i =0
while(i < 10){
  console.log("executou")
  i++
}

// do while

let j =0;
do{

  
  console.log(j);
  j++;

}while(j <=10)


// for

console.log("--------------------------------------")

for(let k=0;k<6;k++){
  console.log(k);

}

// operadores de atribuição

let sal = 700;
let bonus = 300;
//sal = sal + bonus;

sal += bonus
sal -= bonus

console.log(sal)

//operadores unarios

let nm = 1;

// pre fixado

++nm;

// pos fixado

nm++;

console.log(nm)

// var e let

var variavel = 10 // 

{

  variavel = 1
  console.log(variavel)

}

console.log(variavel)

let variavel2 = 5 // global

{

  variavel2 = 9
  console.log(variavel2)

}

console.log(variavel2)

// var = escopo global, funcao
// let global, escopo de bloco, funcao


// funcao anonima e arrow

function soma(a,b){
  console.log(a+b)
}

soma(1,2)

const s = function(a,b){
  console.log(a+b)


}
s(4,5)


const som = (a,b) => {
  console.log(a+b)
}

som(10,10)

const exibir = n => console.log(n)

exibir('Rafael')