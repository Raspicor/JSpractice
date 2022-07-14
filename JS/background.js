const images = [ "0.jpeg", "1.jpeg", "2.jpeg"];
const randomImg = images[Math.floor(Math.random() * images.length)];

const bgImage = document.createElement("img"); // img란 요소를 html에 생성
bgImage.id = 'imageId';
bgImage.className = 'imageClass';
bgImage.src = `img/${randomImg}`;

document.body.append(bgImage);