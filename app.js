var buttonTranslate = document.querySelector("#btn-translate");
var inputText = document.querySelector("#txt-input");
var outputText = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/mandalorian.json"


function getTranslationURL(text) {
    return serverURL + "?" + "text= " + text
};


function errorHandler(error) {
    console.log("error occured", error);
    alert("This translation app is free to use and rate limited to 5 times per hour....Please try after some time!!")
}

function clickHandler() {
    var textInput = inputText.value;

    fetch(getTranslationURL(textInput))
    .then(response => response.json())
    .then(json => console.log(json.contents.translated))
    .catch(errorHandler)
};


buttonTranslate.addEventListener("click", clickHandler)









