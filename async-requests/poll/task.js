const pollTitle = document.getElementById('poll__title');
const pollAnswers = document.getElementById('poll__answers');
let xhr = new XMLHttpRequest();
xhr.open('GET', 'https://netology-slow-rest.herokuapp.com/poll.php');
xhr.send();
xhr.onload = function () {
    if (xhr.status != 200) {
        alert('Ошибка: ' + xhr.status);
        return;
    } let data = JSON.parse(this.responseText);
    console.log(data);
    let { answers, title } = data.data;
    pollTitle.innerHTML = `${title}`;
    for (let i = 0; i < answers.length; i++) {
        pollAnswers.insertAdjacentHTML('afterbegin', `<button class="poll__answer">${answers[i]}</button>`)
    }
    const pollAnswer = document.querySelectorAll('.poll__answer');
    pollAnswer.forEach(element => {
        element.addEventListener("click", () => {
            alert('Спасибо, ваш голос засчитан!');
        })
    });


}