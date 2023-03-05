const pannel = document.querySelectorAll('.panel');

pannel.forEach((panel) => {
    panel.addEventListener('click',() => {
        removeactive();
        panel.classList.add('active')
    })

});
function removeactive(){
    pannel.forEach(panel =>{
        panel.classList.remove('active');
    })
}