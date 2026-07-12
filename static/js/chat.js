async function sendMessage() {

    let input = document.getElementById("userInput");
    let message = input.value.trim();

    if (message === "") {
        return;
    }

    // User message
    addMessage(message, "user");

    input.value = "";

    // Thinking message
    addMessage("Thinking... 🤖", "ai");

    try {

        let response = await fetch("/ask", {

            method: "POST",

            headers: {
                "Content-Type": "application/json"
            },

            body: JSON.stringify({
                message: message
            })

        });

        let data = await response.json();

        removeThinking();

        addMessage(data.reply, "ai");

    }

    catch (error) {

        removeThinking();

        addMessage(
            "❌ Error: Unable to connect to Gemini API.",
            "ai"
        );

        console.error(error);

    }

}



function addMessage(text, type) {

    let box = document.getElementById("chatBox");

    let div = document.createElement("div");

    div.className = "message " + type;

    div.innerText = text;

    box.appendChild(div);

    box.scrollTop = box.scrollHeight;

}



function removeThinking() {

    let messages = document.querySelectorAll(".ai");

    let last = messages[messages.length - 1];

    if (last && last.innerText === "Thinking... 🤖") {

        last.remove();

    }

}



function closeChat() {

    window.location.href = "/desktop";

}



// Enter key support
document.getElementById("userInput").addEventListener("keypress", function (event) {

    if (event.key === "Enter") {

        sendMessage();

    }

});