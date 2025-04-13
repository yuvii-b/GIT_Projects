function doTranslate()
{
    let inputLanguage = document.getElementById("fromLanguage").value;
    let outputLanguage = document.getElementById("toLanguage").value;
    let inputText = document.getElementById("fromLanguageText").value;
    let translatedText;
    if (!inputLanguage || !outputLanguage || inputText.trim() === "")
    {
        alert("Please fill in all fields!");
        return;
    }
    document.getElementById("toLanguageText").value = translatedText;
}