const chatInput = document.querySelector(".chat-input textarea");
const sendChatBtn = document.querySelector(".chat-input span");
const chatbox = document.querySelector(".chatbox");
const chatbotToggler = document.querySelector(".chatbot-toggler");
const chatbotCloseBtn = document.querySelector(".close-btn");
const chatOptions = document.querySelector(".chat-options"); // Contenedor de botones
const chatOptionButtons = document.querySelectorAll(".chat-option"); // Botones individuales

let userMessage;

// Crear un mensaje de chat
const createChatLi = (message, className) => {
    const chatLi = document.createElement("li");
    chatLi.classList.add("chat", className);
    let chatContent = className === "outgoing" ? `<p>${message}</p>` : `<span class="material-symbols-outlined">smart_toy</span><p>${message}</p>`;
    chatLi.innerHTML = chatContent;
    return chatLi;
}

// Mostrar los botones después de enviar un mensaje
const handleChat = () => {
    userMessage = chatInput.value.trim();
    if (!userMessage) return;

    // Añadir mensaje del usuario
    chatbox.appendChild(createChatLi(userMessage, "outgoing"));
    chatbox.scrollTo(0, chatbox.scrollHeight);
    
    // Limpiar el área de texto
    chatInput.value = "";

    // Mostrar el mensaje de respuesta automática después de un tiempo
    setTimeout(() => {
        const incomingChatLi = createChatLi("Por favor selecciona alguna opción de abajo y te proporcionare información :)", "incoming");
        chatbox.appendChild(incomingChatLi);
        chatbox.scrollTo(0, chatbox.scrollHeight);
        generateResponse(incomingChatLi);  // Función simulada para generar una respuesta automática
    }, 600);

    // Mostrar los botones después de que el mensaje se haya enviado
    chatOptions.style.display = "block";
}

// Añadir evento a cada botón de opción
chatOptionButtons.forEach(button => {
    button.addEventListener("click", () => {
        const userOption = button.innerText;

        // Añadir el mensaje correspondiente a la opción seleccionada
        chatbox.appendChild(createChatLi(userOption, "outgoing"));
        chatbox.scrollTo(0, chatbox.scrollHeight);
        
        // Limpiar los botones después de seleccionar uno
        chatOptions.style.display = "none";

        setTimeout(() => {
            const incomingChatLi = createChatLi("...", "incoming");
            chatbox.appendChild(incomingChatLi);
            chatbox.scrollTo(0, chatbox.scrollHeight);
            
            // Respuesta simulada dependiendo de la opción seleccionada
            let botResponse;
            if (userOption.includes("horario")) {
                botResponse = "Nuestro horario de atencion es de lunes a viernes de 8:00-17:00 h";
            } else if (userOption.includes("telefono")) {
                botResponse = "El número de telefono al que puedes marcar es: 712 124 8706";
            } else if (userOption.includes("dirección")) {
                botResponse = "La dirección es: Calle del Capulin, s/n, esq. Profesora Gerarda Chimal, Atlacomulco, Mexico, 50450";
            } else if (userOption.includes("hacemos")) {
                botResponse = "La incubadora es un centro de apoyo a emprendedores que permite y facilita la creación de nuevas organizaciones a través de servicios integrales como acompañamiento durante su etapa de creación y maduración.";
            } else if (userOption.includes("Proceso")) {
                botResponse = "Para poder incubarte es necesario acudir a las instalaciones y empezar a dar seguimiento con las siguientes etapas:\n-Diagnostico\n-Incubación\n-Seguimiento\nEn la pestaña de modelo podras encontrar información mas detallada";
            } else if (userOption.includes("Albergue")) {
                botResponse = "Renta del espacio físico en el que se aloja un emprendedor o empresa para su crecimiento y desarrollo por un tiempo determinado, este servicio incluye:\n1.Energía eléctrica\n2.Estacionamiento\n3.Vigilancia\n4.Línea telefónica e internet\n5.Servicio de limpieza\n6.Sanitarios\n7.Mobiliario de oficina\nPuedes acudir a nuestras instalaciones y revisar el lugar si te interesa";
            } else if (userOption.includes("Redes")) {
                botResponse = "";
            } else if (userOption.includes("Cursos")) {
                botResponse = "Los cursos y talleres con los que contamos son:\n-Estrategias persuasivas para el buen fin\n-ABC de la fijación de precios\n-Contruye tu elevador PITCH\n-Marketing digital pata MIPYMES\n-Costos para artesanos\n-Proyecto de vida";
            } else if (userOption.includes("Beneficios")) {
                botResponse = "Al incubarte con nosotros, tendrás acceso a un entorno de apoyo integral diseñado para hacer crecer tu negocio. Ofrecemos asesoría personalizada por expertos, capacitaciones constantes, y un espacio físico donde podrás desarrollar tu proyecto.";
            } else if (userOption.includes("UAEM")) {
                botResponse = "No es necesario, si te interesa puedes acercarte a las instalaciones y empezar el proceso en el momento que desees, no esperes más";
            } else if (userOption.includes("c:")) {
                botResponse = "No hay límites para aquellos que creen en sí mismos";
            }
            incomingChatLi.querySelector("p").innerText = botResponse;
        }, 1000);
    });
});
document.getElementById('btn-link').addEventListener('click', function() {
    const botResponse = `El siguiente enlace te llevará a la <a href="https://www.facebook.com/Incubadora.UAEMex.Atlacomulco/" target="_blank">página de Fb de la Incubadora.</a>`;
      // Crear y agregar el mensaje en el chatbox
      const chatbox = document.querySelector('.chatbox');
      const incomingChatLi = document.createElement('li');
      incomingChatLi.classList.add('chat', 'incoming');
      incomingChatLi.innerHTML = `<span class="material-symbols-outlined">smart_toy</span><p>${botResponse}</p>`;
      chatbox.appendChild(incomingChatLi);
  
      // Hacer scroll hacia el último mensaje
      chatbox.scrollTo(0, chatbox.scrollHeight);
  });



// Eventos de envío de mensaje y mostrar/ocultar el chatbot
sendChatBtn.addEventListener("click", handleChat);
chatbotCloseBtn.addEventListener("click", () => document.body.classList.remove("show-chatbot"));
chatbotToggler.addEventListener("click", () => document.body.classList.toggle("show-chatbot"));
