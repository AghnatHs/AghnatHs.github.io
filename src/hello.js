const helloTextElement = document.getElementById("hello-text");
const greetings = [
    "Hallo, nama saya",
    "Hi, my name is",
    "Hallo, mijn naam is",
    "Hallo Ich hei&szlig;e",
    "Γεια το όνομά μου είναι",
    "Hej mitt namn är",
    "Hola, mi nombre es",
    "こんにちは、私の名前は",
    "안녕 내 이름은",
    "Bonjour, je m'appelle"
];

const maxCounter = greetings.length;
let counter = 0;

setInterval(function () {
    counter >= maxCounter - 1 ? counter = 0 : counter += 1;
    helloTextElement.innerHTML = greetings[counter];
}, 700);


