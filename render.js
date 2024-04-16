function renderHTML() {
  const container = document.createElement("div");
  container.classList.add("container1");

  const innerContainer = document.createElement("div");
  innerContainer.id = "container11";
  innerContainer.classList.add(
    "container11",
    "h-[90%]",
    "border-2",
    "rounded",
    "rounded-xl",
    "drop-shadow",
    "bg-yellow-100",
    "w-full",
    "border-solid",
    "p-4",
    "relative",
    "hidden",
    "sm:h-[70%]",
    "sm:w-[500px]"
  );

  const iframe = document.createElement("iframe");
  iframe.classList.add("rounded-md");
  iframe.width = "100%";
  iframe.height = "200";
  iframe.src =
    "https://www.youtube-nocookie.com/embed/b298YNVcKKc?si=Bbb1uMiweP68v0u7";
  iframe.title = "Sathishzuz";
  iframe.frameBorder = "0";
  iframe.allow =
    "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share";
  iframe.referrerPolicy = "strict-origin-when-cross-origin";
  iframe.allowFullscreen = true;

  innerContainer.appendChild(iframe);

  const messageList = document.createElement("div");
  messageList.id = "MessageList";
  messageList.classList.add(
    "flex",
    "flex-col",
    "gap-2",
    "items-start",
    "w-100",
    "overflow-auto",
    "h-[330px]",
    "sm:h-[450px]",
    "mt-[10px]",
    "mb-[50px]"
  );

  innerContainer.appendChild(messageList);

  const userForm = document.createElement("div");
  userForm.id = "UserForm";
  userForm.classList.add(
    "flex",
    "flex-col",
    "gap-4",
    "sm:gap-10",
    "items-center",
    "w-full",
    "justify-center",
    "overflow-auto",
    "h-full"
  );

  const userFormContent = `
    <p class="block text-gray-700 font-bold mb-2">Please Enter User Details</p>
    <div class="w-full max-w-md mx-auto">
      <label for="name" class="block text-gray-700 font-bold mb-2">User Name</label>
      <input required type="text" id="name" placeholder="Name" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div class="w-full max-w-md mx-auto">
      <label for="email" class="block text-gray-700 font-bold mb-2">Email</label>
      <input required type="text" placeholder="Email" id="email" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <div class="w-full max-w-md mx-auto">
      <label for="contact" class="block text-gray-700 font-bold mb-2">Phone Number</label>
      <input required id="contact" type="text" placeholder="Phone Number" class="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" />
    </div>
    <button id="saveuserDetails" class="bg-blue-500 mt-2 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">Continue</button>
  `;

  userForm.innerHTML = userFormContent;

  innerContainer.appendChild(userForm);

  const bottomBox = document.createElement("div");
  bottomBox.id = "bottomBox";
  bottomBox.classList.add(
    "bottomBox",
    "absolute",
    "bottom-0",
    "sm:bottom-2",
    "items-center",
    "gap-2"
  );

  const bottomBoxContent = `
    <button id="clearCache" class="bg-blue-500 hover:bg-blue-600 text-white font-bold h-[50px] w-[100px] rounded focus:outline-none focus:shadow-outline">New +</button>
    <form id="form" class="inputbox">
      <input type="text" id="MessageInput" placeholder="Type your questions here" />
      <div id="loader" class="absolute w-[30px] h-[30px] right-20 hidden">
        <img src="https://mvit-chat-bot.vercel.app/images/logo.png" alt="Loader" />
      </div>
      <button id="sendbtn" class="button22 hover:shadow hover:shadow-xl">
        <i class="bi bi-send text-white"></i>
      </button>
    </form>
  `;

  bottomBox.innerHTML = bottomBoxContent;

  innerContainer.appendChild(bottomBox);

  container.appendChild(innerContainer);

  const showBotToggle = document.createElement("div");
  showBotToggle.id = "showBotToogle";
  showBotToggle.classList.add("button1");
  showBotToggle.innerHTML = '<i class="bi bi-robot"></i>';

  container.appendChild(showBotToggle);

  document.body.appendChild(container);
}

renderHTML();

document.head.innerHTML += `
<link
  rel="stylesheet"
  href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.11.3/font/bootstrap-icons.min.css"
/>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<link rel="preconnect" href="https://fonts.googleapis.com" />
<link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
<link
  href="https://fonts.googleapis.com/css2?family=Poppins:ital,wght@0,100;0,200;0,300;0,400;0,500;0,600;0,700;0,800;0,900;1,100;1,200;1,300;1,400;1,500;1,600;1,700;1,800;1,900&display=swap"
  rel="stylesheet"
/>`;

