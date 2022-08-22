// الزر الي يطلعك فوووووق
  let scrollBtn = document.querySelector('.scrolltop');
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

  // العداد حق الارقام 

  let nums = document.querySelectorAll('.project-work .count');
  let section = document.querySelector('.project-work');
  let started = false;

  window.addEventListener('scroll', function(){
    if (window.scrollY >= section.offsetTop - 500){
      if (!started){
        nums.forEach((num) => startCount(num));
      }
      started = true;
    }
  });

  function startCount(el){
    let goal = el.dataset.goal;
    let count = setInterval(function(){
      el.textContent++;
      if (el.textContent == goal){
        clearInterval(count);
      }
    },0.009);
  }


