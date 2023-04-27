let slider=document.querySelector(".slider")
let rightArrow=document.querySelector("#right")
let leftArrow=document.querySelector("#left")
let box = document.querySelector(".box").offsetWidth

let drag=false

const drgStart=()=>{
    drag=true
    slider.classList.add("dragging")
}
const dragging=(e)=>{
    if(!drag) return ;
    slider.scrollLeft=e.pageX
    console.log(e.pageX);
}
const drgEnd=()=>{
    drag=false
    slider.classList.remove("dragging")
}
function move(e){
    if(e==='right'){
        slider.scrollLeft+=box + 31
    }else{
        slider.scrollLeft-=box + 31

    }
}

slider.addEventListener("mousemove",dragging)
slider.addEventListener("mousedown",drgStart)
slider.addEventListener("mouseup",drgEnd)