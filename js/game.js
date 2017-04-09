

function init() {

}


function update() {

    // var mything = get("mything")
    // var position = mything.getAttribute('position');

    // mything.setAttribute('position', {
    //     x: position.x + this.deltaPosition.x,
    //     y: position.y + this.deltaPosition.y,
    //     z: position.z + this.deltaPosition.z
    // });
}

window.onload = function start() {
    init();
    startUpdateLoop();
}

function startUpdateLoop() {
    window.setInterval(update, 16);
}

