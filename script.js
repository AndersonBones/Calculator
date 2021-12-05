var size;

function insert(digit){
    let calc_area = document.getElementsByClassName("text-area")[0];
    str = calc_area.innerText;

    for(var i=0; i<str.length; i++){
        str = str.replace('+',',');
        str = str.replace('÷',',');
        str = str.replace('×',',');
        str = str.replace('-',',');
    }
    
    str = str.split(',');

    if(size >= 9){
        calc_area.style.fontSize = '30px';
    }
    if(size === 15){
        alert("Cant enter more than 15 digits");
    }

    if(size < 15){
        calc_area.innerText += digit;
    }
    
    size = calc_area.innerText.length;
}


function result(){
    let calc_area = document.getElementsByClassName("text-area")[0];
    let content = calc_area.innerText;
    
    content = content.replace("÷", '/');
    content = content.replace("×", '*');

    var index = content.indexOf('%');

    if(isNaN(content[index+1]) == false){
        content = content.replace("%", '/100*');
    }
    if(isNaN(content[index+1]) == true){
        content = content.replace("%", '/100');
    }
    
    calc_area.innerText = eval(content);
    size = calc_area.innerText.length;
}

function ClearAll(){
    let calc_area = document.getElementsByClassName("text-area")[0];
    calc_area.innerText = '';
    size = calc_area.innerText.length;
}


