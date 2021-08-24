$(document).ready(function () {
    $(function () {
        $('.nav-modal').load('modal.html');
        $('.footer').load('footer.html');
    });
});

// DOM selection

// activity
const activityButtons = document.querySelector('.activity-buttons');
const activityButtonGroup = document.querySelectorAll('.activity-button');
const activityContents = document.querySelectorAll('.activity-content');

// homepage activity
activityButtons.addEventListener('click', (e) => {
    const clicked = e.target.closest('.activity-button');

    if (!clicked) return;

    activityButtonGroup.forEach((b) => b.classList.remove('activity-button-active'));
    activityContents.forEach((c) => c.classList.add('hidden'));
    clicked.classList.add('activity-button-active');

    document.querySelector(`.activity-content--${clicked.dataset.tab}`).classList.remove('hidden');
});

// progress bar
const progressBar = document.querySelector('.progress-bar');
const body = document.querySelector('body');
body.style.overflow = 'hidden';
let val = 0;
const loadingFunction = function () {
    val += 20;
    progressBar.style.width = `${val}%`;
    if (val >= 100) {
        clearInterval(loading);
        setTimeout(function () {
            body.style.overflow = 'visible';
            document.querySelector('.preloading').classList.add('hidden');
        }, 1000);
    }
};

let loading = setInterval(loadingFunction, 1000);
