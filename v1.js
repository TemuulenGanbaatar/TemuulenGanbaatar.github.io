const numberCards = 16

let p = document.querySelector('.deck')

for (let index = 0; index < numberCards; index++)
{
    let c = document.createElement('div')
    c.innerHTML = index % 3 + 1
    c.addEventListener('click', flip)
    c.className="card"
    
    p.appendChild(c)

}

function flip(event) {
    //alert("test")
    this.classList.toggle('flipped')
}


