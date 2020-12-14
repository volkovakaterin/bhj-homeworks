const tabs = Array.from(document.querySelectorAll('.tab'));
//const tabActive = document.querySelector('.tab_active');
const tabContent = document.querySelectorAll('.tab__content');
//const tabContentActive = document.querySelector('.tab__content_active');
tabs.forEach( tab => {
    tab.addEventListener('click', function(){
        const tabActive = document.querySelector('.tab_active');
        const tabContentActive = document.querySelector('.tab__content_active');
        tabActive.classList.remove('tab_active');
        tabContentActive.classList.remove('tab__content_active');
        tab.classList.add('tab_active');
        let i = tabs.indexOf(tab); 
        tabContent[i].classList.add('tab__content_active');
})
}) 