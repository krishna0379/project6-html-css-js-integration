console.log("3.js")

function createTweetV1(){
    let tidRef = document.querySelector("#tid")
    console.log(tidRef.value)

tidRef.value=""
}

function createTweetV2(){

    let tidRef = document.querySelector("#tid")

    // Create Dynamic Object 
    let newObject = document.createElement("div")
    newObject.innerHTML = tidRef.value
    // Appending the child to parent
    let parent= document.querySelector('#container')
    parent.appendChild(newObject)

    tidRef.value = ""

}

function createTweetV3(){
    let tidRef = document.querySelector("#tid")

    let newObject = document.createElement('div')
    newObject.innerHTML = tidRef.value

    let parent =  document.querySelector("#container")
    parent.insertBefore(newObject, parent.children[2])

    tidRef.value=""

}
function randomColor() {
    let r = Math.floor(Math.random() * 255);
    let g = Math.floor(Math.random() * 255);
    let b = Math.floor(Math.random() * 255);

    let colorCode = `rgb(${r}, ${g}, ${b})`;
    return colorCode;
}

function createTweet(){
     let tidRef = document.querySelector("#tid")

     let newObject = document.createElement('div')
     newObject.innerHTML = tidRef.value
     newObject.style.color = randomColor()

     let parent = document.querySelector("#container")
     parent.insertBefore(newObject, parent.children[2])
     tidRef.value =""
}