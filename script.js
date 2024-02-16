import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

const MessageInput = document.querySelector('#MessageInput');

const MessageList = document.querySelector('#MessageList');

var messagesData = [
	{
		user: 'bot',
		message: 'Welcome to the Manakula Vinayagar Institute of Technology',
	},
	{
		user: 'user',
		message: 'Hello',
	},
];

const sendMessages = async (promot, brainId, name) => {
	const url = `https://mita.marvelcloudsolutions.tech/chat?brain_id=${brainId}&user_name=${name}&prompt=${promot}`;
	messagesData.push({ user: 'user', message: promot });
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		messagesData.push({ user: 'bot', message: data.message });
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
};

const displayMessages = async () => {
	try {
		messagesData.forEach((data) => {
			const messageDiv = document.createElement('div');
			messageDiv.classList.add(
				data.user === 'user' ? 'message-card-admin' : 'message-card-bot',
			);

			const profileDiv = document.createElement('div');
			profileDiv.classList.add(data.user === 'user' ? 'profile' : 'reply');

			const image = document.createElement('img');
			image.setAttribute(
				'src',
				data.user === 'user' ? './images/logo.png' : './images/image2.png',
			);

			const messageContentDiv = document.createElement('div');
			messageContentDiv.classList.add('message');
			messageContentDiv.innerHTML = data.message
				? marked(data.message)
				: data.message;

			messageDiv.appendChild(profileDiv);
			profileDiv.appendChild(image);
			messageDiv.appendChild(messageContentDiv);

			const wrapperDiv = document.createElement('div');
			wrapperDiv.classList.add('w-full');
			wrapperDiv.appendChild(messageDiv);
			wrapperDiv.appendChild(document.createElement('br'));

			MessageList.appendChild(wrapperDiv);
		});
	} catch (error) {
		console.log(error);
	}
};

displayMessages();

function generateRandomUUID() {
	const randomNumber = Math.floor(Math.random() * 9000) + 1000;
	const uuid = 'UUID-' + randomNumber.toString();
	return uuid;
}

const setBrainData = () => {
	const brainId = localStorage.getItem('brainId');
	if (!brainId) {
		const new_braindId = generateRandomUUID();
		localStorage.getItem('brainId', new_braindId);
	}
};

setBrainData();

document.querySelector('#sendbtn').addEventListener('click', function () {
	const brainId = localStorage.getItem('brainId');
	sendMessages(MessageInput.value, brainId, brainId);
});
