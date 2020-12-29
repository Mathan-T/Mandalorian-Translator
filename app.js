var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")

console.log(textInput);

function clickHandler() {
    console.log("clicked!");
    console.log("Input:", textInput.value);
};

btnTranslate.addEventListener("click", clickHandler)


