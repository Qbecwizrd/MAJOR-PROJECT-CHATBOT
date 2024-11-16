const chatbox = document.getElementById("chatbox");
const userInput = document.getElementById("user-input");
const sendButton = document.getElementById("send-button");

function appendMessage(sender, text) {
  const message = document.createElement("div");
  message.classList.add("message", sender);
  message.textContent = text;
  chatbox.appendChild(message);

  // Scroll to the bottom
  chatbox.scrollTop = chatbox.scrollHeight;
}

// Handle sending messages
sendButton.addEventListener("click", () => {
  const userMessage = userInput.value.trim();
  if (userMessage) {
    appendMessage("user", userMessage); // Display user's message
    userInput.value = ""; // Clear input field

    // Placeholder bot response
    setTimeout(() => {
      appendMessage("bot", "I'm here to assist you!"); // Example bot response
    }, 500);
  }
});

// Send message on Enter key
userInput.addEventListener("keypress", (event) => {
  if (event.key === "Enter") {
    sendButton.click();
  }
});
