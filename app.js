// Variables pour les deux boutons d'interactions
const leftArrow = document.getElementById("left-arrow")
const rightArrow = document.getElementById("right-arrow")
// Variables pour les éléments changeants d'affichage
const logo = document.getElementById("logo")
const tittle = document.getElementById("tittle")
const text = document.getElementById("text")
const attach = document.getElementById("attach")
const ten = document.getElementById("ten")
const oneness = document.getElementById("oneness")
// Partie footer bar
const spheres = document.getElementsByClassName("sphere")
const chargingBar = document.getElementsByClassName("charging-bar")
// Varibale pour l'index courant du tableau de données
let index = 0
//  Varibale pour la valeur en pixel du positionnement de l'image
let pxValue = 0
// Objet contenant les données à afficher
const data = {
    logo: ["Star-Wars-img/Logo/Logo-Film1.png", "Star-Wars-img/Logo/Logo-Film2.png", "Star-Wars-img/Logo/Logo-Film3.png"],
    tittle: ["Un nouvel espoir", "L'empire contre-attaque", "Le retour du jedi"],
    text: ["C'est le premier opus de la saga Star Wars par la date de sortie, mais le quatrième    selon l'ordre chronologique de l'histoire", "La guerre entre le maléfique Empire galactique et son antagoniste, l'Alliance rebelle, bat soin plein.", "Le maléfique Empire galactique construit une nouvelle station spatiale Etoile de la mort pour anéantir définitivement l'Alliance rebelle."],
    ten: ["Star-Wars-img/7.png", "Star-Wars-img/8.png"],
    oneness: ["Star-Wars-img/7.png", "Star-Wars-img/0.png", "Star-Wars-img/3.png"],

}
// Fonction pour les différents affichages de la footer bar
function footerBar(target, index){
    if(target == rightArrow){
        chargingBar[index-1].classList.add("charged-bar")
        setTimeout(() => {
            spheres[index-1].classList.add("bright-sphere")
        }, 330);
        
    } else if(target == leftArrow){
        chargingBar[index].classList.remove("charged-bar")
        spheres[index].classList.remove("bright-sphere")
    }   
}
// Fonction pour effectuer le switch des éléments affichés
function switcher(target, index){
    const array = [logo, tittle, text, oneness]
    if(target == rightArrow){
        array.forEach(element => element.classList.add("slideright"))
        if(index === 1){
            attach.classList.add("slideAttach1")
            ten.classList.add("slideright")
        }
        if(index === 2){
            attach.classList.add("slideAttach2")
        }
    } else if(target == leftArrow){
        array.forEach(element => element.classList.add("slideleft"))
        if(index === 0){attach.classList.add("slideAttach3")}
        if(index === 1){attach.classList.add("slideAttach4")}
       /*  if(ten.src.includes("Star-Wars-img/7.png")){ten.classList.add("slideleft")} */
       if(index != 1){ten.classList.add("slideleft")}
    }
    setTimeout(()=>{
        logo.src = data.logo[index]
        tittle.textContent = data.tittle[index]
        text.textContent = data.text[index]
        oneness.src = data.oneness[index]
        if(target == rightArrow && (index == 2 || index == 1)){ten.src = data.ten[1]}
        if(target == leftArrow && index == 0){ten.src = data.ten[0]}
    }, 100)
    setTimeout(()=>{
        if(index === 0){pxValue = 0}
        if(index === 1){pxValue = -352}
        if(index === 2){pxValue = -704}
        array.forEach(element => element.classList.remove("slideright", "slideleft"))
        ten.classList.remove("slideright", "slideleft")
        attach.classList.remove("slideAttach1", "slideAttach2", "slideAttach3", "slideAttach4")
        attach.style.left = pxValue+"px"
    }, 350)
}
// Ajout d'évènements click sur les flèches pour changer l'affichage //
leftArrow.addEventListener("click", (e)=>{
    if(index > 0){
        index--
        switcher(leftArrow, index)
        footerBar(leftArrow, index)
    }
})
rightArrow.addEventListener("click", ()=>{
    if(index < 2){
        index++
        switcher(rightArrow, index)
        footerBar(rightArrow, index)
    }
})
    