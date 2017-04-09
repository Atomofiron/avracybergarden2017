
var controllerOptions = {enableGestures: true};


var controller = Leap.loop(controllerOptions, function(frame) {
	clog("loop")
	if (handObj.length == 0)
		return

	parseFrame(frame)
})