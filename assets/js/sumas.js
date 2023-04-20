var ingresosmallarray = document.getElementsByClassName("ingresosmall")
for (var i = 0; i < ingresosmallarray.length; i++) {
    ingresosmallarray[i].addEventListener('input', calc_suma);
}

function calc_suma(){
    let n1 = parseFloat(document.querySelector("#numero1").value)
    let n2 = parseFloat(document.querySelector("#numero2").value)
    let n3 = parseFloat(document.querySelector("#numero3").value)
    let n4 = parseFloat(document.querySelector("#numero4").value)
    let n5 = parseFloat(document.querySelector("#numero5").value)

    let suma = n1+n2+n3+n4+n5;
    let promedio = suma/5;
    if(!isNaN(suma))
        document.querySelector("#result_sumas").innerHTML = `La suma de todos los números es ${suma} y el promedio de los números es ${promedio} `;
        else 
        document.querySelector("#result_sumas").innerHTML = ""
}