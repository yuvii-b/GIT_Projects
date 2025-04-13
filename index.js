function doTranslate()
{
    let inputLanguage = document.getElementById("fromLanguage").value;
    let outputLanguage = document.getElementById("toLanguage").value;
    let inputText = document.getElementById("fromLanguageText").value;
    let translatedText = inputLanguage + outputLanguage;
    if (inputText.trim() === "")
    {
        alert("Please enter text to translate!");
        return;
    }
    document.getElementById("toLanguageText").value = translatedText;
}