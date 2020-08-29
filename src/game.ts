var ctx = document.getElementById('canv').getContext('2d');
var FPS = 60;
var width = ctx.canvas.width;
var height = ctx.canvas.height;
var runing = false;
var interval;

ctx.font = "30px Comic Sans MS";
ctx.textAlign = "center";
ctx.fillStyle = "red";
ctx.fillText("Press any key to play", (width/2), (height/2));

function render () {
    ctx.clearRect(0, 0, width, height);
    ctx.fillStyle = 'black';
}

function update() {
    render();
}

function inputKeyDown(event) {
    if (!runing) {
        runing = true;
        interval = setInterval(update, 1000 / FPS)
    }
    if (event.keyCode === 32) {
    }
}

window.addEventListener('keydown', inputKeyDown, false);
