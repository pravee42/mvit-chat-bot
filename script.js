import { marked } from 'https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js';

const MessageInput = document.querySelector('#MessageInput');

const MessageList = document.querySelector('#MessageList');

var messagesData = [
	{
		user: 'bot',
		message: 'Hi I am MITA, How can I Help You? BY Siddarth: ',
	},
];

function scrollToBottom() {
	MessageList.scrollTop = MessageList.scrollHeight;
}

const loading = (status) => {
	const loader = document.querySelector('#loader');
	const sendButton = document.querySelector('#sendbtn');
	if (status === true) {
		loader.classList.remove('hidden');
		loader.classList.add('flex');
		MessageInput.disabled = true;
		MessageInput.placeholder = 'Thinking...';
		MessageInput.classList.add('cursor-not-allowed');
		sendButton.classList.add('cursor-not-allowed');
		sendButton.classList.add('disabled');
		sendButton.disabled = true;
	} else {
		loader.classList.add('hidden');
		loader.classList.remove('flex');
		MessageInput.disabled = false;
		sendButton.disabled = false;
		sendButton.classList.remove('cursor-not-allowed');
		MessageInput.classList.remove('cursor-not-allowed');
		sendButton.classList.remove('disabled');
		MessageInput.placeholder = 'Type your questions here';
	}
};

const sendMessages = async (promot, brainId, name) => {
	loading(true);
	messagesData.push({ user: 'user', message: promot });
	displayMessages();

	const url = `https://mita.onrender.com/chat?brain_id=${brainId}&user_name=${name}&prompt=${promot}`;
	// http://mita.marvelcloudsolutions.tech/chat?brain_id=1211&user_name=praveen&prompt=wleocme
	try {
		const response = await fetch(url);

		if (!response.ok) {
			throw new Error('Network response was not ok');
		}

		const data = await response.json();
		messagesData.push({ user: 'bot', message: data.message });
		displayMessages();
		loading(false);
	} catch (error) {
		console.error('There was a problem with the fetch operation:', error);
	}
};

const displayMessages = async () => {
	MessageList.innerHTML = '';
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
				data.user === 'bot' ? './images/logo.jpg' : './images/useravatar.png',
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
	scrollToBottom();
};

displayMessages();

function generateRandomUUID() {
	const randomNumber = Math.floor(Math.random() * 656565656) + 1245821452;
	const uuid = 'MANDAI_NUMBER_' + randomNumber.toString();
	return uuid;
}

const setBrainData = () => {
	const brainId = localStorage.getItem('brainId');
	if (!brainId) {
		const new_braindId = generateRandomUUID();
		localStorage.setItem('brainId', new_braindId);
	}
};

setBrainData();

document.querySelector('#sendbtn').addEventListener('click', function () {
	const brainId = localStorage.getItem('brainId');
	sendMessages(MessageInput.value, brainId, brainId);
	MessageInput.value = '';
});

document.querySelector('#form').addEventListener('submit', function () {
	const brainId = localStorage.getItem('brainId');
	sendMessages(MessageInput.value, brainId, brainId);
	MessageInput.value = '';
});

const ShowBotValue = document.querySelector('#container11');
const showBotToogle = document.querySelector('#showBotToogle');

const ShowBot = () => {
	if (ShowBotValue.classList.contains('hidden')) {
		ShowBotValue.classList.remove('hidden');
		ShowBotValue.classList.add('block');
		ShowBotValue.classList.add('fade-in');
		showBotToogle.innerHTML = '<i class="bi bi-x"></i>';
		showBotToogle.classList.add('rotate');
	} else if (ShowBotValue.classList.contains('block')) {
		ShowBotValue.classList.add('hidden');
		ShowBotValue.classList.remove('block');
		showBotToogle.classList.remove('rotate');
		showBotToogle.innerHTML = '<i class="bi bi-robot"></i>';
	}
};

document.querySelector('#showBotToogle').addEventListener('click', function () {
	ShowBot();
});
