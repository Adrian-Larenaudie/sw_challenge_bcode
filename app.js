//storing interaction buttons
const leftArrow = document.getElementById("left-arrow");
const rightArrow = document.getElementById("right-arrow");

//storing main elements
const logo = document.getElementById("logo");
const title = document.getElementById("title");
const text = document.getElementById("text");
const attach = document.getElementById("attach");
const ten = document.getElementById("ten");
const oneness = document.getElementById("oneness");

//storing footer bar elements
const spheres = document.getElementsByClassName("sphere");
const chargingBar = document.getElementsByClassName("charging-bar");

//variable statement which will store the current index of an array of data
let index = 0;

//variable statement which will store the pixel value of the positioning of the image 
let pxValue = 0;

//object to store data to display dynamically
const data = {
    logo: ["Star-Wars-img/Logo/Logo-Film1.png", "Star-Wars-img/Logo/Logo-Film2.png", "Star-Wars-img/Logo/Logo-Film3.png"],
    title: ["Un nouvel espoir", "L'empire contre-attaque", "Le retour du jedi"],
    text: ["C'est le premier opus de la saga Star Wars par la date de sortie, mais le quatrième    selon l'ordre chronologique de l'histoire", "La guerre entre le maléfique Empire galactique et son antagoniste, l'Alliance rebelle, bat soin plein.", "Le maléfique Empire galactique construit une nouvelle station spatiale Etoile de la mort pour anéantir définitivement l'Alliance rebelle."],
    ten: ["Star-Wars-img/7.png", "Star-Wars-img/8.png"],
    oneness: ["Star-Wars-img/7.png", "Star-Wars-img/0.png", "Star-Wars-img/3.png"],
};

//function that allows to manage footer bar transitions
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

//function that allows to switch main elements and movie poster
function switcher(target, index){
    const array = [logo, title, text, oneness]
    if(target == rightArrow){
        array.forEach(element => element.classList.add("slideright"))
        if(index === 1){
            attach.classList.add("slideAttach1")
            ten.classList.add("slideright")
            leftArrow.src = "Star-Wars-img/brightArrow.svg"
        }
        if(index === 2){
            attach.classList.add("slideAttach2")
            rightArrow.src = "Star-Wars-img/Arrow.svg"
        }
    } else if(target == leftArrow){
        array.forEach(element => element.classList.add("slideleft"))
        if(index === 0){
            attach.classList.add("slideAttach3")
            leftArrow.src = "Star-Wars-img/Arrow.svg"
            rightArrow.src = "Star-Wars-img/brightArrow.svg"
        } else {
            leftArrow.src = "Star-Wars-img/brightArrow.svg"
        }
        if(index === 1){
            attach.classList.add("slideAttach4")
            rightArrow.src = "Star-Wars-img/brightArrow.svg"
        }
        if(index != 1){ten.classList.add("slideleft")}
    }
    setTimeout(()=>{
        logo.src = data.logo[index]
        title.textContent = data.title[index]
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

//buttons click events
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

