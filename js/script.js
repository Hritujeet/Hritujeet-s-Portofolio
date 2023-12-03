const menu = document.querySelector('.rightNav');
const burger = document.querySelector('.hamburger');

console.log(menu);
console.log(burger);

burger.addEventListener('click', ()=>{
    if (menu.style.display != 'flex'){
        menu.style.display = 'flex'
    }
    else{
        menu.style.display = 'none'
    }
})
