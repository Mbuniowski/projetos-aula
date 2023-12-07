function calcularMedia(){

    let nota1;
    let nota2;
    let nota3;
    let nota4;
    let media;

    //ENTRADA DA PRIMEIRA NOTA
    nota1 = parseInt(document.querySelector('#nota1').value);

    //ENTRADA DA SEGUNDA NOTA
    nota2 = parseInt(document.querySelector('#nota2').value);

    //ENTRADA DA TERCEIRA NOTA
    nota3 = parseInt(document.querySelector('#nota3').value);

    //ENTRADA DA QUARTA NOTA
    nota4 = parseInt(document.querySelector('#nota4').value);

    /* VALIDAÇÃO */
    if(nota1 < 0 || nota1 > 10 || nota1 == undefined || nota1 == '' || isNaN(nota1)){
        alert('DIGITE UM VALOR VÁLIDO PARA NOTA 1');
        document.querySelector('#nota1').focus();
        document.querySelector('#nota1').value = '';
        return false;
    }

    if(nota2 < 0 || nota2 > 10 || nota2 == undefined || nota2 == '' || isNaN(nota2)){
        alert('DIGITE UM VALOR VÁLIDO PARA NOTA 2');
        document.querySelector('#nota2').focus();
        document.querySelector('#nota2').value = '';
        return false;
    }

    if(nota3 < 0 || nota3 > 10 || nota3 == undefined || nota3 == '' || isNaN(nota3)){
        alert('DIGITE UM VALOR VÁLIDO PARA NOTA 3');
        document.querySelector('#nota3').focus();
        document.querySelector('#nota3').value = '';
        return false;
    }

    if(nota4 < 0 || nota4 > 10 || nota4 == undefined || nota4 == '' || isNaN(nota4)){
        alert('DIGITE UM VALOR VÁLIDO PARA NOTA 4');
        document.querySelector('#nota4').focus();
        document.querySelector('#nota4').value = '';
        return false;
    }

    //CALCULO DA MÉDIA
    media = (nota1 + nota2 +nota3 + nota4) / 4;

    //VERIFICA SITUAÇÃO DO ALUNO(A)
    if(media >= 7){
        document.querySelector('#resultado').setAttribute('class', 'bg-success');
        document.querySelector('#resultado').innerHTML = 'APROVADO';
    }else{
        document.querySelector('#resultado').setAttribute('class', 'bg-danger');
        document.querySelector('#resultado').innerHTML = 'REPROVADO';
    }

}

//FUNÇÃO DE LIMPAR FORMULÁRIO
function limpar(){

    document.querySelector('#nota1').value = '';
    document.querySelector('#nota2').value = '';
    document.querySelector('#nota3').value = '';
    document.querySelector('#nota4').value = '';
    document.querySelector('#resultado').innerHTML = '-';
    document.querySelector('#resultado').setAttribute('class', '');

}