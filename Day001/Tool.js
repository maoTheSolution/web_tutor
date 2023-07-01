// console.log("It worked!");
function gugudan(){
    var result  = "";
    // var dan = document.getElementById("input01").value;

    for(var dan=2; dan<6; dan++){
        for(var i=1; i<10; i++){
            result = result + dan + " * " + i + " = " + (dan*i) + "<br>";
        }
        result = result + "<br>";
    }

    // document.getElementById("small").textContent = result;
    document.getElementById("small").innerHTML = result;
}   