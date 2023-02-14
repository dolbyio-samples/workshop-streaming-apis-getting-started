// Dolby.io Streaming Workshop: Part 2
// App.js manages the publisher functionality.
// Web Docs: https://docs.dolby.io/streaming-apis/docs/web#publish-a-stream

let startBtn = document.getElementById("startBtn");
let endBtn = document.getElementById("endBtn");
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
//Part 2: Broadcast Stream.
async function connectStream() {
	startBtn.disabled = true;
	endBtn.disabled = false;

	// Start broadcast
	try {
		//To view the stream navigate to: https://viewer.millicast.com?streamId=YOUR_ACCOUNT_ID/YOUR_STREAM_NAME
	} catch (e) {
		console.error("Connection failed, handle error", e);
	}
}
/////////////////////////////////////////////////////////////////////////////////

function stopStream() {
	//Ends Stream and resets browser.
	
	location.reload();
}
