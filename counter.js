
let header = document.getElementById("header");
let per = document.getElementById("per");
let but1 = document.getElementById("button1");
let but2 = document.getElementById("button2");
let but3 = document.getElementById("button3");

let count = 0;


but1.onclick=()=>{
    count++;
    per.textContent=count;
}

but2.onclick=()=>{
    count=0;
    per.textContent=count;
}
but3.onclick=()=>{
    count--;
    per.textContent=count;
}