const loginForm = document.querySelector("#loginForm");
//const loginInput = loginForm.querySelector("input");
const loginInput = loginForm.querySelector("input")
const loginButton = loginForm.querySelector("button")

const link = document.querySelector("a");
const greeting = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";
const savedUsername = localStorage.getItem(USERNAME_KEY);

function loginBtnSubmit(event) {
    event.preventDefault();
    loginForm.classList.add(HIDDEN_CLASSNAME);
    const username = loginInput.value;
    localStorage.setItem(USERNAME_KEY, username);
    showGreet(username);
}

function showGreet(username){
    greeting.innerText = `Hello! ${username}`;
    greeting.classList.remove(HIDDEN_CLASSNAME);
}

if(savedUsername === null) { //show form
    loginForm.classList.remove(HIDDEN_CLASSNAME);
    loginForm.addEventListener("submit", loginBtnSubmit);
} else { //show greetings   
    showGreet(savedUsername);
}