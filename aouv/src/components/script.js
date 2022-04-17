function action(){
    var listePhrases = new Array(
        "Action 1",
        "Action 2",
        "Action 3",
        "Action 4",
        "Action 5",
        "Action 6",
        "Action 7",
        "Action 8",
        "Action 9",
        "Action 10",
        "Action 11",
        "Action 12"
    );

     
    document.getElementById("phrase").innerHTML = listePhrases[Math.floor(Math.random() * listePhrases.length)];
}

function verite(){
    var listeverites = new Array(
        "Vérité 1",
        "Vérité 2",
        "Vérité 3",
        "Vérité 4",
        "Vérité 5",
        "Vérité 6",
        "Vérité 7",
        "Vérité 8",
        "Vérité 9",
        "Vérité 10",
        "Vérité 11",
        "Vérité 12"
    );

     
    document.getElementById("phrase").innerHTML = listeverites[Math.floor(Math.random() * listeverites.length)];
}

