window.addEventListener("load", () => {
  const sounds = document.querySelectorAll(".sound");
  const pads = document.querySelectorAll(".pads div");
  const visual = document.querySelector(".visual");
  const colors = [
    "#603d94",
    "#c74b4b",
    "#b39a2e",
    "#34b86b",
    "#2b2727",
    "#9c5487"
  ];

  //Add the sound
  pads.forEach((pad, num) => {
    pad.addEventListener("click", function() {
      sounds[num].currentTime = 0;
      sounds[num].play();

      createBalls(num);
    });
  });

  //Create a function that makes colorful balls
  const createBalls = num => {
    const ball = document.createElement("div");
    visual.appendChild(ball);
    ball.style.backgroundColor = colors[num];
    ball.style.animation = "jump 3s ease";
    ball.addEventListener("animationend", function() {
      visual.removeChild(this);
    });
  };
});
