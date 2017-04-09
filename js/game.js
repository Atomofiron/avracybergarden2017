function get(id) {
    return document.getElementById(id)
}

var clog = console.log

function init() {

}


function update() {
}

window.onload = function start() {
    init();
    startUpdateLoop();
}

function startUpdateLoop() {
    window.setInterval(update, 16);
}