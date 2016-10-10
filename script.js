var basicDebug = function(node){
    node.innerHTML = "coucou " + node.innerHTML;
}

var sayHello = function(source, index){
    console.log("Hello dev day", index, "from", source);
}

var advancedDebug = function(node){
    for(var i=0; i<10; i++){
        sayHello(node, i);
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



////////////////////////////////


var cookieTest = function(){
    document.cookie = "devday-prez=ChromeAsYourIDE";
    document.cookie = "devday-slide=Application";
    document.cookie = "devday-speaker=Ludovic Meurillon";
    document.cookie = "devday-time="+new Date().getTime();
    console.debug(document.cookie);
}


var storageTest = function(){
    var key = "devday";
    localforage.config({
        driver: localforage.INDEXEDDB,
        name: "DevDayStore",
        storeName: "values"
    });

    var values = [];
    values.push({type:"local", valeur: localStorage[key]});
    values.push({type:"session", valeur: sessionStorage[key]});

    localforage.getItem(key)
        .then(function(value){
            values.push({type:"indexedDB", valeur: value});
            return values;
        })
        .catch(function(error){
            values.push({type:"indexedDB", valeur: error});
            return values;
        })
        .then(function(values){
            console.table(values);
        });

    //Update stores
    localStorage[key] = new Date().getTime();
    sessionStorage[key] = new Date().getTime();

    localforage.setItem(key, new Date().getTime());
}


var loadImages = function(node){
    var parentNode = $('.c-images');
    for(var i=1; i<16; i++){
        parentNode.innerHTML = parentNode.innerHTML+'<img src="images/orange'+i+'.png" class="c-media"/>'
    }
}