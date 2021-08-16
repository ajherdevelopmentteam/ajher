// modal login and signup toggle
const loginBox = document.querySelector('.login');
const signupBox = document.querySelector('.sign-up');

const loginToggleBtn = document.querySelector('.btn-login');
const signupToggleBtn = document.querySelector('.btn-signup');

loginToggleBtn.addEventListener('click', function () {
    loginToggleBtn.classList.remove('btn-secondary');
    loginToggleBtn.classList.add('btn-active');

    signupToggleBtn.classList.add('btn-secondary');
    signupToggleBtn.classList.remove('btn-active');

    loginBox.classList.remove('hidden');
    signupBox.classList.add('hidden');
});

signupToggleBtn.addEventListener('click', function () {
    signupToggleBtn.classList.remove('btn-secondary');
    signupToggleBtn.classList.add('btn-active');

    loginToggleBtn.classList.add('btn-secondary');
    loginToggleBtn.classList.remove('btn-active');

    signupBox.classList.remove('hidden');
    loginBox.classList.add('hidden');
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

btnNext1.addEventListener('click', function () {
    form1.style.left = '-500';
    form2.style.left = '0';
    form1.style.transition = '1s';
    form2.style.transition = '1s';
    progressSignup.style.width = '25%';
    document.querySelector('.circle-2').classList.remove('bg-secondary');
    document.querySelector('.circle-2').classList.add('bg-primary');
});

btnNext2.addEventListener('click', function () {
    form2.style.left = '-500';
    form3.style.left = '0';
    form2.style.transition = '1s';
    form3.style.transition = '1s';
    progressSignup.style.width = '50%';
    document.querySelector('.circle-3').classList.remove('bg-secondary');
    document.querySelector('.circle-3').classList.add('bg-primary');
});

btnNext3.addEventListener('click', function () {
    form3.style.left = '-500';
    form4.style.left = '0';
    form3.style.transition = '1s';
    form4.style.transition = '1s';
    progressSignup.style.width = '74%';
    document.querySelector('.circle-4').classList.remove('bg-secondary');
    document.querySelector('.circle-4').classList.add('bg-primary');
});

btnPrev2.addEventListener('click', function () {
    form1.style.left = '0';
    form2.style.left = '500';
    form1.style.transition = '1s';
    form2.style.transition = '1s';
    progressSignup.style.width = '0%';
    document.querySelector('.circle-2').classList.add('bg-secondary');
    document.querySelector('.circle-2').classList.remove('bg-primary');
});

btnPrev3.addEventListener('click', function () {
    form2.style.left = '0';
    form3.style.left = '500';
    form2.style.transition = '1s';
    form3.style.transition = '1s';
    progressSignup.style.width = '25%';
    document.querySelector('.circle-3').classList.add('bg-secondary');
    document.querySelector('.circle-3').classList.remove('bg-primary');
});

btnPrev4.addEventListener('click', function () {
    form3.style.left = '0';
    form4.style.left = '500';
    form3.style.transition = '1s';
    form4.style.transition = '1s';
    progressSignup.style.width = '50%';
    document.querySelector('.circle-4').classList.add('bg-secondary');
    document.querySelector('.circle-4').classList.remove('bg-primary');
});