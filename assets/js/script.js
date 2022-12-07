const virusG = () => {
    birkin = document.querySelector("#birkin")

    if (birkin.style.borderRadius === "") {
        birkin.style.transition = "0.8s"
        birkin.style.borderRadius = "50px";
        birkin.style.filter = "hue-rotate(200deg) drop-shadow(1px 1px 50px red)"
        virusButton = document.querySelector("#virusGButton").innerHTML = "Quitar virus-G"
    }
    else if (birkin.style.borderRadius = ! "") {
        birkin.style.borderRadius = "";
        birkin.style.filter = ""
        birkin.style.filter = ""
        virusButton = document.querySelector("#virusGButton").innerHTML = "Agregar virus-G"
    }
}

const validadorDeBestias = () => {
    input1 = document.querySelector("#input1").value
    input2 = document.querySelector("#input2").value
    input3 = document.querySelector("#input3").value
    suma = parseInt(input1) + parseInt(input2) + parseInt(input3)
    if (suma < 0) {
        textoVerificador = document.querySelector("#textoVerificador").innerHTML = "No puede llevar stickers negativos, no sea bestia"
    }
}

const buttonVerificador = () => {
    input1 = document.querySelector("#input1").value
    input2 = document.querySelector("#input2").value
    input3 = document.querySelector("#input3").value
    suma = parseInt(input1) + parseInt(input2) + parseInt(input3)


    if (suma <= 10) {
        textoVerificador = document.querySelector("#textoVerificador").innerHTML = "Llevas " + suma + " stickers"
        validadorDeBestias()
    }
    else if (suma > 10) {
        textoVerificador = document.querySelector("#textoVerificador").innerHTML = "Llevas mas de 10 stickers, no sea bestia"
    }
}

const passwordVerificador = () => {
    select1 = document.querySelector("#select1").value
    select2 = document.querySelector("#select2").value
    select3 = document.querySelector("#select3").value
    textoInput = document.querySelector("#text-input")

    if (select1 == "D" && select2 == "C" && select3 == "M") {
        textoInput.innerHTML = "Locker DCM Correcto."
    }
    else if (select1 == "C" && select2 == "A" && select3 == "P") {
        textoInput.innerHTML = "Locker CAP Correcto."
    }
    else {
        textoInput.innerHTML = "Locker Password Incorrecto."
    }
}