//Problem 4: Callback after Delay
function text(name, callback) {
  console.log(name);
  setTimeout(() => {
    callback();
  }, 2000);
}
text("nabila", () => {
  console.log("you know its a callback function");
});
//Problem 5: Nested Callback
function download(callback) {
  setTimeout(() => {
    console.log("downloade Complete");
    callback();
  }, 0);
}
function process(callback) {
  setTimeout(() => {
    console.log("process Loadding");
    callback();
  }, 2000);
}
function upload(callback) {
  setTimeout(() => {
    console.log("File Uploaded");
  }, 4000);
}
download(() => {
  process(() => {
    upload();
  });
});