document.head.innerHTML += `
<style>
:root {
  font-family: "Poppins", sans-serif !important;
}

.container1 {
  position: absolute;
  bottom: 10px;
  right: 10px;
  display: flex;
  flex-direction: column;
  align-items: end;
  gap: 10px;
  padding: 10px;
}

.button1 {
  width: 50px;
  height: 50px;
  border-radius: 100px;
  background-color: rgb(61, 43, 226);
  color: antiquewhite;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  box-shadow: 0 1px 10px #4d3ab78a;
  transition: 0.2s all ease-in-out;
}

.bottomBox {
  width: 90%;
}

.button1:hover {
  box-shadow: -1px 2px 21px #673ab78a;
}

.bounce {
  animation: up-down 2s ease-in-out infinite;
}

@keyframes up-down {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-5px);
  }
  100% {
    transform: translateY(0);
  }
}
.button22 {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 50px;
  height: 50px;
  border-radius: 4px;
  padding: 10px 11px;
  background: linear-gradient(180deg, #09bddd 0%, #2c48df 100%);
  cursor: pointer;
  box-shadow: 0px 0px 6.033519744873047px 0px rgba(0, 0, 0, 0.1);
  outline: none;
  border: none;
}

.inputbox {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 100%;
  margin-top: 24px;
  align-items: center;
}

.inputbox input {
  border-radius: 4px;
  outline: none;
  width: 100%;
  padding: 6px 22px;
  height: 50px;
  border: 1.01px solid #e5e7eb;
}

@media screen and (max-width: 600px) {
  .inputbox input {
    border-radius: 4px;
    padding: 4px 22px;
    height: 40px;
  }
  .button22 {
    width: 40px;
    height: 40px;
    padding: 4px 11px;
  }
}

.message-card-admin {
  display: flex;
  flex-direction: row-reverse;
  align-items: start;
  text-align: end;
  width: 100% !important;
}

.message-card-bot {
  display: flex;
  flex-direction: row;
  position: relative;
  align-items: start;
  text-align: end;
}

.message-card-admin .message {
  margin-right: 16px;
}

.message-card-bot .message {
  background-color: #8bc34a26;
  padding: 4px 10px;
  color: #000000;
  max-width: 70%;
  overflow-x: auto;
  margin-top:10px;
}

.message {
  border-radius: 14px;
  background-color: #546fff;
  font-size: 16px;
  font-weight: 400;
  padding: 4px 10px;
  line-height: 30px;
  text-align: left;
  color: #ffffff;
}

.bot {
  top: 20px;
  left: 500px;
}

.bot svg {
  height: 150px;
  width: 243px;
}

img {
  width: 60px;
}

@media screen and (max-width: 700px) {
  .container11 {
    width: 90% !important;
  }

  .message {
    font-size: 12px;
    line-height: 20px;
  }
  img {
    width: 40px;
  }
}

::-webkit-scrollbar {
  width: 4px;
}

.container1 {
  padding: 10px;
}

.container1::-webkit-scrollbar {
  width: 4px;
}

::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 10px 10px #d5e6f7;
}

::-webkit-scrollbar-thumb {
  background-color: #09bddd;
}

.container1::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 10px 10px #d5e6f7;
}

.container1::-webkit-scrollbar-thumb {
  background-color: #09bddd;
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(20px);
  }

  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fadeIn 0.5s ease-in-out forwards;
}

@keyframes rotate {
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg);
  }
}

.rotate {
  animation: rotate 0.5s linear forwards;
}

menu, ol, ul {
  list-style: decimal !important;
  margin: auto !important;
  padding: 10px 15px !important;
}

a {
  color: blue !important; 
  text-decoration: underline; 
}

a:hover {
  color: red !important; 
}
</style>
`;

import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const MessageInput = document.querySelector("#MessageInput");

const MessageList = document.querySelector("#MessageList");

const HOST = "https://mita-mvit-backend.hf.space";

const userDetails = localStorage.getItem("userDetails")
  ? localStorage.getItem("userDetails")
  : false;

var TryAgain = false;

