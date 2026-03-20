const message_list = [
  "Hello! World",
  "This is a test of texting system like RPG",
  "I hope this works successfully :D",
  "There's nothing after this message",
  "I said nothing huh",
  "nothing fr",
  "nothing",
  "nothing beats",
  "nothing beats a",
  "nothing beats a jet-2 holiday✈",
];

let typing = false;
let messageIndex = 0;
let charIndex = 0;

const element = document.getElementById("text");

function type() {
  const message = message_list[messageIndex] ?? "";

  typing = true;

  if (charIndex < message.length) {
    element.textContent += message[charIndex];
    charIndex++;
    setTimeout(type, 50);
  } else {
    typing = false;
  }
}

document.addEventListener("click", () => {
  if (typing) {
    element.textContent = message_list[messageIndex];
    charIndex = message_list[messageIndex].length; 
    typing = false;
    return;
  }

  messageIndex++;
  if (messageIndex >= message_list.length) messageIndex = 0;

  element.textContent = "";
  charIndex = 0;

  type();
});

type();