//menu lateral
 var menu_visible=false;
 let menu = document.getElementById("nav");
 function mostrarOcultarMenu(){
    if (menu_visible==false) {
        menu.style.display = "block";
        menu_visible = true;
    }
    else{
        menu.style.display = "none";
        menu_visible=false;
    }
 }
 //ocultar el menu una vez utilizado
 let links = document.querySelectorAll("nav a");
 for (var x=0; x <links.length; x++) {
    links[x].onclick = function(){
    menu.style.display = "none";
    menu_visible=false;
 }
}
// creo las barirtas de una barra particular por su id
function creaBarra(id_barra){
    for (let i = 0; i <=15; i++) {
      let div = document.createElement("div");
      div.className="e";
        id_barra.appendChild(div);
    }
}
// Selecionar todas las barrar para manipularlas
let html = document.getElementById("html");
creaBarra(html);
let php = document.getElementById("php");
creaBarra(php);
let bootstrap = document.getElementById("bootstrap");
creaBarra(bootstrap);
let mysql = document.getElementById("mysql");
creaBarra(mysql);
let angular = document.getElementById("angular");
creaBarra(angular);
let tyscrip = document.getElementById("tyscrip");
creaBarra(tyscrip);
//se va a guardar la cantidad de barritas que se van a ir pintando por cada barra para eso se utiliza un arreglo cada posison pertenece a un elemento 
let contadores = [-1,-1,-1,-1,-1,-1];
let entro = false;
function efectoHabilidades() {
 var habilidades = document.getElementById("habilidades");
 var distancia_skills = window.innerHeight - habilidades.getBoundingClientRect().top;
 if (distancia_skills>=300 && entro==false) {
    entro = true;
    const intervalHtml = setInterval(function(){
        pintarBarra(html, 15, 0, intervalHtml);
    },100);
    const intervalPhp = setInterval(function(){
        pintarBarra(php, 8, 1, intervalPhp);
    },100);
    const intervaBootstrap = setInterval(function(){
        pintarBarra(bootstrap, 8, 2, intervaBootstrap);
    },100);
    const intervalMysl = setInterval(function(){
        pintarBarra(mysql, 7, 3, intervalMysl);
    },100);
    const intervalAngular = setInterval(function(){
        pintarBarra(angular, 4, 4, intervalAngular);
    },100);
    const intervalTyscrip = setInterval(function(){
        pintarBarra(tyscrip, 4, 5, intervalTyscrip);
    },100);

 }   
}
function pintarBarra(id_barra, cantidad, indice, interval){
    contadores[indice]++;
    x = contadores[indice];
    if (x <  cantidad) {
        let elementos = id_barra.getElementsByClassName("e");
        elementos[x].style.backgroundColor = "#0084ff";
    }
    else{
        clearInterval(interval)
    }
}
// Para animar la barra con crecania del scrol
window.onscroll= function(){
    efectoHabilidades();
}