const navToggler = document.querySelector('.navbar-toggler');

 
navToggler.addEventListener('click', navToggle);

function navToggle() {
    navToggler.classList.toggle('active');
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open'); 
    if(nav.classList.contains('open')){
        nav.style.height = nav.scrollHeight + "px"
    }else{
        nav.style.height = ""
    }

}
const indicator = document.querySelector('.indicator').children;
console.log(indicator)

for(let i = 0; i<indicator.length;i++){
    indicator[i].onclick = function(){
        for(let x=0; x<indicator.length; x++){
            indicator[x].classList.remove('active');
        }
        this.classList.add('active')
    }
}