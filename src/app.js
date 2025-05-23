import "bootstrap";
import "./style.css";
import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

let excuseTag = document.getElementById('excuse');
let buttonTag = document.getElementById('button-generator');

let who = ['The dog', 'My grandma', 'The mailman', 'My bird'];
let action = ['ate', 'peed', 'crushed', 'broke'];
let what = ['my homework', 'my phone', 'the car'];
let when = ['before the class', 'when I was sleeping', 'while I was exercising', 'during my lunch', 'while I was praying'];

function ramdomWord(array) {
  let random = Math.floor(Math.random() * array.length);
  return array[random];
};

let randomWho = ramdomWord(who);
let randomAction = ramdomWord(action);
let randomWhat = ramdomWord(what);
let randomWhen = ramdomWord(when);

window.onload = function () {
  excuseTag.textContent = randomWho + ' ' + randomAction + ' ' + randomWhat + ' ' + randomWhen;
};

buttonTag.addEventListener('click', () => {
  location.reload();
});
