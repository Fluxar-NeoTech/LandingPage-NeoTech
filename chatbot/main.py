from flask import Flask, request, jsonify, render_template
from dotenv import load_dotenv
import os
import google.generativeai as genai

# Carrega variáveis do .env
load_dotenv()

# Configura API Gemini
api_key = os.getenv("API_KEY")
if not api_key:
    raise RuntimeError("Coloque sua GEMINI_API_KEY no arquivo .env antes de rodar!")

genai.configure(api_key=api_key)

# Modelo Gemini
llm = genai.GenerativeModel(model_name="gemini-2.5-flash")

# Cria app Flask
app = Flask(__name__, static_folder="static", template_folder="templates")

# Lista de palavras proibidas
PROIBIDAS = [
    # português
    "puta", "merda", "caralho", "foda", "bosta", "cabrão", "idiota",
    # inglês
    "shit", "fuck", "bitch", "asshole", "damn", "dumb"
]

def contem_obscenidade(texto):
    texto_lower = texto.lower()
    for palavra in PROIBIDAS:
        if palavra in texto_lower:
            return True
    return False

def perguntar_ao_neobot(pergunta):
    """
    Envia a pergunta para a Gemini API e retorna a resposta.
    O prompt garante que o bot só fale sobre NeoTech.
    """
    prompt = f"""
Você é o NeoBot da NeoTech.
Responda de forma amigável, curta e profissional.
Responda apenas perguntas relacionadas à NeoTech.
Se a pergunta não for sobre NeoTech, responda: "Desculpe, só posso responder coisas sobre a NeoTech."

Pergunta do usuário: {pergunta}
Resposta:
"""
    resposta = llm.generate_content(prompt)
    return resposta.text.strip()

@app.route("/")
def home():
    return render_template("index.html")

@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("pergunta", "").strip()
    if not user_message:
        return jsonify({"resposta": "Digite uma pergunta válida."})
    
    # Verifica obscenidades
    if contem_obscenidade(user_message):
        return jsonify({"resposta": "Não posso responder conteúdo ofensivo ou obsceno."})
    
    try:
        resposta = perguntar_ao_neobot(user_message)
        return jsonify({"resposta": resposta})
    except Exception as e:
        print("Erro na API Gemini:", e)
        return jsonify({"resposta": "Erro ao processar a pergunta."})

if __name__ == "__main__":
    # Para desenvolvimento local
    app.run(host="0.0.0.0", port=5000, debug=True)
