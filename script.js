const left = document.querySelector('.left');
const right = document.querySelector('.right');
const slider = document.querySelector('.slider');
const pics = document.querySelectorAll('.pic');

let slideNo = 1;
const length = pics.length;

// start button

const bottom = document.querySelector('.bottom');

for (let i = 0; i<length ; i++){
    const div = document.createElement('div')
    div.className = 'button' ;
    bottom.appendChild(div);
};

const button = document.querySelectorAll('.button');
button[0].style.backgroundColor = 'white';

const resetbg = () => {
    button.forEach((button) => {
        button.style.backgroundColor = 'transparent';
    });
};

button.forEach((button,i) => {
    button.addEventListener('click',()=>{
        resetbg();
        slider.style.transform = `translateX(-${i*800}px)`;
        slideNo = 1+i;
        button.style.backgroundColor = 'white';
    });
});

const changecolor = () =>{
    resetbg();
    button[slideNo-1].style.backgroundColor = 'white';
};


// End button

const nextslide = () => {
    slider.style.transform = `translateX(-${slideNo*800}px)`;
    slideNo++;
};

const preslide = () => {
    slider.style.transform = `translateX(-${(slideNo-2)*800}px)`;
    slideNo--;
};


const firstslide = () => {
    slider.style.transform = `translateX(0px)`;
        slideNo = 1;
};

const lastslide = () => {
    slider.style.transform = `translateX(-${(length-1)*800}px)`;
        slideNo = length;
};

right.addEventListener('click',()=>{
    slideNo < length ? nextslide() : firstslide();
    changecolor();
});

left.addEventListener('click',()=>{
    slideNo < length ? preslide() : lastslide();
    changecolor();
});

