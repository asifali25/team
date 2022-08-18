document.addEventListener('click', function(e) {
    if(e.target.matches(".faq__container-sign")) {
       const container =  e.target.closest(".faq__container")
       const paraBody = container.querySelector(".faq__container-text-p")
        paraBody.classList.toggle('show')
        const lineTwo = container.querySelector(".faq__container-sign-two"); 
        lineTwo.classList.toggle('disap')

        console.log('matches')
    } else {
        return
    }
})