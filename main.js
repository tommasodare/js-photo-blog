// Seleziono gli elementi della DOM
const rowEl = document.querySelector(".row")
const overlayEl = document.querySelector(".overlay")
const buttonEl = document.querySelector(".btn")
const overlay_imageEl = document.querySelector(".overlay_image")
console.log(overlay_imageEl);

// Fetch API
fetch("https://lanciweb.github.io/demo/api/pictures")
.then(response => response.json())
.then(data => {
    //console.log(data);

    for (let index = 0; index < data.length; index++) {
        const thisElement = data[index];
        //console.log(thisElement);

        rowEl.innerHTML += `<div class="card pt-3 mb-4 bg-white">
                    <img width="30px" class="pin" src="./asset/img/pin.svg" alt="Pin">
                    <img class="image" width="100%"
                        src=${thisElement.url}
                        alt="Skate Park">
                    <div class="card_text py-2">
                        <p class="date mb-0">${thisElement.date}</p>
                        <p class="place mb-0">${thisElement.title.toUpperCase()}</p>
                    </div>
                </div>`
        
    }

    const cardEl = document.querySelector(".card")
    //console.log(cardEl);
    const imageEl = document.querySelectorAll(".image")
    //console.log(imageEl);


    for (let index = 0; index < imageEl.length; index++) {
        const thisImage = imageEl[index]; // ho creato una costante che contiene tutte le card ciclate
        console.log(thisImage);

        thisImage.addEventListener("click", function() {

            overlayEl.classList.add("d-block") // posso sia usare classList per aggiungere una classe

            overlay_imageEl.src = thisImage.src
        
        }) 
    }

    buttonEl.addEventListener("click", function() {
        overlayEl.classList.remove("d-block")
    })

})
.catch(error => {
    console.error(error)
})