const allbuttons=document.querySelectorAll('.button')
const body=document.querySelector("body")
allbuttons.forEach((button)=>{
    button.addEventListener('click',(e)=>{
        console.log(e)
        console.log(e.target) 
        if(e.target.id==="grey"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="white"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="blue"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="yellow"){
            body.style.backgroundColor=e.target.id
        }
        if(e.target.id==="purple"){
            body.style.backgroundColor=e.target.id
        }
    })
})
// addEventListener('click',(e)=>{
//    e denotes the event like pointerclick or mouseclick
//    e.target denotes from where does the event comes
//    })