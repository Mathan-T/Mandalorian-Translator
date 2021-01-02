var btnTranslate = document.querySelector("#btn-translate")
var textInput = document.querySelector("#txt-input")
var textOutput = document.querySelector("#output")

var serverURL = "https://api.funtranslations.com/translate/groot.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("Error occured", error);
    alert("This translation app is rate limited to 5 per hour....please try after sometime!!")
}

function clickHandler() {
    var inputText = textInput.value;


    fetch(getTranslationURL(inputText))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
};

btnTranslate.addEventListener("click", clickHandler)


















