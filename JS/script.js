//FUNCION QUE ME APLICA EL ESTILO A LA OPCION SELECCIONADA EN EL MENU Y QUITA LAA PREVIAMENTE SELECCIONDA
function seleccionar(link){
    var opciones = document.querySelectorAll('#links a');
    opciones[0].className = "";
    opciones[1].className = "";
    opciones[2].className = "";
    opciones[3].className = "";
    opciones[4].className = "";
    link.className = "seleccionado";

    //HAACEMOS DESAPARECER EL MENU UNA VEZ QUE SE HA SELECCIONADO UNA OPCION EN EL MODO RESPONSIVE
    var x= document.getElementById("nav"); 
    x.className = "";
}

//FUNCION QUE MUESTRA EL MENU RESPONSIVE
function responsiveMenu(){
    var x = document.getElementById("nav");
    if(x.className===""){
        x.className = "responsive";
    }else{
        x.className = "";
    }
}

//DETECTO EL SCROLLING PARA APLICAR LA ANIMACIÓN DE LAS BARRA DE HABILIDADES
window.onscroll = function(){
    efectoHabilidades()
};

//FUNCION QUE APLICA LA ANIMACIÓN DE LA BARRA DE HABILIDADES
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top;
    if (distancia_skills >=300){
        document.getElementById("html").classList.add("barra-progreso1");
        document.getElementById("js").classList.add("barra-progreso2");
        document.getElementById("node").classList.add("barra-progreso3");
    }
}