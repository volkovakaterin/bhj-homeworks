const numberClicker = document.getElementById("clicker__counter");
const cookie = document.getElementById("cookie");
cookie.onclick = function () {
    numberClicker.textContent = parseInt(numberClicker.textContent, 10) + 1;
    if(numberClicker.textContent % 2 !== 0) {
    cookie.width = 300;
    cookie.height = 190;
    } else {
        cookie.width = 200;
        cookie.height = 127.922;
    }
}