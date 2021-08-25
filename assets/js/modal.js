// modal login and signup toggle
$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
});
const loginBox = document.querySelector('.login');
const signupBox = document.querySelector('.sign-up');

const loginToggleBtn = document.querySelector('.btn-login');
const signupToggleBtn = document.querySelector('.btn-signup');

const toggleBtnFunc = function (btn1, btn2, box1, box2) {
    btn1.classList.remove('btn-secondary');
    btn1.classList.add('btn-active');

    btn2.classList.add('btn-secondary');
    btn2.classList.remove('btn-active');

    box1.classList.remove('hidden');
    box2.classList.add('hidden');
};

loginToggleBtn.addEventListener('click', function () {
    toggleBtnFunc(loginToggleBtn, signupToggleBtn, loginBox, signupBox);
});

signupToggleBtn.addEventListener('click', function () {
    toggleBtnFunc(signupToggleBtn, loginToggleBtn, signupBox, loginBox);
});

// signup modal
// selecting the elements
const form1 = document.querySelector('.signup-page-1');
const form2 = document.querySelector('.signup-page-2');
const form3 = document.querySelector('.signup-page-3');
const form4 = document.querySelector('.signup-page-4');

// selecting the buttons
// button next
const btnNext1 = document.querySelector('.to-next-page-1');
const btnNext2 = document.querySelector('.to-next-page-2');
const btnNext3 = document.querySelector('.to-next-page-3');

// button prev
const btnPrev2 = document.querySelector('.to-prev-page-2');
const btnPrev3 = document.querySelector('.to-prev-page-3');
const btnPrev4 = document.querySelector('.to-prev-page-4');

// progress signup
const progressSignup = document.querySelector('.progress-signup');

// step by step login-signup function
const stepFunction = function (form1, form2, value1, value2, width, classSelector) {
    form1.style.left = `${value1}`;
    form2.style.left = `${value2}`;
    form1.style.transition = '1s';
    form2.style.transition = '1s';
    progressSignup.style.width = `${width}%`;
    document.querySelector(classSelector).classList.remove('bg-secondary');
    document.querySelector(classSelector).classList.add('bg-primary');
};

btnNext1.addEventListener('click', function () {
    stepFunction(form1, form2, -500, 0, 25, '.circle-2');
});

btnNext2.addEventListener('click', function () {
    stepFunction(form2, form3, -500, 0, 50, '.circle-3');
});

btnNext3.addEventListener('click', function () {
    stepFunction(form3, form4, -500, 0, 74, '.circle-4');
});

btnPrev2.addEventListener('click', function () {
    stepFunction(form1, form2, 0, 500, 0, '.circle-2');
});

btnPrev3.addEventListener('click', function () {
    stepFunction(form2, form3, 0, 500, 25, '.circle-3');
});

btnPrev4.addEventListener('click', function () {
    stepFunction(form3, form4, 0, 500, 50, '.circle-4');
});

const navItemList = document.querySelectorAll('.nav-item');
console.log(navItemList);
navItemList.forEach(function(data){
    data.children[0].classList.remove('active');
    data.children[0].classList.remove('text-info');
    data.children[0].classList.remove('text-garis');

    if(data.dataset.page === window.location.href.split('/')[3].split('.')[0]){
        const elementActive = document.querySelector(`[data-page="${data.dataset.page}"]`);
        elementActive.children[0].classList.add('active');
        elementActive.children[0].classList.add('text-info');
        elementActive.children[0].classList.add('text-garis');
    }
});

