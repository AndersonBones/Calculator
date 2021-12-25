
var calc_area = document.getElementsByClassName("text-area")[0];
var alert_message = document.getElementsByClassName("alert-message-container")[0];
var size = 0;


function FontSize(){ /* diminui a fonte */
    calc_area.style.fontSize = '30px';
}


function Add_Alert_message(){ /* alerta de limite de caracteres atigindo */
    alert_message.classList.add('alert-active');
}

function Remove_Alert_message(){
    alert_message.classList.remove('alert-active');
}

function insert(digit){
    
    if(size >= 9){ /*diminui a fonte quando a string alcança um determinado tamanho */
        FontSize();
    }

    if(size === 15){ /*dispara um alert quando o usuário atingir o limite de caracteres permitido */
        Add_Alert_message();
    }

    if(size < 15){ /* imprime os digitos na tela caso o tamanho atual da string esteja abaixo do limite permitido */
        calc_area.innerText += digit;
        Remove_Alert_message();
    }
    
    size = calc_area.innerText.length; /* recebe o tamanho atual da string */
}


function isNumber(n) { /* verifica se o caractere é numero */
    return !isNaN(parseFloat(n)) && isFinite(n);
}

function result(){

    /* substitui os sinais da string para que a mesma fique compatívei com a função eval */
    calc_area.innerText = calc_area.innerText.replace("÷", '/');
    calc_area.innerText = calc_area.innerText.replace("×", '*');

    let radicando = calc_area.innerText.slice(0, calc_area.innerText.indexOf('²')); /* recebe o radicando */

    /* verifica se a variavel radicando contém um valor numérico */
    if(radicando.length >= 1 &&  isNumber(radicando) == true){
        calc_area.innerText = calc_area.innerText.replace('²', '*'+radicando); /* é um valor numérico */
    }
    
    /* verifica de se o resultado do calculo é um número decimal ou não */ 
    if(eval(calc_area.innerText) % 1 === 0){ 
        calc_area.innerText = eval(calc_area.innerText); /* não é decimal */
    }
    else{
        calc_area.innerText = eval(calc_area.innerText).toFixed(2); /* é decimal */
    }
    
    size = calc_area.innerText.length; /* recebe o tamanho atual da string */
}

function backspace(){ /* Apaga um digito por vez */
    calc_area.innerText = calc_area.innerText.replace(calc_area.innerText[0], '');
    size = calc_area.innerText.length;   
}


function ClearAll(){ /* Limpa o campo de digitos */
    calc_area.innerText = '';
    calc_area.style.fontSize = '50px'; /* retorna a fonte para o tamanho inicial s*/
    size = calc_area.innerText.length; /* recebe o tamanho atual da string*/
}



