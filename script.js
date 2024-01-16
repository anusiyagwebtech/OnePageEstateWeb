// scroll navbar sticky

window.addEventListener('scroll', ()=>{
    reveal();
    const header = document.querySelector('.header');
    const loaderbowl = document.querySelector('.loader-bowl');
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    header.classList.add('header-bg');     
    loaderbowl.style.display = 'block';    
    }
    else{
        header.classList.remove('header-bg');
        loaderbowl.style.display = 'none';    

    }
});

//custom select in Hero-section

function select(e) {
    const input = e.querySelector('input');
    input.setAttribute('readonly', true);
    const selectItems = e.querySelector('.select-options');
    selectItems.classList.toggle('blocky');
    const values = selectItems.querySelectorAll('p');
    values.forEach(item => {
        item.addEventListener('click', (e) =>{
        input.value = item.innerHTML;
        })
    });
}

// Card Heart Click

function heart(e) {
    e.classList.toggle('fa-solid');
    const cardImg = e.parentElement;
    const card = cardImg.parentElement;
    console.log(card);
    likedheart(card);
}
// Like heart section
function likedheart(parent) {
const LikeCardsSection = document.querySelector('.card-group.like-cards');
     console.log(parent);
     LikeCardsSection.innerHTML += parent;
}

// Reveal Element On Scroll


function reveal() {
    let reveals = document.querySelectorAll(".reveal");
    console.log('hi');
    for (let i = 0; i < reveals.length; i++) {
        let windowHeight = window.innerHeight;
        let revealtop  = reveals[i].getBoundingClientRect().top;  
        let revealpoint = 50;
        if(revealtop < windowHeight - revealpoint){
            reveals[i].classList.add('active');
        } 
        else{
            reveals[i].classList.remove('active');

        } 
    }
}

// responsive Menu
const barmenu = document.querySelector('.header-data');
function menu() {
    barmenu.classList.toggle('block');
}

function dissapear(){
    barmenu.classList.remove('block');
    
}


//Scroll Indicate
window.addEventListener('scroll',()=>{
    let scrollTop = document.body.scrollTop || document.documentElement.scrollTop;   
let height =  document.documentElement.scrollHeight - document.documentElement.clientHeight;
document.getElementById('loader-bar').style.width = `${((scrollTop/height)*100)}%`;
})


//Scroll menu Indicate
const sections = document.querySelectorAll('section');
const navlinks = document.querySelectorAll('.header ul li a');
window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop;
        let offsetHeight = sec.offsetHeight;
        let id = sec.getAttribute('id');
        if(top >= offset && top < offset + offsetHeight){
            navlinks.forEach(link => {
                link.classList.remove('Indicate');
                document.querySelector(`.header ul li a[href = '#${id}']`).classList.add('Indicate');
            })
        }
    });
}