var messagesData = [
  {
    user: "bot",
    message: `Hi I am MITA, How can I Help You?`,
  },
];

function scrollToBottom() {
  MessageList.scrollTop = MessageList.scrollHeight;
}

const loading = (status) => {
  const loader = document.querySelector("#loader");
  const sendButton = document.querySelector("#sendbtn");
  if (status === true) {
    loader.classList.remove("hidden");
    loader.classList.add("flex");
    MessageInput.disabled = true;
    MessageInput.placeholder = "Thinking...";
    MessageInput.classList.add("cursor-not-allowed");
    sendButton.classList.add("cursor-not-allowed");
    sendButton.classList.add("disabled");
    sendButton.disabled = true;
  } else {
    loader.classList.add("hidden");
    loader.classList.remove("flex");
    MessageInput.disabled = false;
    sendButton.disabled = false;
    sendButton.classList.remove("cursor-not-allowed");
    MessageInput.classList.remove("cursor-not-allowed");
    sendButton.classList.remove("disabled");
    MessageInput.placeholder = "Type your questions here";
  }
};

const sendMessages = async (promot, brainId, name) => {
  loading(true);
  messagesData.push({ user: "user", message: promot });
  displayMessages();

  const url = `${HOST}/chat?brain_id=${
    JSON.parse(localStorage.getItem("userDetails")).name
  }&user_name=${name}&prompt=${promot}&level=student&phone=${
    JSON.parse(localStorage.getItem("userDetails")).contact
  }&email=${JSON.parse(localStorage.getItem("userDetails")).email}`;
  try {
    const response = await fetch(url, { mode: "no-cors" });

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const formattedMessage = await marked(data.message);
    messagesData.push({
      user: "bot",
      message:
        formattedMessage?.toLowerCase().includes("admission") ||
        formattedMessage?.toLowerCase().includes("contact")
          ? formattedMessage +
            `\n for More admission Related Contact: 9498093535`
          : formattedMessage.toString(),
    });
    displayMessages();
  } catch (error) {
    messagesData.push({
      user: "bot",
      message: "Cannot Process the request. Try Again",
    });
    displayMessages();
    console.error(
      "There was a problem with the fetch operation:",
      error,
      "error"
    );
  }
  loading(false);
};

const displayMessages = async () => {
  const userAvatar =
    "https://th.bing.com/th/id/OIP.FZPwy2a4714RejChdfNfgwHaHa?rs=1&pid=ImgDetMain";
  MessageList.innerHTML = "";
  try {
    messagesData.forEach((data) => {
      const messageDiv = document.createElement("div");
      messageDiv.classList.add(
        data.user === "user" ? "message-card-admin" : "message-card-bot"
      );

      const profileDiv = document.createElement("div");
      profileDiv.classList.add(data.user === "user" ? "profile" : "reply");

      const image = document.createElement("img");
      image.setAttribute(
        "src",
        data.user === "bot" ? "https://mvit-chat-bot.vercel.app/images/logo.png" : userAvatar
      );
      image.classList.add("rounded-full");

      const messageContentDiv = document.createElement("div");
      messageContentDiv.classList.add("message");

      if (data.user === "bot") {
        messageContentDiv.innerHTML = marked(data.message);
      } else {
        const sanitizedText = data.message.toString();
        messageContentDiv.textContent = sanitizedText;
        // messageContentDiv.innerHTML = `${data.message.toString()}`
      }

      messageDiv.appendChild(profileDiv);
      profileDiv.appendChild(image);
      messageDiv.appendChild(messageContentDiv);

      const wrapperDiv = document.createElement("div");
      wrapperDiv.classList.add("w-full");
      wrapperDiv.appendChild(messageDiv);
      wrapperDiv.appendChild(document.createElement("br"));

      MessageList.appendChild(wrapperDiv);
    });
  } catch (error) {
    console.log(error);
  }
  scrollToBottom();
};

displayMessages();

function generateRandomUUID() {
  let uuid = "";
  const characters = "0123456789abcdef";

  for (let i = 0; i < 16; i++) {
    uuid += characters.charAt(Math.floor(Math.random() * characters.length));
  }

  return uuid;
}

const setBrainData = () => {
  const brainId = localStorage.getItem("brainId");
  if (!brainId) {
    const new_braindId = generateRandomUUID();
    localStorage.setItem("brainId", new_braindId);
  }
};

setBrainData();

