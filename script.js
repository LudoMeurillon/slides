console.log("Hello Dev Day");

var remplir = function(node){
    node.innerHTML = "coucou " + node.innerHTML;
    console.debug("Un truc tellement fou que ca se loggue dans la console");
    console.warn("Un alerte peu aussi avoir une stacktrace")
}