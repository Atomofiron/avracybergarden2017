function get(id) {
    return document.getElementById(id)
}

var clog = console.log

function init() {
  var boxEl = get('bone0_2')
  boxEl.addEventListener('mousedown', function () {
    clog("asd")
    tempShootCaller()
  });
}

function tempShootCaller() {
    shoot({
        x: 0,
        y: 0,
        z: 0
    },
    {
        x: 0,
        y: 90,
        z: 0
    })
}

function spawnEnemy(position, speed, scale) {

}

function shoot(position, direction) {
    clog("aasas")
}

function update() {

    var a = get("bone0_1")

    a.setAttribute('position', {
        x: 3,
        y: 3,
        z: 3
    })
    // a = 
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
