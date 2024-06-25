document.getElementById('messageForm').addEventListener('submit', function(event) {
  event.preventDefault();
  
  const name = document.getElementById('name').value;
  const message = document.getElementById('message').value;
  
  const messageBoard = document.querySelector('.message-board');
  
  const newMessage = document.createElement('div');
  newMessage.className = 'message';
  
  const messageHeader = document.createElement('div');
  messageHeader.className = 'message-header';
  
  const nameSpan = document.createElement('span');
  nameSpan.className = 'name';
  nameSpan.textContent = name;
  
  const timestampSpan = document.createElement('span');
  timestampSpan.className = 'timestamp';
  const now = new Date();
  timestampSpan.textContent = now.toLocaleTimeString() + ' ' + now.toLocaleDateString();
  
  messageHeader.appendChild(nameSpan);
  messageHeader.appendChild(timestampSpan);
  
  const messageBody = document.createElement('div');
  messageBody.className = 'message-body';
  messageBody.textContent = message;
  
  newMessage.appendChild(messageHeader);
  newMessage.appendChild(messageBody);
  
  messageBoard.appendChild(newMessage);
  
  document.getElementById('messageForm').reset();
});