document.querySelector("#sendbtn").addEventListener("click", function () {
  const brainId = localStorage.getItem("brainId");
  sendMessages(
    MessageInput.value,
    brainId,
    JSON.parse(localStorage.getItem("userDetails")).name
  );
  MessageInput.value = "";
});

document.querySelector("#form").addEventListener("submit", function () {
  const brainId = localStorage.getItem("brainId");
  sendMessages(MessageInput.value, brainId, brainId);
  MessageInput.value = "";
});

const ShowBotValue = document.querySelector("#container11");
const showBotToogle = document.querySelector("#showBotToogle");

const ShowBot = () => {
  if (ShowBotValue.classList.contains("hidden")) {
    ShowBotValue.classList.remove("hidden");
    ShowBotValue.classList.add("block");
    ShowBotValue.classList.add("fade-in");
    showBotToogle.innerHTML = '<i class="bi bi-x"></i>';
    showBotToogle.classList.add("rotate");
  } else if (ShowBotValue.classList.contains("block")) {
    ShowBotValue.classList.add("hidden");
    ShowBotValue.classList.remove("block");
    showBotToogle.classList.remove("rotate");
    showBotToogle.innerHTML = '<i class="bi bi-robot"></i>';
  }
};

document.querySelector("#showBotToogle").addEventListener("click", function () {
  ShowBot();
});

async function LoadMessages() {
  if (localStorage.getItem("userDetails")) {
    const data = JSON.parse(localStorage.getItem("userDetails"));
    const url = `${HOST}/history?phone=${data.contact}`;
    try {
      const response = await fetch(url, {mode:'no-cors', referrerPolicy: 'strict-origin-when-cross-origin'});

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const historyMessages = data.history;
      historyMessages.map(async (chat) => {
        const formattedMessage =
          (await chat.role) === "assistant"
            ? marked(chat.content)
            : chat.content.toString();
        messagesData.push({
          user: chat.role === "assistant" ? "bot" : "user",
          message:
            formattedMessage?.toLowerCase().includes("admission") ||
            formattedMessage?.toLowerCase().includes("contact")
              ? formattedMessage +
                `\n for More admission Related Contact: 9498093535`
              : formattedMessage,
        });
        displayMessages();
        scrollToBottom();
      });
    } catch (error) {
      console.error("There was a problem with the fetch operation:", error);
    }
  }
}

function showMessages() {
  const MessageList = document.getElementById("MessageList");
  const UserForm = document.getElementById("UserForm");
  const bottomBox = document.getElementById("bottomBox");
  MessageList.classList.remove("hidden");
  MessageList.classList.add("flex");
  UserForm.classList.add("hidden");
  UserForm.classList.remove("flex");
  bottomBox.classList.add("flex");
  bottomBox.classList.remove("hidden");
}

function showForm() {
  const MessageList = document.getElementById("MessageList");
  const UserForm = document.getElementById("UserForm");
  const bottomBox = document.getElementById("bottomBox");
  MessageList.classList.add("hidden");
  MessageList.classList.remove("flex");
  UserForm.classList.remove("hidden");
  UserForm.classList.add("flex");
  bottomBox.classList.remove("flex");
  bottomBox.classList.add("hidden");
}

function saveUserDetails(e) {
  e.preventDefault();
  const name = document.getElementById("name").value;
  const email = document.getElementById("email").value;
  const contact = document.getElementById("contact").value;
  const url = `${HOST}/saveuser?phone=${contact}&name=${name}&email=${email}`;
  if (email !== "" && contact !== "" && name !== "") {
    const res = fetch(url, { mode: "no-cors" });
    const userDetails = {
      name: name,
      email: email,
      contact: contact,
    };
    localStorage.setItem("userDetails", JSON.stringify(userDetails));
    showMessages();
    LoadMessages();
  } else {
    alert("Please Fill All the Fields");
  }
}

const saveUserButton = document.getElementById("saveuserDetails");

saveUserButton.addEventListener("click", saveUserDetails);

if (userDetails) {
  showMessages();
  LoadMessages();
} else {
  showForm();
  LoadMessages();
}

async function Clearhistory() {
  const URL = `${HOST}/clear_history?phone=${
    JSON.parse(localStorage.getItem("userDetails")).contact
  }`;
  const res = await fetch(URL, { mode: "no-cors" });
}

document.getElementById("clearCache").addEventListener("click", Clearhistory);
