var btnTranslate = document.querySelector("#btn-translate");
var txtInput = document.querySelector("#txt-input");
var outputBox = document.querySelector("#output");

var serverURL = "https://api.funtranslations.com/translate/mandalorian.json"

function getTranslationURL(text) {
    return serverURL + "?" + "text=" + text
}

function errorHandler(error) {
    console.log("error occured", error);
    alert("This translation app is rate limited to 5 times per hour.Please try after some time!!")
}

// taking input
function clickHandler() {
    var inputText = txtInput.value;

// calling server for processing
fetch (getTranslationURL(inputText))
.then (response => response.json())
.then (json => {
    var translatedText = json.contents.translated;
    outputBox.innerText = translatedText;
})
.catch(errorHandler)
}

btnTranslate.addEventListener("click", clickHandler)