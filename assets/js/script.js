function classToggle() {
    const navs = document.querySelectorAll('.nav-menu')
    
    navs.forEach(nav => nav.classList.toggle('.nav-menu__toggleshow'));
  }
  
  document.querySelector('.nav-menu__toggler')
    .addEventListener('click', classToggle);