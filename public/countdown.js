const endDate = new Date("Sept 23, 2023 00:00:00").getTime();

const intervalID = setInterval(updateCountdown, 1000);
updateCountdown();
function updateCountdown() {
    function getDigits(digit) {
        if (digit < 10) {
            return ("0" + digit);
        }
        return (digit);
    }
    const currDate = new Date().getTime();
    let timeDiff = endDate - currDate;
    if (timeDiff > 0) {
        const days = Math.floor((timeDiff) / (1000 * 60 * 60 * 24));
        const hr = Math.floor((timeDiff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const min = Math.floor((timeDiff % (1000 * 60 * 60)) / (1000 * 60));
        const sec = Math.floor((timeDiff % (1000 * 60)) / (1000));
        document.querySelector('#days').innerText = getDigits(days);
        document.querySelector('#hours').innerText = getDigits(hr);
        document.querySelector('#minutes').innerText = getDigits(min);
        document.querySelector('#seconds').innerText = getDigits(sec);
    }
}

const navBar = document.querySelector('#main-navbar ul');
const hamburger = document.querySelector('.hamburger');
console.log(hamburger)
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('activated');
    navBar.classList.toggle('activated');
})
