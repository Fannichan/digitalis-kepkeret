import 'bootstrap/dist/css/bootstrap.css'
import 'bootstrap/dist/js/bootstrap.bundle'

let imgUrl
let thickness
let lenght

document.addEventListener("DOMContentLoaded", init)
function init(){
    document.getElementById("borderButton").addEventListener("click", Border)
}

function Border(){
    imgUrl = document.getElementById("url")
    thickness = document.getElementById("thickness").value
    lenght = document.getElementById("lenght").value
    if(imgUrl == ""){
        //hiba 1
        console.log("url hiba")
    }
    else if(thickness <= 0){
        //hiba 2
        thickness = 1
        console.log("vastagság hiba")
    }
    else if(lenght <= 0){
        //hiba 3
        lenght = 50
        console.log("hossz hiba")
    }
    else{
        //if everything correct
        // document.getElementById("finalimg").innerHTML = imgUrl
        document.getElementById("finalimg").innerHTML.style = "border: " + thickness + "px"
        document.getElementById("finalimg").innerHTML.style = "lenght:" + lenght + "px"
    }
}
