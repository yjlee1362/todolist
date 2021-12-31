const weather = document.querySelector("#weather span:first-child");
const city = document.querySelector("#weather span:last-child");


const API_KEY = "1542a3bda775e77ce7a425e5e168fe82";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lng = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lng}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then((response) => response.json())
    .then((data) => {
      city.innerText = data.name;
      weather.innerText = `${data.weather[0].main} / ${data.main.temp}`;
    });
    

};
function onGeoError() {
    alert("can't find you.")
};
navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);

