var hamburger_btn = document.querySelector('header .btn'),
    navbar_mobile = document.querySelector(".navbar-mobile");

hamburger_btn.addEventListener('click', function(){
   this.classList.toggle('active');
   navbar_mobile.classList.toggle('active')
});