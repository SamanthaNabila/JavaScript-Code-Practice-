//Problem 3: Video Streaming

function load(callback) {
  setTimeout(() => {
    console.log("Video Loading");
    callback();
  }, 0);
}
function buffer(callback) {
  setTimeout(() => {
    console.log("Video Buffering");
    callback();
  }, 2000);
}
function play(callback) {
  setTimeout(() => {
    console.log("play Video");
  }, 4000);
}
load(() => {
  buffer(() => {
    play();
  });
});
