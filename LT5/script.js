let btn1 = document.querySelector('#btn-1');
let btn2 = document.querySelector('#btn-2');
let btn3 = document.querySelector('#btn-3');
let btn4 = document.querySelector('#btn-4');

btn1.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('ba1.png')";
});

btn2.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('ba2.jpg')";
});

btn3.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('ba3.jpg')";
});

btn4.addEventListener('click', () =>{
    document.body.style.backgroundImage = "url('ba4.jpg')";
});