function classToggle() {
    const navs = document.querySelectorAll('.nav-menu')
    
    navs.forEach(nav => nav.classList.toggle('Navbar__ToggleShow'));
  }
  
  document.querySelector('.nav-menu__toggler')
    .addEventListener('click', classToggle);