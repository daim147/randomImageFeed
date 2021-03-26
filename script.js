const container  = document.querySelector(".container")

const unsplash = 'https://source.unsplash.com/random/'

const row = 10

for(let i = 0; i < row * 3; i++){
    const image = document.createElement("img")
    image.src = `${unsplash}${getrandomSize()}`
    container.appendChild(image)
}

function getrandomSize(){
    return `${getRandom()}x${getRandom()}`
}

function getRandom(){
    return Math.floor(Math.random() * 10) + 300
}