const panel = document.querySelectorAll('.panel');
const next = document.getElementById('next');
const prev = document.getElementById('prev');
const progress = document.getElementById('progress');
const circle = document.querySelectorAll('.circle');
let currentActive = 1;
next.addEventListener('click',()=>{
    currentActive++;
    if (currentActive>6){
        currentActive = circle.length;
    }
    update();
})
prev.addEventListener('click',()=>{
    currentActive--;
    if (currentActive<1){
        currentActive = 1;
    }
    update();
})
function update(){
    circle.forEach((circle,idx)=>{
        if(idx<currentActive){
            circle.classList.add('active');
        }
        else{
            circle.classList.remove('active');
        }
    }
    )
    removeactive();
    addactive();
    const actives=document.querySelectorAll('.active')
    progress.style.width = ((actives.length-1.5)/(circle.length))*100 + '%'
    if (currentActive===1){
        prev.disabled = true;
    }
    else if (currentActive === circle.length){
        next.disabled = true;;
    }
    else{
        prev.disabled = false;
        next.disabled = false;
    }
}
function removeactive() {
    panel.forEach(panel=>{
        panel.classList.remove('active');
    }
    )
}
function addactive() {
    panel[currentActive-1 ].classList.add('active');
}