document.getElementById("celcius").addEventListener("input", calcular)
function calcular(){
    let celsius = parseFloat(document.querySelector("#celcius").value);

    if(!isNaN(celsius)) {
        document.querySelector("#kelvin").innerHTML = (celsius + 273.15).toFixed(2);
        document.querySelector("#fahrenheit").innerHTML = (celsius * 9 /5) + 32;
    }
    else{
        document.querySelector("#kelvin").innerHTML = "";
        document.querySelector("#fahrenheit").innerHTML = "";
    }
    if(celsius > 45)
        document.body.style.backgroundImage = "url('assets/img/f_muyalta.jpg')";
    else if(celsius > 30)
        document.body.style.backgroundImage = "url('assets/img/f_alta.jpg')";
    else if(celsius < 15)
        document.body.style.backgroundImage = "url('assets/img/f_baja.jpg')";
    else
        document.body.style.backgroundImage = "url('assets/img/f_normal.jpg')";
}

function changeitem(i){
    if(i == 0){
        document.querySelector("#container_calculadora").style.marginLeft = "0";
        document.querySelector("#container_dias").style.marginLeft = "200vw";
        document.querySelector("#container_numeros").style.marginLeft = "200vw";
        calcular();        
    }
    else if(i == 1) {
        document.querySelector("#container_calculadora").style.marginLeft = "-200vw";
        document.querySelector("#container_dias").style.marginLeft = "0";
        document.querySelector("#container_numeros").style.marginLeft = "200vw";
        document.body.style.backgroundImage = "url('assets/img/f_calendario.jpg')";
    }
    else if(i == 2) {        
        document.querySelector("#container_calculadora").style.marginLeft = "-200vw";
        document.querySelector("#container_dias").style.marginLeft = "-200vw";
        document.querySelector("#container_numeros").style.marginLeft = "0";
        document.body.style.backgroundImage = "url('assets/img/f_matematicas.jpg')";
    }
}