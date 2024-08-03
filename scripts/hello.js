const helloElement = document.getElementById("hello");
const greetings = [
    "Hi",
    "Hallo",
    "Hej",
    "Hola",
    "Bonjour",
    "Halo"
];

const maxCounter = greetings.length;
let counter = 0;

setInterval(function () {
    counter >= maxCounter - 1 ? counter = 0 : counter += 1;
    helloElement.innerHTML = greetings[counter];
}, 700);