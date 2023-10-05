let siffra = 0

function plusClick() {
    //alert("hallå")
    siffra = siffra + 1
    console.log(siffra)
    document.getElementById("minus")
    document.getElementById("taltext").innerHTML = siffra

}

const minusknapp = document.getElementById("minus")
minusknapp.addEventListener("click", minusClick)

function minusClick() {
    //siffra = siffra - 1
    //siffra =- siffra
    siffra--
    document.getElementById("taltext").innerHTML = siffra
    console.log(siffra)

}