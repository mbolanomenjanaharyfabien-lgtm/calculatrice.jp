

function valeur(value){
   let resultas = document.getElementById("result");
   resultas.value  += value;
}

function effacer(){
    let resultas = document.getElementById("result");
    resultas.value = "";
}

function supp(){
    let resultas = document.getElementById("result");
    resultas.value = resultas.value.slice(0,-1);
}

function calcul(){
    let resultas = document.getElementById("result");
    resultas.value = eval(resultas.value);
}




    




















