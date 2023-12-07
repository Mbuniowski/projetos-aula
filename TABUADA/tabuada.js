let numero;
let cont;
let resultado;
let html;

function calcularTabuada(){

    numero = parseInt(document.querySelector('#slcNumero').value);

    /* CALCULO DE TABUADA COM WHILE */
    cont = 0;
    while (cont <= 10) {
        resultado = numero + ' X ' + cont + ' = ' + (numero * cont);
        html += '<tr><td>' + resultado + '</td></tr>';
        cont++;
    }

    document.querySelector('#tituloTabuada').innerHTML = '<tr><th scope="col">TABUADA DO ' + numero + '</th></tr>';
    document.querySelector('#reultadoTabuada').innerHTML = html;

    /* CALCULO DE TABUADA COM FOR */
    // for (let index = 0; index <= 10; index++) {
    //     resultado = numero + ' X ' + index + ' = ' + (numero * index);
    //     html += '<tr><td>' + resultado + '</td></tr>';
    //     cont++;
    // }

    // document.querySelector('#tituloTabuada').innerHTML = '<tr><th scope="col">TABUADA DO ' + numero + '</th></tr>';
    // document.querySelector('#reultadoTabuada').innerHTML = html;

}

function limpar(){
    location.reload();
}