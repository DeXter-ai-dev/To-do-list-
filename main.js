const chatMessages = document.getElementById('chat-messages');
const messageInput = document.getElementById('message-input');
const sendButton = document.getElementById('send-button');
const refreshButton = document.getElementById('refresh-button');

// Load chat history from local storage (if available)
const storedMessages = localStorage.getItem('chatMessages');
if (storedMessages) {
    chatMessages.innerHTML = storedMessages;
}

sendButton.addEventListener('click', () => {
    const message = messageInput.value;
    if (message) {
        const messageElement = document.createElement('div');
        messageElement.classList.add('message');
        messageElement.textContent = message;
        chatMessages.appendChild(messageElement);
        messageInput.value = '';

        // Save chat messages to local storage
        localStorage.setItem('chatMessages', chatMessages.innerHTML);
    }
});

refreshButton.addEventListener('click', clearChat);

function clearChat() {
chatMessages.innerHTML = '';
localStorage.removeItem('chatMessages');
}  