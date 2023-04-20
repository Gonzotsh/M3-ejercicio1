document.getElementById("dias").addEventListener("input", calc_dias)
function calc_dias(){
    
    let dia_input = parseFloat(document.querySelector("#dias").value);
    if(!isNaN(dia_input)) {
        let anios = Math.floor(dia_input/365);
        let semanas = Math.floor((dia_input - (365*anios))/7);
        let dias = dia_input- (365*anios) - (7*semanas)
        let anio_plural = "año", semana_plural = "semana", dia_plural = "dia";

        if(anios > 1 || anios == 0)
            anio_plural = "años";
        if(semanas >1 || semanas == 0)
            semana_plural = "semanas"
        if(dias > 1 || dias == 0)
            dia_plural = "dias"

        document.querySelector("#result_dias").innerHTML = `Los días ingresados corresponden a ${anios} ${anio_plural}, ${semanas} ${semana_plural} y ${dias} ${dia_plural} `;
    }
    else {
        document.querySelector("#result_dias").innerHTML = "Ingresa un número acá arriba y ve a cuántos años, semanas y días corresponde";
    }
}