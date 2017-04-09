function get(id) {
    return document.getElementById(id)
}

var clog = console.log
var controllerOptions = {enableGestures: true};

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


Leap.loop(controllerOptions, function(frame) {
	if (frame.hands.length > 0)
		parseHand(frame.hands[0])
})
