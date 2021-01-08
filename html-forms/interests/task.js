const interestCheck = document.querySelectorAll('.interest__check');
console.log(interestCheck[0]);
interestCheck[0].onclick = function () {
    if (interestCheck[0].checked) {
        interestCheck[1].setAttribute('checked', '');
        interestCheck[2].setAttribute('checked', '');
    } else {
        interestCheck[1].removeAttribute('checked');
        interestCheck[2].removeAttribute('checked');
    }
};

interestCheck[3].onclick = function () {
    if (interestCheck[3].checked) {
        interestCheck[4].setAttribute('checked', '');
        interestCheck[5].setAttribute('checked', '');
    } else {
        interestCheck[4].removeAttribute('checked');
        interestCheck[5].removeAttribute('checked');
    }
}; 