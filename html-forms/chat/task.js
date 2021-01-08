const chatWidget = document.querySelector('.chat-widget');
const widgetSide = document.querySelector('.chat-widget__side');
console.log(chatWidget);
console.log(widgetSide);
widgetSide.addEventListener('click', () => {
    chatWidget.classList.add('chat-widget_active')
})
const messages = document.querySelector('.chat-widget__messages');
const widgetInput = document.querySelector('.chat-widget__input');
widgetInput.addEventListener('keydown', function (e) {
    if (e.keyCode === 13 & widgetInput.value !== "") {
        console.log(widgetInput.value);
        messages.innerHTML += `
      <div class="message message_client">
    <div class="message__time">${new Date().getHours() + ':' + new Date().getMinutes()}</div>
    <div class="message__text">${widgetInput.value}</div>
</div>`;
        messages.innerHTML += `
<div class="message">
  <div class="message__time">${new Date().getHours() + ':' + new Date().getMinutes()}</div>
  <div class="message__text">
    Добрый день, мы ещё не проснулись. Позвоните через 10 лет
  </div>
</div>`;

    }
})