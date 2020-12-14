const dropdownValue = document.querySelector('.dropdown__value');
const dropdownList = document.querySelector('.dropdown__list');
dropdownValue.addEventListener('click', function() {
    if(dropdownList.className.includes('dropdown__list_active')) {
        dropdownList.classList.remove('dropdown__list_active')
    } else {
    dropdownList.classList.add('dropdown__list_active')
    }
})

const dropdownLink = document.querySelectorAll('.dropdown__link');
dropdownLink.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault();
    dropdownValue.textContent = link.textContent; 
    dropdownList.classList.remove('dropdown__list_active');
  })  
})
