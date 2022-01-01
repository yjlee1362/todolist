const clock = document.querySelector("#clock");

function getClock() {
    const date = new Date();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    clock.innerText = `${hours}:${minutes}:${seconds}`;

}
getClock();//실행시 바로 실행
setInterval(getClock, 1000);//interval의 특성상 즉시 실행이 안되기 때문에 위에 함수 추가.

