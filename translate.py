from flask import Flask, request, jsonify
from flask_cors import CORS
from googletrans import Translator

app = Flask(__name__)
CORS(app)

@app.route('/translate', methods=['POST'])
def translate():
    try:
        data = request.get_json()
        if not data or 'text' not in data or 'in' not in data or 'out' not in data:
            return jsonify({'error': 'Missing required fields: text, inputLang, or outputLang'}), 400

        text = data['text']
        in_lang = data['in']
        out_lang = data['out']

        translator = Translator()
        translated = translator.translate(text, src=in_lang, dest=out_lang)

        return jsonify({'result': translated.text})

    except Exception as e:
        print("Translation error:", str(e))
        return jsonify({'error': str(e)}), 500

if __name__ == '__main__':
    app.run(port=5000)
