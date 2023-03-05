const button = document.querySelector('.btn')
const form = document.querySelector('#form')
let i=0;
button.addEventListener('click',()=>{
    if(form.hasAttribute('hidden')){
        form.setAttribute('hidden', false)
        console.log(form)
    i++
    }
    else{
        form.setAttribute('hidden', true)
        console.log(form , i)
        
        i--
    }
}
)