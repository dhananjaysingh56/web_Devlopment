burger=document.querySelector('.burger')

rightnav=document.querySelector('.rightnav')
navbar=document.querySelector('.navbar')
navlist=document.querySelector('.navlist')
burger.addEventListener('click',()=>{
    navbar.classList.toggle('hnav')
    
    navlist.classList.toggle('vnav')
    rightnav.classList.toggle('vnav')
    

})