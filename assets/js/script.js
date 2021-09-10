$(document).ready(function () {
    $(function () {
        $('.nav-modal').load('include/modal.html');
        $('.footer').load('include/footer.html');
    });

    // arrow
    $(".arrow").click(function() {
        $('html,body').animate({
            scrollTop: $(".to-here").offset().top},
            'fast');
    });

    $(window).scroll(function(){
        // scroll-up button show/hide script
        if(this.scrollY > 500){
            $('.scroll-up-btn').addClass("show");
        }else{
            $('.scroll-up-btn').removeClass("show");
        }
    })
    
    // slide-up script
    $('.scroll-up-btn').click(function(){
        console.log("terclick")
        $('html,body').animate({scrollTop: $(".nav-modal")},'fast');
        // removing smooth scroll on slide-up button click
        $('html').css("scrollBehavior", "smooth");
    });

});


// DOM selection
// activity
// 

const buttonsActivity = document.querySelectorAll(".button-activity");
const plus = 'M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z';
const minus = 'M4 8a.5.5 0 0 1 .5-.5h7a.5.5 0 0 1 0 1h-7A.5.5 0 0 1 4 8z';
buttonsActivity.forEach(function(button){
    button.addEventListener('click',function(){
        buttonsActivity.forEach((button)=>button.children[0].children[1].attributes[0].value = plus);
        const num = button.classList[1].split('__')[1];
        document.querySelectorAll('.text-activity').forEach(function(textActivity){
            textActivity.classList.add('hidden');
            button.children[0].children[1].attributes[0].value = minus;
        });
        document.querySelector(`.text-activity__${num}`).classList.remove('hidden');
    });
});

// progress bar
const progressBar = document.querySelector('.progress-bar');
if(progressBar){
    const body = document.querySelector('body');
        body.style.overflow = 'hidden';
        let loading;
        let val = 0;
        const loadingFunction = function () {
            val += 1;
            progressBar.style.width = `${val}%`;
            if (val >= 100) {
                clearInterval(loading);
                setTimeout(function () {
                    body.style.overflow = 'visible';
                    document.querySelector('.preloading').classList.add('hidden');
                }, 1000);
            }
        };

        window.addEventListener('load',function(){
            loading = setInterval(loadingFunction, 10);
    });
}

