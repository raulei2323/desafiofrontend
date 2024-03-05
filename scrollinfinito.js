const containerofCards = document.querySelector ('.cardsContainer')

//?seleciona el contender de los divs

window.addEventListener('scroll', ()=> {
    const {scrollHeight, clientHeight, scrollTop} = document.documentElement
    
    scrollTop + clientHeight > scrollHeight - 2 && setTimeout(newContainerCards, 1000)
    //?se fijan parametros de las propiedades 
})


const newContainerCards = () => {
    const containerCard = document.createElement('div')
    containerCard.className = 'containerCard 5'
    cardsContainer.appendChild(containerCard)
}