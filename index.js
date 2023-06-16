// intialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML
let myage=0
function increment() {
    console.log("the button is clicked => " + myage)
    //console.log (myage)
    myage+=1
    document.getElementById("counter-el").innerText = myage
}

function save() {

    document.getElementById("counter-el").innerText = 0
    document.getElementById("previous_count").textContent += " - " +myage
    myage=0

    
}