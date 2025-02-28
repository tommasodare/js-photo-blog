fetch("https://lanciweb.github.io/demo/api/pictures/")
.then(response => response.json())
.then(data => {
    console.log(data);
})
.catch(error => {
    console.error(error)
})

// Seleziono gli elementi della DOM
const cardEl = document.querySelector(".card")
const imageEl = document.querySelector(".image_box")
const placeEl = document.querySelector(".place")
const dateEl = document.querySelector(".date")