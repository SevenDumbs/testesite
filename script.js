const checkbox = document.getElementById("checkbox")
const nav = document.getElementById("nav")
let n = 0

const span1 = document.getElementById("span1")
const span2 = document.getElementById("span2")
const span3 = document.getElementById("span3")

function menu(){
  if(n==0){
    span1.style.transform="rotate(135deg)"
    span1.style.top="8px"
    span3.style.top="8px"
    span3.style.transform="rotate(-135deg)"
    nav.style.left="0px"
    span2.style.transform="rotate(135deg)"
    n++
  }else{
    span2.style.transform="rotate(0deg)"
    span1.style.transform="rotate(0deg)"
    span1.style.top="0px"
    span3.style.top="16px"
    span3.style.transform="rotate(0deg)"
    nav.style.left="-200px"
    n--
  }
}