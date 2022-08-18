const hamburgerBox = document.querySelector('.header-nav-two-hamburger');
const boxLineOne = document.querySelector('.header-nav-two-hamburger-line-one'); 
const boxLineTwo = document.querySelector('.header-nav-two-hamburger-line-two');
const boxLineThree = document.querySelector('.header-nav-two-hamburger-line-three'); 
const navTwo = document.querySelector('.navTwo');
const heroShadow = document.querySelector('.overShadow');   


hamburgerBox.addEventListener('click', function() {
    boxLineTwo.classList.toggle('vanish')
    boxLineOne.classList.toggle('rotateone')
    boxLineThree.classList.toggle('rotatethree')
    navTwo.classList.toggle('visible'); 
    heroShadow.classList.toggle('hide'); 

})

heroShadow.addEventListener('click', function() {
    boxLineTwo.classList.remove('vanish')
    boxLineOne.classList.remove('rotateone')
    boxLineThree.classList.remove('rotatethree')
    navTwo.classList.remove('visible')
    heroShadow.classList.remove('hide')
})


/** IMAGE CAROUSEL */
const leftBtn = document.querySelector('.carousel__btn-left'); 
const rightBtn = document.querySelector('.carousel__btn-right'); 
const toplayer = document.querySelectorAll('.carousel__box-toplayer');
const carouselBtnStyleLeft = document.querySelector('.carousel__btn-left-style');
const carouselBtnStyleRight = document.querySelector('.carousel__btn-right-style');   

let clickNum = 0; 

const boxLength = toplayer.length



toplayer.forEach((box, index) => {
    box.style.transform = `translateX(${100 * index}%)`;  
})

rightBtn.addEventListener('click', function(e) {     
    if(clickNum === boxLength - 1) {
         clickNum = boxLength - 1      
    } else {
        clickNum++ 
    }

    if(clickNum === boxLength - 1) {
        carouselBtnStyleRight.style.color = '#BBC8D4';
        carouselBtnStyleLeft.style.color = '#0AB3E4';         
    }
    
    toplayer.forEach((box, index) => {
        box.style.transform = `translateX(${100 * (index - clickNum)}%)`;         
    })
})



leftBtn.addEventListener('click', function(e) {
    clickNum--
    if(clickNum < 0) {
        clickNum = 0        
    }

    if(clickNum === 0) {
        carouselBtnStyleLeft.style.color = '#BBC8D4';
        carouselBtnStyleRight.style.color = '#0AB3E4';  
    } else {
        carouselBtnStyleLeft.style.color = '#0AB3E4';
        carouselBtnStyleRight.style.color = '#BBC8D4'; 
    }

    toplayer.forEach((box, index) => {
        box.style.transform = `translateX(${100 * (index - clickNum)}%)`        
    })
})

/** INTERSECTION OBSERVER */
const heroSection = document.querySelector('.hero');
const heroHeader = document.querySelector('.header'); 
const hyperA = document.querySelector('.header-nav-hyper-access');
const introContainer = document.querySelectorAll('.intro__container'); 
const introText = document.querySelectorAll('.intro__container__text');
const introImg = document.querySelectorAll('.intro__container__img');  

console.log(introContainer)

function obsCallback(entries, observe) {
  const [entry] = entries

    if(!entry.isIntersecting) {
        heroHeader.classList.add('sticky');
        hyperA.style.backgroundColor = '#0AB3E4';   
    } else {
        heroHeader.classList.remove('sticky');
        hyperA.style.backgroundColor = '#929090d9';       
    }

}

let options = {
    root: null,
    rootMargin: '10px',
    threshold: 0.1,
}

const observer = new IntersectionObserver(obsCallback, options)

observer.observe(heroSection)

// intro Observer


function intoCallback(entires, observer) {
    const [entry] = entires

    if(!entry.isIntersecting) {          
            entry.target.classList.remove('text-transform')           
              
    } else {        
            entry.target.classList.add('text-transform')             
            observer.unobserve(entry.target)    
    }
}

let introoptions = {
    root: null, 
    threshold: 0.1
}


const introObserver = new IntersectionObserver(intoCallback, introoptions)

introText.forEach((interTx) => {
    introObserver.observe(interTx)
})


function introImgCall(entries, observer) {
    const [entry] = entries

    console.log(entry.isIntersecting)

    if(!entry.isIntersecting) {
        entry.target.classList.remove('opacity')
    } else {
        entry.target.classList.add('opacity')
        observer.unobserve(entry.target)
    }

}

const introImgOptions = {
    root: null, 
    threshold: 0.1
}


const introImgObserver = new IntersectionObserver(introImgCall, introImgOptions)

introImg.forEach((img) => {
    introImgObserver.observe(img)
})
