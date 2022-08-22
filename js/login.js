// الزر الي يطلعك فوووووق
  var scrollBtn = document.querySelector('.scrolltop');
  window.addEventListener('scroll', function(){
    if (window.scrollY >= 500){
      scrollBtn.style.right = '10px';
    }else {
      scrollBtn.style.right = '-65px';
    }
  });
  function topFunction() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }

  const sign_up_btn = document.querySelector('#sign-up-button');
  const sign_in_btn = document.querySelector('#sign-in-button');
  const container = document.querySelector('container');

  sign_up_btn.addEventListener('click',()=>{
    container.classList.add('sign-up-mode');
  });

  sign_in_btn.addEventListener('click',()=>{
    container.classList.remove('sign-up-mode');
  });