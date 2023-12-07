
let resultado;
let numero1;
let numero2;
let operador;

function calculadora(){

    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);
    operador = document.querySelector('#slcOperador').value;

    //alert('NUMERO1: ' + numero1 +' OPERADOR ' + operador + ' NUMERO2: ' + numero2);

    if (operador == '+') {
        //alert('OPERAÇÃO DE SOMA');
        somar();
    }

    if (operador == '-') {
        //alert('OPERAÇÃO DE SUBTRAÇÃO');
        subtrair();
    }

    if (operador == '*') {
        //alert('OPERAÇÃO DE MULTIPLICAÇÃO');
        multiplicar();
    }

    if (operador == '/') {
        //alert('OPERAÇÃO DE DIVISÃO');
        dividir();
    }

}

//SOMA
function somar(){
    resultado = numero1 + numero2;
    console.log('SOMA:')
    console.log(numero1);
    console.log(numero2);
    console.log(resultado);
    document.querySelector('#resultado').innerHTML = resultado;
}

//SUBTRAÇÃO
function subtrair(){
    resultado = numero1 - numero2;
    console.log('SUBTRAÇAO:')
    console.log(numero1);
    console.log(numero2);
    console.log(resultado);
    document.querySelector('#resultado').innerHTML = resultado;
}

//MULTIPLICAÇÃO
function multiplicar(){
    resultado = numero1 * numero2;
    console.log('MULTIPLICAÇÃO:')
    console.log(numero1);
    console.log(numero2);
    console.log(resultado);
    document.querySelector('#resultado').innerHTML = resultado;
}

//DIVISÃO
function dividir(){
    resultado = numero1 / numero2;
    console.log('DIVISÃO:')
    console.log(numero1);
    console.log(numero2);
    console.log(resultado);
    document.querySelector('#resultado').innerHTML = resultado;
}

function limpar(){
    document.querySelector('#numero1').value = "";
    document.querySelector('#numero2').value = "";
    document.querySelector('#resultado').innerHTML = '-';
}

//SELECIONA E EXIBE A IMAGEM DE ACORDO COM O OPERADOR ESCOLHIDO 
let select = document.querySelector('#slcOperador');
select.addEventListener('change', function (){

    let value = select.options[select.selectedIndex].value;
    console.log(value);

    let imgOperacao = document.querySelector('#imgOperacao');
    if(value == '+'){
        imgOperacao.setAttribute('src', 'img/adicionar.png');
    }

    if(value == '-'){
        imgOperacao.setAttribute('src', 'img/subtracao.png');
    }

    if(value == '*'){
        imgOperacao.setAttribute('src', 'img/multiplicacao.png');
    }

    if(value == '/'){
        imgOperacao.setAttribute('src', 'img/divisao.png');
    }

});