// 1. Función para cargar el archivo CSS dinámicamente
function loadCSS(url) {
    const link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = url;
    document.head.appendChild(link);
}

// 2. Función para cargar el HTML del chatbot
function loadChatbotHTML(url) {
    fetch(url)
        .then(response => response.text())
        .then(data => {
            const chatbotContainer = document.createElement("div");
            chatbotContainer.innerHTML = data;
            document.body.appendChild(chatbotContainer);

            // 3. Después de cargar el HTML, cargamos el JavaScript del chatbot
            loadChatbotJS("chatbot.js");
        });
}

// 3. Función para cargar el archivo JavaScript del chatbot
function loadChatbotJS(url) {
    const script = document.createElement("script");
    script.src = url;
    document.body.appendChild(script);
}

// 4. Inyectamos el CSS, HTML y JS del chatbot
loadCSS("chatbot.css");       // Cargar el archivo CSS
loadChatbotHTML("chatbot.html");  // Cargar el HTML y posteriormente el JS

