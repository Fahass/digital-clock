var time = document.getElementById('time')
var date = document.getElementById('date')

setInterval(() => {
    time.innerHTML = new Date().toLocaleTimeString()
    date.innerHTML = new Date().toLocaleDateString()

},1000)