let acc = document.getElementsByClassName('show');
for (let i = 0; i < acc.length; i++){
    acc[i].addEventListener("click",function(){
        let plusIcon = acc[i].getElementsByClassName('plus')[0];
        let minusIcon = acc[i].getElementsByClassName('minus')[0];

    
        let hidden = this.nextElementSibling;
        if(hidden.style.display === "block"){
            hidden.style.display = "none";
            plusIcon.style.display = 'block';
            minusIcon.style.display = 'none';
        }else{
            hidden.style.display = "block";
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'block';
        }
    });
}

let navSlider = ()=> {
    let burger = document.querySelector('header .top-bar .menu-icon');
    let nav = document.querySelector('header .top-bar .navbar ul');
    let navLinks = document.querySelectorAll('.nav-links li');

    burger.addEventListener('click' ,()=>{
        nav.classList.toggle('nav-active');
    });

    navLinks.forEach((link, index)=>{
        
    });

}

navSlider();






















