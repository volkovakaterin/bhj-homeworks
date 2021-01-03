const reveal = document.querySelectorAll(".reveal");
console.log(reveal);
const windHeight = window.innerHeight;
console.log(windHeight);
reveal.forEach(element => {
    window.addEventListener('scroll', function() {
       if (element.getBoundingClientRect().top < windHeight & element.getBoundingClientRect().top >= 0) {
           element.classList.add('reveal_active');
        } else {
            element.classList.remove('reveal_active')
        }
    })
})