let btn = document.querySelector ('#btnmunys')
let btn1 = document.querySelector ('#btnplus')
let int = document.querySelector('.numb')

let integer = 0;


btn1.addEventListener("click",function(){
    integer += 1;
    int.textContent = integer;

})
btn.addEventListener("click",function(){
    integer -= 1;
    int.textContent = integer;

})