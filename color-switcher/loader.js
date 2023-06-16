const button = document.querySelectorAll('.button');
const body = document.querySelector('body')
console.log(button);
button.forEach((btn) =>{
btn.addEventListener('click',(e)=>{
console.log(e.target);
switch (e.target.id) {
    case "red":
        body.style.backgroundColor=e.target.id
        break;
    case "pink":
        body.style.backgroundColor=e.target.id
        break;
    case "green":
        body.style.backgroundColor=e.target.id
        break;
    case "orange":
        body.style.backgroundColor=e.target.id
        break;
    default:
        break;
}
})
})
const resetBtn = document.querySelector('#reset-button')
resetBtn.addEventListener('click',(e)=>{
    if(e.target.id == "reset-button"){
        body.style.backgroundColor="white"
    }
})