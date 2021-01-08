const hasTooltip = document.querySelectorAll('.has-tooltip');
console.log(hasTooltip);
hasTooltip.forEach(element => {
    element.addEventListener('click', (event) => {
    event.preventDefault();
    console.log(event.currentTarget);
    const {title} = event.currentTarget;
    console.log(title);
    })
});