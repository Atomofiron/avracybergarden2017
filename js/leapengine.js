function get(id) {
    return document.getElementById(id)
}


var clog = console.log

clog("wtf")


function getc(cls) {
    return document.getElementsByClassName(cls)
}

var controllerOptions = {enableGestures: true, host: "127.0.0.1"/*"192.168.43.253"*/};
var handObj = []

var controller = Leap.loop(controllerOptions, function(frame) {
	if (handObj.length == 0)
		return

	parseFrame(frame)
})
controller.connect();

function parseFrame(frame) {
	clog("wtf")
	var hands = frame.hands
	clog("hl "+hands.length)

	for (var i = 0; i < hands.length; i++) {
		var fingers = hands[i].fingers

		for (var j = 0; j < fingers.length; j++) {
			var bones = fingers[j].bones
			for (var k = 0; k < bones.length; k++) {
				var bone = bones[k]
				var q = 10
				var pos = (bone.prevJoint[0]) + " " + (bone.prevJoint[1]) + " " + (bone.prevJoint[2])
				
				if (i == 0 && j == 0 && k == 0)
					clog(pos)
				handObj[i][j][k].setAttribute("position", pos)
			}
		}
	}
}



function initScene() {
	clog("initScene")
	var scene = get("assets")

	handObj = []
	for (var i = 0; i < 2; i++) {
		handObj[i] = []
		for (var j = 0; j < 5; j++) {
			handObj[i][j] = []
			for (var k = 0; k < 4; k++) {
				var id = 'bone'+i+'_'+j+'_'+k+''
				var obj = '<a-box id="'+id+'" color="#ff0000" width="1" height=1" depth="3" position="0 0 -8" rotation="40 50 10" scale="0.1 0.1 0.1" src="#logo"></a-box>'
				scene.insertAdjacentHTML("afterend", obj)
				handObj[i][j][k] = get(id)
			}
		}
	}

}

initScene()
