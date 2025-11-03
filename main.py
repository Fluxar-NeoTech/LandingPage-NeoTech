from flask import Flask, request, jsonify, render_template, send_from_directory
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
app = Flask(__name__, static_folder="public", static_url_path="/public")


def perguntar_ao_neobot(pergunta):
    """
    Envia a pergunta para a Gemini API e retorna a resposta.
    O prompt garante que o bot só fale sobre NeoTech.
    """
    prompt = f"""
# NeoTech 

## Sobre a empresa

*Nome completo da empresa:* NeoTech Ltda  
*Ano de fundação:* 2025  

### Fundadores e principais integrantes
*1º Ano:*
- Ana Caroline Garcia  
- Anna Carolline Bomfim  
- Caio Ambrósio  
- Carlos Amaral  
- Guilherme Marcato  
- Gustavo Sousa  
- Lucas Guerrieiro  
- Diego Nogueira  

*2º Ano:*
- Diogo Barbosa  
- Mayumi Castiglioni
- Letícia Nascimento
- Giovanna Nascimento  
- Heloisa Machado 
- Natália Trindade
- Maria Eduarda Cacciatore

---

## Missão
A NeoTech é uma empresa criada no início de 2025, com o objetivo de auxiliar os *Objetivos de Desenvolvimento Sustentável da ONU (ODS's)*.  
Atuamos no *ODS 9, buscando uma **gestão eficaz de estoque*, com indicativos de superlotação, escassez e necessidade de redirecionar o estoque.  
Com isso, reduzimos os custos das indústrias e o desperdício de matéria por questões de superlotação ou erros de comunicação.

---

## Visão
Queremos nos tornar a *maior empresa de gestão de estoque*, atuando dentro e fora do Brasil.  
Nossa visão é de um *mundo mais sustentável, com **menos perdas alimentícias*.

---

## Valores e princípios
- Determinação  
- Respeito  
- Franqueza  
- Simplicidade  

> Sem esses valores não é possível construir um mundo comunicativo e sustentável.  
> Esses são os pilares para a construção de um mundo melhor.

---

## Setor de atuação
- Gestão de estoque  
- Geração de gráficos relacionados ao estoque  

---

## Localização
*Endereço:* R. Irineu José Bordon, 335 - Vila Jaguara, São Paulo - SP, 05120-060  

---

## Produtos e serviços

### Principais produtos

#### Aos Gestores de Estoque oferece por meio do serviço do APP Fluxar:
*Fluxar:* Sistema de gerenciamento de estoque.  
Seu foco é auxiliar gestores com valores quantitativos do estoque (entrada e saída), mostrando quando o estoque esteve mais cheio e mais vazio.  
Quando o estoque estiver próximo de uma superlotação, o sistema enviará alertas e exibirá indústrias parceiras e seus contatos, para que o redirecionamento do estoque possa ser acordado.  

#### Dados analíticos do estoque
Nosso APP possibilita *alta performance dos analistas*, oferecendo gráficos e visualizações profundas sobre o estoque, além de painéis de controle e integração de dados.

*Resultado:* tomada de decisão mais rápida e prática, maior monitoramento e melhor gestão de desempenho.

#### Aos Analistas oferece por meio do serviço do Site do Fluxar:

##### DashBoards

O Fluxar gera *relatórios e dashboards com uso de inteligência artificial*, para permitir análises detalhadas e facilitadas dos dados sobre o estoque.

##### Assistente de I.A.  
O Fluxar possui um *chatbot inteligente para auxílio corporativo*, que sugere tomadas de decisões e fornece sínteses das informações do estoque para os usuários. Além disso, o assistente é capaz de:  

- *Tirar dúvidas sobre o estoque:* responder perguntas sobre o que há disponível, quantidades, localização e status dos produtos.  
- *Gerar relatórios de movimentação de estoque:* criar relatórios detalhados com entradas, saídas e fluxos internos de produtos.  
- *Consultar relatórios históricos:* acessar relatórios passados para análise de desempenho do estoque.  
- *Comparar relatórios:* identificar diferenças entre períodos ou unidades, mostrando variações de estoque e desempenho.  

*Resultado:* praticidade aumentada nos processos, decisões mais rápidas e baseadas em dados reais, maior controle e eficiência na gestão de estoque.

#### Análises rotineiras de fluxo
A partir de análises rotineiras, o fluxo empresarial é documentado, permitindo que gestores e analistas tenham um panorama geral diário e semanal.

*Resultado:* decisões mais precisas com consciência do fluxo cotidiano, otimizando tempo.

#### Dados que viram decisões
O Fluxar transforma informações em inteligência, oferecendo relatórios automáticos e dashboards claros, permitindo acompanhar desempenho das unidades, identificar gargalos e oportunidades de crescimento.

*Resultado:* decisões mais rápidas, baseadas em dados reais, não em suposições.

---

### Serviços oferecidos
- Auxílio a gestores com indicadores de entrada e saída de estoque.  
- Geração de relatórios e dashboards com IA.  
- Alertas automáticos de *superlotação* e indicação de *indústrias parceiras*.  

---

## Planos

| Plano | Mensal | Anual |
|--------|--------|--------|
| Essencial | R$ 599,99 | R$ 499,00 |
| Profissional | R$ 899,99 | R$ 799,00 |
| Enterprise | R$ 1.599,99 | R$ 1.499,00 |

> (Ver detalhes completos nos planos oficiais no site.)

---

## Formas de pagamento
- Pix  
- Débito  
- Crédito  

---

## Política de cancelamento e reembolso
Cancelamentos e reembolsos devem ser solicitados via e-mail:  
*suporte2025.neo.tech@gmail.com*

---

## Tecnologias utilizadas
- Inteligência Artificial (IA)  
- JavaScript (JS)  
- Servlet  
- SQL  
- HTML  
- CSS  
- Python (Flask)  
- Java  

---

## FAQ – Perguntas Frequentes

### Onde posso contratar um plano?  
→ Os planos podem ser contratados diretamente pelo site oficial ou entrando em contato pelo e-mail *suporte2025.neo.tech@gmail.com*.

---

### Como funciona o suporte técnico?  
→ O suporte técnico responde em até 48h úteis no plano Essencial, 12h úteis no Profissional e de forma prioritária no Enterprise.

---

### O que fazer se o sistema estiver fora do ar?  
→ Tente novamente em alguns minutos.  
Se persistir, envie um e-mail informando o erro e o horário ocorrido para *suporte2025.neo.tech@gmail.com*.

---

### Posso fazer upgrade de plano?  
→ Sim, a qualquer momento. Basta entrar em contato pelo e-mail de suporte.

---

### Quais navegadores são compatíveis?  
→ Recomendamos usar o *Google Chrome, **Edge* ou *Firefox* atualizados.

---

### O sistema é compatível com dispositivos móveis?  
→ Sim, o painel é *responsivo* e pode ser acessado via celular ou tablet.
────────────────────────────

Pergunta do usuário: {pergunta}
Resposta:
"""
    resposta = llm.generate_content(prompt)
    return resposta.text.strip()

# =====================
# ROTAS PRINCIPAIS
# =====================
# 🔹 Landing page
@app.route("/")
def home():
    return send_from_directory("public", "index.html")

# 🔹 Arquivos estáticos (CSS, JS, imagens)
@app.route("/public/<path:filename>")
def public_files(filename):
    return send_from_directory("public", filename)

# 🔹 Página do chatbot
@app.route("/chatbot")
def chatbot():
    return send_from_directory("public/pages", "chatBot.html")

# 🔹 API do chatbot
@app.route("/chat", methods=["POST"])
def chat():
    user_message = request.json.get("pergunta", "").strip()
    if not user_message:
        return jsonify({"resposta": "Digite uma pergunta válida."})
    try:
        resposta = perguntar_ao_neobot(user_message)
        return jsonify({"resposta": resposta})
    except Exception as e:
        print("Erro na API Gemini:", e)
        return jsonify({"resposta": "Erro ao processar a pergunta."})

# 🔹 Rodar local
if __name__ == "__main__":
    app.run(host="0.0.0.0", port=5000, debug=True)