import asyncio
from googletrans import Translator
async def translate_text():
    translator = Translator()
    text = "Hello, how are you?"
    translated_text = await translator.translate(text, src='en', dest='es')
    print(f"Original Text: {text}")
    print(f"Translated Text: {translated_text.text}")
asyncio.run(translate_text())
