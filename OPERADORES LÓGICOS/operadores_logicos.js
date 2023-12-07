
let resultado;
let numero1;
let numero2;
let numero3;
let operador;

function testar(){

    numero1 = parseInt(document.querySelector('#numero1').value);
    numero2 = parseInt(document.querySelector('#numero2').value);
    numero3 = parseInt(document.querySelector('#numero3').value);
    operador = document.querySelector('#slcOperador').value;

    if (operador == 'or') {
        operador_or();
    }

    if (operador == 'and') {
        operador_and();
    }

}

//OPERADOR OR - ||
function operador_or(){

    if(numero1 == numero2 || numero1 == numero3 || numero2 == numero3){
        resultado = 'VERDADEIRO: PELO MENOS DOIS DOS TRÊS NUMEROS SÃO IGUAIS.';
    }else{
        resultado = 'FALSO: OS TRÊS NUMEROS SÃO DIFERENTES.';
    }

    document.querySelector('#resultado').innerHTML = resultado;

}

//OPERADOR AND - &&
function operador_and(){

    if(numero1 == numero2 && numero1 == numero3 && numero2 == numero3){
        resultado = 'VERDADEIRO: OS TRÊS NUMEROS SÃO IGUAIS.';
    }else{
        resultado = 'FALSO: PELO MENOS UM NUMERO É DIFERENTE.';
    }

    document.querySelector('#resultado').innerHTML = resultado;

}

function limpar(){
    document.querySelector('#numero1').value = "";
    document.querySelector('#numero2').value = "";
    document.querySelector('#numero3').value = "";
    document.querySelector('#resultado').innerHTML = '-';
}