const time = document.getElementById('clockin');

setInterval(() => {
    const newtime = new Date().toLocaleString()
    time.innerHTML = newtime
}, 1000);

console.log(new Date().toLocaleString());


