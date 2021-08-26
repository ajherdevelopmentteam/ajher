// modal login and signup toggle
$(document).ready(function () {
    $('.first-button').on('click', function () {
        $('.animated-icon1').toggleClass('open');
    });
});

// select element
const selectCountry = document.querySelector('.select-country');
const optionSelect = document.querySelector('.option-select');
const valuePhone = document.querySelector('.value-phone');

// fetch from API
const getCountry = async function(){
    const res = await fetch("https://restcountries.eu/rest/v1/all" );
    const country = res.json();
    return country;
}

// put to select option
getCountry().then(a => {
    let html = ``;
    a.forEach(function(dat){
        html+=`<option value="${dat.name}">${dat.name}</option>`;
    });
    optionSelect.insertAdjacentHTML('afterend',html);
});

// change value phone calling codes
selectCountry.addEventListener('change',function(){
    getCountry().then(a => {
        const c = a.filter(b => b.name == selectCountry.value);
        valuePhone.value = `+${c[0].callingCodes[0]}`;
    });
});

// login and signup toggle
const loginBox = document.querySelector('.login');
const signupBox = document.querySelector('.sign-up');

const loginToggleBtn = document.querySelector('.btn-login');
const signupToggleBtn = document.querySelector('.btn-signup');
const signupToggleText = document.querySelector('.text-signup');

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

signupToggleText.addEventListener('click', function () {
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
const stepFunction = function (form1, form2, value1, value2, width, classSelector,back=false) {
    form1.style.left = `${value1}`;
    form2.style.left = `${value2}`;
    form1.style.transition = '1s';
    form2.style.transition = '1s';
    progressSignup.style.width = `${width}%`;
    if(!back){
        document.querySelector(classSelector).classList.remove('bg-secondary');
        document.querySelector(classSelector).classList.add('bg-primary');
    }else{
        document.querySelector(classSelector).classList.remove('bg-primary');
        document.querySelector(classSelector).classList.add('bg-secondary');
    }
    
};

btnNext1.addEventListener('click', function () {
    stepFunction(form1, form2, -500, 0, 31, '.circle-2');
});

btnNext2.addEventListener('click', function () {
    stepFunction(form2, form3, -500, 0, 61, '.circle-3');
});

btnNext3.addEventListener('click', function () {
    stepFunction(form3, form4, -500, 0, 91, '.circle-4');
});

btnPrev2.addEventListener('click', function () {
    stepFunction(form1, form2, 0, 500, 0, '.circle-2',back=true);
});

btnPrev3.addEventListener('click', function () {
    stepFunction(form2, form3, 0, 500, 31, '.circle-3',back=true);
});

btnPrev4.addEventListener('click', function () {
    stepFunction(form3, form4, 0, 500, 61, '.circle-4',back=true);
});

// nav change focus
const navItemList = document.querySelectorAll('.nav-item');
const changeNavFocus = function(element, typeAction){
    const classArr = ['active','text-info','text-garis'];
    classArr.forEach(function(cArr){
        if(typeAction === 'add'){
            element.children[0].classList.add(cArr);
        }else{
            element.children[0].classList.remove(cArr);
        }
    });
}
navItemList.forEach(function(data){
    changeNavFocus(data,'remove');
    if(data.dataset.page === window.location.href.split('/')[3].split('.')[0]){
        const elementActive = document.querySelector(`[data-page="${data.dataset.page}"]`);
        changeNavFocus(elementActive,'add');
    }
});
