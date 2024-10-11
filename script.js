let div = document.querySelector('div')

function random(num){
    return Math.floor(Math.random() * num) + 'px'
}

window.addEventListener('load', () => {
    div.style.top = random(window.innerHeight - div.offsetHeight)
    div.style.left = random(window.innerWidth - div.offsetWidth)
})

let divLocation = {
    top: null,
    left: null
}


function mouseMove(e){
    div.style.top = e.clientY - divLocation.top + 'px'
    div.style.left = e.clientX - divLocation.left + 'px'
}

div.addEventListener('mousedown', (e) => {
    divLocation = {
        top: e.offsetY,
        left: e.offsetX
    }
    window.addEventListener('mousemove', mouseMove)
})

window.addEventListener('mouseup', () => {
    window.removeEventListener('mousemove', mouseMove)
})



// class Person{
//     constructor(name){
//         this.name = name
//     }

//     hello(){
//         console.log(`my name is bo7ancha`)
//     }
// }

// const per = new Person('Adam')

// per.hello()