// const form = document.getElementById('form');
const button = document.getElementById('submit-btn');
const campos = document.querySelectorAll('.required');
const spans = document.querySelectorAll('.span-required');
const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

const telVal = /^([14689][0-9]|2[12478]|3([1-5]|[7-8])|5([13-5])|7[193-7])9[0-9]{8}$/;


//validando o envio das informações
button.addEventListener('click', (event) => {
    event.preventDefault();
    nameValidate();
    emailValidade();
    telValidade();
    msgValidade();

    //limpando os campos após o envio
    document.getElementById('nome-completo').value = '';
    document.getElementById('email').value = '';
    document.getElementById('telefone').value = '';
    document.getElementById('mensagens').value = '';


});

const sucessMessage = document.getElementById('campo-envio');

//inserindo avisos de erros no label
function setError(index) {
    campos[index].style.border = '2px solid red';
    spans[index].style.display = 'block';
}

function removeError(index) {
    campos[index].style.border = '';
    spans[index].style.display = 'none';
}


//validando nome
function nameValidate() {
    if (campos[0].value.length < 2) {
        setError(0);
    }
    else {
        removeError(0);
    }
}

//validando email
function emailValidade() {
    if (!emailRegex.test(campos[1].value)) {
        setError(1);
    }
    else {
        removeError(1);
    }
}

//validando telefone
 
function telValidade(){
   
    if (campos[2].value.length < 2) {
        setError(2);
    }
    else {
        removeError(2);
    }
}

//validando mensagemTexto
function msgValidade(){
    if (campos[3].value.length < 2) {
        setError(3);
    }
    else {
        removeError(3);
    }
}




