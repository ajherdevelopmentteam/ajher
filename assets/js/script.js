// DOM selection

// activity
const activityButtons = document.querySelector('.activity-buttons');
const activityButtonGroup = document.querySelectorAll('.activity-button');
const activityContents = document.querySelectorAll('.activity-content');


// homepage activity
activityButtons.addEventListener('click',(e)=>{
  const clicked = e.target.closest('.activity-button');

  if(!clicked) return;

  activityButtonGroup.forEach(b=>b.classList.remove('activity-button-active'));
  activityContents.forEach(c=>c.classList.add('hidden'));
  clicked.classList.add('activity-button-active');

  document.querySelector(`.activity-content--${clicked.dataset.tab}`).classList.remove('hidden');
});

// progress bar
const progressBar = document.querySelector('.progress-bar');
const body = document.querySelector('body')
body.style.overflow = 'hidden';
let val = 0;
const loadingFunction = function(){
  val+=20;
  progressBar.style.width = `${val}%`;
  if (val >= 100) {
    clearInterval(loading);
    setTimeout(function(){
      body.style.overflow = 'visible'
      document.querySelector('.preloading').classList.add('hidden');
    },1000);
  }
}
let loading = setInterval(loadingFunction,1000);

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

btnNext1.addEventListener('click',function(){
  form1.style.left = "-500";
  form2.style.left = "0";
  form1.style.transition = "1s";
  form2.style.transition = "1s";
  progressSignup.style.width = "25%";
  document.querySelector('.circle-2').classList.remove('bg-secondary');
  document.querySelector('.circle-2').classList.add('bg-primary');
});

btnNext2.addEventListener('click',function(){
  form2.style.left = "-500";
  form3.style.left = "0";
  form2.style.transition = "1s";
  form3.style.transition = "1s";
  progressSignup.style.width = "50%";
  document.querySelector('.circle-3').classList.remove('bg-secondary');
  document.querySelector('.circle-3').classList.add('bg-primary')
});

btnNext3.addEventListener('click',function(){
  form3.style.left = "-500";
  form4.style.left = "0";
  form3.style.transition = "1s";
  form4.style.transition = "1s";
  progressSignup.style.width = "74%";
  document.querySelector('.circle-4').classList.remove('bg-secondary');
  document.querySelector('.circle-4').classList.add('bg-primary');
});

btnPrev2.addEventListener('click',function(){
  form1.style.left = "0";
  form2.style.left = "500";
  form1.style.transition = "1s";
  form2.style.transition = "1s";
  progressSignup.style.width = "0%";
  document.querySelector('.circle-2').classList.add('bg-secondary');
  document.querySelector('.circle-2').classList.remove('bg-primary');
});

btnPrev3.addEventListener('click',function(){
  form2.style.left = "0";
  form3.style.left = "500";
  form2.style.transition = "1s";
  form3.style.transition = "1s";
  progressSignup.style.width = "25%";
  document.querySelector('.circle-3').classList.add('bg-secondary');
  document.querySelector('.circle-3').classList.remove('bg-primary');
});

btnPrev4.addEventListener('click',function(){
  form3.style.left = "0";
  form4.style.left = "500";
  form3.style.transition = "1s";
  form4.style.transition = "1s";
  progressSignup.style.width = "50%";
  document.querySelector('.circle-4').classList.add('bg-secondary');
  document.querySelector('.circle-4').classList.remove('bg-primary');
});