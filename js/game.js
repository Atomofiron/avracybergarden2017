

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

function spawnEnemy(position, speed, radius) {
    var scene = document.querySelector('a-scene');
    var enemy = document.createElement('a-cylinder');
    enemy.setAttribute('color', '#FF9500');
    enemy.setAttribute('height', '1');
    enemy.setAttribute('radius', radius);
    enemy.setAttribute('position', position);
    var animation = document.createElement('a-animation')
    animation.setAttribute('attribute', 'position')
    animation.setAttribute('repeat', '0')
    animation.setAttribute('dur', speed)
    animation.setAttribute('to', '0 0 0')
    enemy.appendChild(animation);
    scene.appendChild(enemy);
}

function shoot(position, direction) {
    var scene = document.querySelector('a-scene'); 
    var cylinder = document.createElement('a-cylinder');
    cylinder.setAttribute('color', '#FF0000');
    cylinder.setAttribute('height', '200');
    cylinder.setAttribute('radius', radius);
    cylinder.setAttribute('position', position);
    scene.appendChild(cylinder);
}

function update() {
}

function updateTwoSeconds() {
    var distMult = 300
    var half = distMult / 2
    spawnEnemy({x: Math.random() * distMult - half, 
                y: Math.random() * distMult - half, 
                z: Math.random() * distMult - half}, 11000, 1)
}

window.onload = function start() {
    init();
    startUpdateLoop();
}

function startUpdateLoop() {
    window.setInterval(update, 16);
    window.setInterval(updateTwoSeconds, 2000);
}

