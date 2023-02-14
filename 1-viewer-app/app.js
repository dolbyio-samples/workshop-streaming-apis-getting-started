// Dolby.io Streaming Workshop: Part 1
// App.js manages the viewer functionality.
// Web Docs: https://docs.dolby.io/streaming-apis/docs/web#viewer

let joinBtn = document.getElementById("joinBtn");
let leaveBtn = document.getElementById("leaveBtn");
let videoPlayer = document.getElementById("videoPlayer");

function addStreamToYourVideoTag(mediaTrack) {
	// Takes in a stream and assigns it to the <video> element
	videoPlayer.srcObject = mediaTrack;
	videoPlayer.hidden = false;
	videoPlayer.autoplay = true;
}

/////////////////////////////////////////////////////////////////////////////////
//Part 1: Authenticate Connection to Dolby.io Streaming servers (Millicast)

/////////////////////////////////////////////////////////////////////////////////

/////////////////////////////////////////////////////////////////////////////////
//Part 2: Connect to a stream.
async function connectStream() {
	leaveBtn.disabled = false;
	joinBtn.disabled = true;
	
	//Specify the join options.
	const options = {
		disableVideo: false,
		disableAudio: true,
		bandwidth: 0, //Sets it to the max (un-throttled)
	};

	//Add stream to the video tag.


	// Connecting to the stream.
	try {

		// Broadcasts can be started from the Dolby.io Dashboard https://streaming.dolby.io/#/tokens
	} catch (e) {
		console.log("Connection failed, handle error", e);

	}
}
/////////////////////////////////////////////////////////////////////////////////

function stopStream() {
	//Closes Stream and resets browser.
	location.reload();
}
