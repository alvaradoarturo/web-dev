const DOG_URL = "https://dog.ceo/api/breeds/image/random";
const doggos = document.querySelector(".doggos");

const dogButton= document.querySelector(".dog-button");

dogButton.addEventListener("mouseup", getDoggo);


function getDoggo() {
    let promise = fetch(DOG_URL);
    console.log("Here");
    promise
    .then((response) => {
            const processingPromise = response.json();
            console.log(processingPromise);
            return processingPromise;
        })
    .then((processedPromise) => {
            const img = document.createElement("img");
            img.src = processedPromise.message;
            img.alt = "Cute dog";
            doggos.append(img);
        })
}
