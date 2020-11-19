  
const numberCards = 16

let p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.innerHTML = index + 1
        c.type = index % 2 + 1
        c.className="card"
        c.addEventListener('click',flipp)
        p.appendChild(c)
}

function flipp(event){

    if(!this.classList.contains('found'))
        openCard(this)
    //this.classList.toggle('flipped')
}
function openCard(c){
    alert("open")
}

