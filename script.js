const messageList = document.querySelector('.message-list');
const chatMessageInput = document.getElementById('chat-message');
const sendMessageButton = document.getElementById('send-message');

const brainId = 1211; // Replace with your actual brain ID
const userName = 'praveen'; // Replace with the user's actual name

async function sendMessage(message) {
	try {
		const response = await axios.get(
			`https://mita.marvelcloudsolutions.tech/chat?brain_id=1211&user_name=praveen&prompt=${message}`,
		);

		const chatbotMessage = response.data.response;
		addMessage('Chatbot', chatbotMessage);
	} catch (error) {
		console.error(error);
		addMessage('Error', 'An error occurred while sending your message.');
	}
}

sendMessage('hi'); // Initial greeting from the chatbot

function addMessage(sender, message) {
	const messageElement = document.createElement('div');
	messageElement.classList.add('message');

	const senderElement = document.createElement('span');
	senderElement.classList.add('message-sender');
	senderElement.textContent = sender;

	sendMessage(chatMessageInput.value);
}
