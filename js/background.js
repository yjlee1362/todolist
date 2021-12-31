const images = [
    "0.png", "1.png", "2.png"
];

const chosenImage = images[Math.floor(Math.random() * images.length)];

const bgi = document.createElement("img");

bgi.src = `img/${chosenImage}`;

document.body.appendChild(bgi);