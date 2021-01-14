const hasTooltip = document.querySelectorAll('.has-tooltip');
hasTooltip.forEach(element => {
    const {title} = element;
    element.insertAdjacentHTML('afterEnd',`<div class="tooltip">${title}</div>`);
    element.addEventListener('click', (event) => {
    event.preventDefault();
    const {left, top} = element.getBoundingClientRect();
    event.currentTarget.nextSibling.setAttribute("style", `left: ${left}px;`)
    if(event.currentTarget.nextSibling === document.getElementsByClassName('tooltip_active')[0])   
    { document.getElementsByClassName('tooltip_active')[0].classList.remove('tooltip_active')} 
    else if(document.getElementsByClassName('tooltip_active')[0]) {
        document.getElementsByClassName('tooltip_active')[0].classList.remove('tooltip_active');
    event.currentTarget.nextSibling.classList.add("tooltip_active")}
    else {event.currentTarget.nextSibling.classList.add("tooltip_active")}
    })
});