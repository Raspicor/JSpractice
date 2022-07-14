const clock = document.querySelector("h2#clock"); 
//html 파일에서 h2의 id가 clock인 Element를 가져옴, #은 id를 나타냄

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;
}

getClock(); //웹사이트 실행 시 기다리지 않고 바로 현재 시간을 가져옴
setInterval(getClock, 1000); //웹사이트가 실행되고 1초를 기다려야함
/*
function sayHello() {
    console.log("hello");
}

setInterval(sayHello, 5000); //5000ms마다 sayHello 함수를 실행
setTimeout(sayHello, 5000); //5000ms기다렸다가 sayHello 함수를 실행
 */