// Variables pour les deux boutons d'interaction
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
// Variable pour les éléments changeants d'affichage
const logo = document.getElementById("logo")
const tittle = document.getElementById("tittle")
const text = document.getElementById("text")
const attach = document.getElementById("attach")
const ten = document.getElementById("ten")
const oneness = document.getElementById("oneness")
// Varibale pour l'index courant du tableau de données
let index = 0
// Objet contenant les données à afficher
const data = {
    logo: ["Star-Wars-img/Logo/Logo-Film1.png", "Star-Wars-img/Logo/Logo-Film2.png", "Star-Wars-img/Logo/Logo-Film3.png"],
    tittle: ["Un nouvel espoir", "L'empire contre-attaque", "Le retour du jedi"],
    text: ["C'est le premier opus de la saga Star Wars par la date de sortie, mais le quatrième    selon l'ordre chronologique de l'histoire", "La guerre entre le maléfique Empire galactique et son antagoniste, l'Alliance rebelle, bat soin plein.", "Le maléfique Empire galactique construit une nouvelle station spatiale Etoile de la mort pour anéantir définitivement l'Alliance rebelle."],
    attach: ["Star-Wars-img/Un-Nouvel-Espoir.png", "Star-Wars-img/L-Empire-Contre-Attaque.png", "Star-Wars-img/Le-Retour-Du-Jedi.png"],
    ten: ["Star-Wars-img/7.png", "Star-Wars-img/8.png"],
    oneness: ["Star-Wars-img/7.png", "Star-Wars-img/0.png", "Star-Wars-img/3.png"],
}
// Ajout des évènements click sur les flèches pour changer l'affichage //
leftArrow.addEventListener("click", ()=>{if(index > 0){index--, switcher(index)}})
rightArrow.addEventListener("click", ()=>{if(index < 2){index++, switcher(index)}})

// Fonctions
function switcher(index){
    const array = [logo, tittle, text, oneness]
    array.forEach(element => element.classList.add("slide"))
    setTimeout(()=>{
        logo.src = data.logo[index]
        tittle.textContent = data.tittle[index]
        text.textContent = data.text[index]
    }, 100)
    setTimeout(()=>{
        array.forEach(element => element.classList.remove("slide"))
    }, 450)
}    