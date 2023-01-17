const menu=document.getElementById('menu')

const menuBtn=document.getElementById('menuBtn')
const header=document.getElementById('header')

let result=false
menuBtn.onclick=()=>{
    if(!result){
        menu.classList.remove("hidden");
        result=true;
    }else{
        menu.classList.add("hidden");
        result=false
    }
    
}
let beforeScroll=0

window.onscroll=()=>{
    let newScroll=window.scrollY
    if(newScroll<beforeScroll){
        header.classList.add('sticky','top-0')
        beforeScroll = newScroll;
    }else{
        header.classList.remove("sticky", "top-0");
        beforeScroll = newScroll;
    }
}
