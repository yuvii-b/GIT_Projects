function doTranslate(){
    const inputLanguage = document.getElementById("fromLanguage").value;
    const text = document.getElementById("fromLanguageText").value;
    const outputLanguage = document.getElementById("toLanguage").value;

    fetch('http://localhost:5000/translate', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({text: text, in: inputLanguage, out: outputLanguage})
    })
    .then(response => response.json())
    .then(data => {
        document.getElementById("toLanguageText").innerText = data.result;
    })
    .catch(error => alert('Error:', error))
}