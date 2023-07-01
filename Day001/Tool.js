// console.log("It worked!");
function gugudan(){
    var result  = "";
    var dan = document.getElementById("input01").value;
    for(var i=1; i<10; i++){
        result = result + dan;
        result = result + " * ";
        result = result + i;
        result = result + " = ";
        result = result + (dan * i);
        result = result  + "<br>";
    }

    // document.getElementById("small").textContent = result;
    document.getElementById("small").innerHTML = result;
}   