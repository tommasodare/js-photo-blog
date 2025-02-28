// Seleziono gli elementi della DOM
const cardEl = document.querySelector(".card")
const imageEl = document.querySelector(".image")
const dateEl = document.querySelector(".date")
const placeEl = document.querySelector(".place")

console.log(cardEl, imageEl, dateEl, placeEl);

// Fetch API
fetch("https://lanciweb.github.io/demo/api/pictures")
.then(response => response.json())
.then(data => {
    console.log(data.response);

    const [imageValue, dateValue, palceValue] = data.response


})
.catch(error => {
    console.error(error)
})