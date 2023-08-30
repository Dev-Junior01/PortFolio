const links = document.querySelectorAll('.menu a');
links.forEach((link)=>{
link.addEventListener('click',(e)=>{
    e.preventDefault();
    document.querySelector('.'+link.dataset.section).scrollIntoView({
        behavior : "smooth",
    })
})
});

const   menu     = document.querySelector('nav ul'),
        btnmenu  = document.querySelector('nav .toggle-menu'),
        closebtn = document.querySelector('.close');
menu.onclick = function(e){
    e.stopPropagation();
} 
btnmenu.addEventListener('click',function(e){
    e.stopPropagation();
    btnmenu.style.top   = '-215px';
    closebtn.style.height = '30px';
    menu.style.top        = '60px';
})
closebtn.addEventListener('click',(e)=>{
    btnmenu.style.top = '0';
    menu.style.top = '-213px';
    closebtn.style.height = '0';
})

//Progress 
const skills = document.querySelector('.skills');
let about = document.querySelector('.about .flex');
window.addEventListener('scroll',()=>{
    abouttop = about.offsetTop;
    aboutHeight = about.offsetHeight;
    if(window.scrollY > abouttop - aboutHeight ) {
        skills.querySelectorAll('span').forEach(skill=>{
            skill.style.width = skill.dataset.progress;
        })
    }else{
        skills.querySelectorAll('span').forEach(skill=>{
            skill.style.width = '0px';
        })
    }
})