//Alors ce code pemet de faire apparaitre une navbar quand on scrolle plis de 100 et la fait disparaitre sous de 100
//La on cree un constente header qui reference le premier element <header> et querySelector est un methose qui selectionne les elements
const header =document.querySelector("header");
//la on ajoute un ecouteur d'evenement a la fenetre "window" qui reagis a l'evenement "scroll"
window.addEventListener("scroll", function(){
//C'est la fonction qui sera exécutée lorsque l'événement de défilement se produira. Elle utilise classList.toggle pour ajouter ou supprimer la classe "sticky" à l'élément <header>. Le deuxième argument de toggle est une expression qui sera évaluée comme une chaîne de caractères, mais ce n'est pas ce qui était probablement prévu ici. Il semble y avoir une confusion car "sticky, window.scrollY > 100" est une seule chaîne de caractères, ce qui ne correspond pas à une condition JavaScript valide.    
    header.classList.toggle("sticky", window.scrollY > 100);
});

let menu=document.querySelector('#menu-icon');
let navlist=document.querySelector('.navlist');

menu.onclick=()=>{
    menu.classList.toggle('bx-x');
    navlist.classList.toggle('open');
}

window.onscroll=()=>{
    menu.classList.remove('bx-x');
    navlist.classList.remove('open');
}