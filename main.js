window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");

  //Add the sound
  pads.forEach((pad, num) => {
    pad.addEventListener("click", function() {
      sounds[num].play();
    });
  });
});
