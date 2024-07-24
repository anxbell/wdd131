const currentYear = document.getElementById("currentyear");
const today = new Date();

currentYear.innerHTML = today.getFullYear();

document.addEventListener('DOMContentLoaded', () => {
    const hamButton = document.querySelector('#menu');
    const navigation = document.querySelector('.navigation');

    hamButton.addEventListener('click', function() {
        navigation.classList.toggle('open');
        hamButton.classList.toggle('open');
    });

});



