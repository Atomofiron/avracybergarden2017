
var controllerOptions = {enableGestures: true};

Leap.loop(controllerOptions, function(frame) {
	if (frame.hands.length > 0)
		parseHand(frame.hands[0])
})

function parseHand(hand) {
	clog(hand.pinky.bones[0].direction())
}
