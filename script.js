var basicDebug = function(node){
    node.innerHTML = "coucou " + node.innerHTML;
}

var sayHello = function(index){
    console.log("Hello dev day", i);
}

var advancedDebug = function(){
    for(var i=0; i<10; i++){
        sayHello(i);
    }
}

var levels = function(){
    debugger;
    console.log("niveau de base");
    debugger;
    console.info("niveau info avec une jolie icône");
    debugger;
    console.debug("En mode debug avec des logs");
    debugger;
    console.warn("Une alerte jaune");
    debugger;
    console.error("Une erreur inconnue");
    debugger;
    console.trace("Une trace à la main");
}

var traitementLong = function(){
    var date = new Date().getTime();
    console.time(date);

    var sleep = Math.floor(Math.random() * 1000);
    console.log("une fonction qui dure environ ", sleep, "ms");

    setTimeout(function(){
        console.timeEnd(date);
    }, sleep);
}

var table = function(){
    var values = [
        {
            nom: "Warren",
            prenom: "Marquis",
            role: "major"
        },
        {
            nom: "Domergue",
            prenom: "Daisy",
            role: "prisoner"
        },
        {
            nom: "Ruth",
            prenom: "John",
            role: "hangman"
        }
    ]

    console.table(values);
}

var base = function(index){
    console.group("base"+index);
    console.log("un truc basique");
    console.groupEnd("base"+index);
}

var nested = function(){
    console.group("Fonction globale");
    base(10);
    base(56);
    console.groupEnd("Fonction globale");
}