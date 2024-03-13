let text = document.getElementById('text');
let leaf = document.getElementById('leaf');
let hill1 = document.getElementById('hill1');
let hill4 = document.getElementById('hill4');
let hill5 = document.getElementById('hill5');
let sec = document.querySelector('.sec');
let contentHeight = sec.offsetHeight - window.innerHeight;

window.addEventListener('scroll', () => {
    let value = Math.min(window.scrollY, contentHeight);

    text.style.marginTop = value * 2.5 + 'px';
    leaf.style.top = value * -1.5 + 'px';
    leaf.style.left = value * 1.5 + 'px';
    hill5.style.left = value * 1.5 + 'px';
    hill4.style.left = value * -1.5 + 'px';
    hill1.style.top = value * 1 + 'px';
});

window.addEventListener('scroll', () => {
    const header = document.getElementById('header');
    const sec = document.getElementById('sec');

    const scrollPosition = window.scrollY;
    const secPosition = sec.getBoundingClientRect().top;

    if (secPosition <= 0) {
        header.style.backgroundColor = '#a8dfd5'; 
    } else {
        header.style.backgroundColor = 'transparent'; 
    }
});

$(".pop").hide();
$(".logo").click(function(){
    $(".pop").toggle();
});