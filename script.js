const output = document.querySelector('.output')
const IncBtn = document.querySelector('.Inc_btn')
const DecBtn = document.querySelector('.Dec_btn')
const ResetBtn = document.querySelector('.Reset_btn')
let count =0

function style(){
    if(count>0){
        output.style.color='green'
        output.style.textShadow='2px 2px 5px green'
    }
    else if(count<0){
        output.style.color='red'
        output.style.textShadow='2px 2px 5px red'
    }
    else if(count==0){
        output.style.color='black'
         output.style.textShadow='unset'
    }
}
function plus(){
    count++
    output.innerHTML=count
    style()
}
function minus(){
    count--
    output.innerHTML=count
    style()
}
function reset(){
    count=0
    output.innerHTML=count
    style()
}
IncBtn.addEventListener('click',plus)
DecBtn.addEventListener('click',minus)
ResetBtn.addEventListener('click',reset)