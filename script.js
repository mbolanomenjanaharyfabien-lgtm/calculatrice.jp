let expression ="";

function valeur(value){
    let resultas = document.getElementById("resultat");
    expression += value;
    resultat.textContent = expression;
}
function effacer(){
    let resultas = document.getElementById("resultat");
    resultat.textContent = "0";
    expression = "";
}

function supp(){
    let resultas = document.getElementById("resultat");
    expression = expression.slice(0, -1) ;
    resultat.textContent = expression;
}

function calculer(){
    let resultas = document.getElementById("resultat");
    expression = eval(expression);
    resultat.textContent = expression;
}



    




















