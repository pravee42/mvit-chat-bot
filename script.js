import { marked } from "https://cdn.jsdelivr.net/npm/marked/lib/marked.esm.js";

const MessageInput = document.querySelector("#MessageInput");

const MessageList = document.querySelector("#MessageList");

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

async function toogleTryAgain() {
  
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

  const url = `https://mita-eng-relay.onrender.com/chat?brain_id=${
    JSON.parse(localStorage.getItem("userDetails")).name
  }&user_name=${name}&prompt=${promot}&level=student&phone=${
    JSON.parse(localStorage.getItem("userDetails")).contact
  }&email=${JSON.parse(localStorage.getItem("userDetails")).email}`;
  try {
    const response = await fetch(url);

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    const formattedMessage = await marked(data.message);
    // const summarizedMessage = await query({ inputs: formattedMessage });
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
      message: "Cannot Process the request. Try Again"
    });
    displayMessages()
    console.error("There was a problem with the fetch operation:", error, "error");
  }
  loading(false);
};

const displayMessages = async () => {
  const userAvatar = "https://th.bing.com/th/id/OIP.FZPwy2a4714RejChdfNfgwHaHa?rs=1&pid=ImgDetMain"
  // const userAvatar = "./images/useravatar.png"
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
        data.user === "bot" ? "./images/logo.png" : userAvatar
      );
      image.classList.add("rounded-full")
      const messageContentDiv = document.createElement("div");
      messageContentDiv.classList.add("message");
      messageContentDiv.innerHTML = data.user === "bot" ? marked(data.message)
        : data.message.toString()

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
  sendMessages(MessageInput.value, brainId, JSON.parse(localStorage.getItem("userDetails")).name);
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
    const url = `https://mita-eng-relay.onrender.com/history?phone=${data.contact}`;
    try {
      const response = await fetch(url);

      if (!response.ok) {
        throw new Error("Network response was not ok");
      }

      const data = await response.json();
      const historyMessages = data.history;
      historyMessages.map(async (chat) => {
        const formattedMessage = await chat.role === "assistant" ? marked(chat.content) : chat.content.toString();
        // const summarizedMessage = await query({ inputs: formattedMessage });
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
        // loading(false);
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
  const url = `https://mita-eng-relay.onrender.com/saveuser?phone=${contact}&name=${name}&email=${email}`;
  if (email !== "" && contact !== ""&& name !== "") {
    const res = fetch(url);
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
  const URL = `https://mita-eng-relay.onrender.com/clear_history?phone=${
    JSON.parse(localStorage.getItem("userDetails")).contact
  }`;
  const res = await fetch(URL);
}

document.getElementById("clearCache").addEventListener("click", Clearhistory);
