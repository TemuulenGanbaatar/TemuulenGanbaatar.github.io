/*
1) leeres Array zum Speichern der aufgedeckten Karten
2) Karten richtig erzeugen (type) [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
3) Karten mischen (shuffle)
4) Karten zum Deck hinzufügen
5) Klick Eventhandler
----
6) Kartenlogik
    6.1) prüfen wie viele Karten aufgedeckt sind? (0,1,2)
    6.2) Wenn weniger als 2 -> aufdecken
    6.3) Erkennen ob 2 gleiche Karten aufdeckt wurde -> wenn
        gleich dann -> found; wenn nicht gleich -> verdecken

*/
const numberCards = 16
//1)
let openedCards = []
//
//2)
//TODO: Array erzeugen mit durchmischten Karten (16 Karten, 8 Typen(1-8))

/*  gemischte Karten aber nicht als function und nicht abhängig von numbercard
const randomarray = [1,1,2,2,3,3,4,4,5,5,6,6,7,7,8,8]
for(let i = randomarray.length-1; i>0; i--){
    const j = Math.floor(Math.random() * i)
    const temp = randomarray[i]
    randomarray[i] = randomarray[j]
    randomarray[j] = temp
  }
console.log(randomarray)
*/
let cardTypes=[]
for (let index = 0; index < numberCards/2; index++) {
    cardTypes.push(index+1)
    cardTypes.push(index+1)
}

cardTypes = shuffle(cardTypes)
let p = document.querySelector('.deck')
for (let index = 0; index < numberCards; index++) {
        let c = document.createElement('div')
        c.innerHTML = cardTypes[index]
        c.type = cardTypes[index]
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

   if(openedCards.length<2){
        c.classList.toggle('flipped')
        openedCards.push(c)
        if(openedCards.length == 2){
            if(openedCards[0].type == openedCards[1].type){
                //alert('gleich')
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('found')
                        openedCards.pop().classList.toggle('found')
                    },
                    1000
                )
            }

            else{
                //warten und wiederzurücksetzen
                //alert('nicht gleich')
                window.setTimeout(
                    ()=>{
                        openedCards.pop().classList.toggle('flipped')
                        openedCards.pop().classList.toggle('flipped')
                    },
                    1000
                )
            }
        }
   }
}



function shuffle(arra1) {
    var ctr = arra1.length, temp, index;
// While there are elements in the array
    while (ctr > 0) {
// Pick a random index
        index = Math.floor(Math.random() * ctr);
// Decrease ctr by 1
        ctr--;
// And swap the last element with it
        temp = arra1[ctr];
        arra1[ctr] = arra1[index];
        arra1[index] = temp;
    }
    return arra1;
}