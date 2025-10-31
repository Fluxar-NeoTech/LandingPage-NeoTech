document.getElementById("send-btn").addEventListener("click", sendMessage);
document.getElementById("user-input").addEventListener("keypress", (e) => {
    if (e.key === "Enter") sendMessage();
});

function sendExample(text) {
    document.getElementById("user-input").value = text;
    sendMessage();
}

async function sendMessage() {
    const input = document.getElementById("user-input");
    const message = input.value.trim();
    if (!message) return;

    const log = document.getElementById("chat-log");
    log.innerHTML += `<p><b>Você:</b> ${message}</p>`;
    input.value = "";

    try {
        const response = await fetch("/chat", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ pergunta: message })
        });

        const data = await response.json();
        log.innerHTML += `<p><b>NeoBot:</b> ${data.resposta}</p>`;
    } catch (error) {
        log.innerHTML += `<p><b>Erro:</b> Não foi possível processar sua pergunta.</p>`;
    }
}
