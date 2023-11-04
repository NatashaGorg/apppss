document.addEventListener('DOMContentLoaded', function() {
  const messageForm = document.getElementById('messageForm');
  const messageList = document.getElementById('messageList');
  const messageInput = document.getElementById('messageInput');
  let isNate = false;

  messageForm.addEventListener('submit', function(event) {
    event.preventDefault();
    sendMessage();
  });

  messageInput.addEventListener('keypress', function(event) {
    if (event.key === 'Enter') {
      event.preventDefault();
      sendMessage();
    }
  });

  function sendMessage() {
    const newMessage = messageInput.value.trim();
    if (newMessage) {
      const newListItem = document.createElement('li');
      const senderSpan = document.createElement('span');
      const messageSpan = document.createElement('span');

      newListItem.classList.add(isNate ? 'mine' : 'other');
      senderSpan.classList.add('sender');
      messageSpan.classList.add('message');

      senderSpan.textContent = isNate ? 'Nate:' : 'Anisija:';
      messageSpan.textContent = newMessage;

      newListItem.appendChild(senderSpan);
      newListItem.appendChild(messageSpan);
      messageList.appendChild(newListItem);

      messageInput.value = '';
      isNate = !isNate; // Alternates between 'Nate' and 'Anisija' for the next message
    }
  }
});
