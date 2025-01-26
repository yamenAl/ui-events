
let interaction = document.querySelector('a:nth-of-type(12)');
interaction.addEventListener('click', jumpHandler);

function jumpHandler() {
  interaction.classList.toggle('jump');
}

interaction.addEventListener('animationend', jumpHandler);

document.getElementById("runLink").addEventListener("mouseover", function(event) {
  const link = event.target;
  const container = document.querySelector('.a-container');
  const maxWidth = container.clientWidth - link.offsetWidth;
  const maxHeight = container.clientHeight - link.offsetHeight;
  const offsetX = Math.random() * maxWidth;
  const offsetY = Math.random() * maxHeight;
  link.style.left = `${offsetX}px`;
  link.style.top = `${offsetY}px`;
});

// Blinking Link
const blinkLink = document.getElementById("blinkLink");
blinkLink.addEventListener("mouseover", function() {
  blinkLink.style.animation = "blink 1s infinite";
});
blinkLink.addEventListener("mouseout", function() {
  blinkLink.style.animation = "none";
});

// Expanding Link
const expandLink = document.getElementById("expandLink");
expandLink.addEventListener("mouseover", function() {
  expandLink.style.transform = "scale(1.5)";
});
expandLink.addEventListener("mouseout", function() {
  expandLink.style.transform = "scale(1)";
});

// Shrinking Link
const shrinkLink = document.getElementById("shrinkLink");
shrinkLink.addEventListener("mouseover", function() {
  shrinkLink.style.transform = "scale(0.8)";
});
shrinkLink.addEventListener("mouseout", function() {
  shrinkLink.style.transform = "scale(1)";
});

// Color Shifting Link
const colorShiftLink = document.getElementById("colorShiftLink");
colorShiftLink.addEventListener("mouseover", function() {
  colorShiftLink.style.animation = "colorShift 2s infinite";
});
colorShiftLink.addEventListener("mouseout", function() {
  colorShiftLink.style.animation = "none";
});

// Rotating Link
const rotateLink = document.getElementById("rotateLink");
rotateLink.addEventListener("click", function() {
  rotateLink.style.transform = "rotate(360deg)";
  rotateLink.style.transition = "transform 1s";
});

// Pulsating Link
const pulsateLink = document.getElementById("pulsateLink");
pulsateLink.addEventListener("mouseover", function() {
  pulsateLink.style.animation = "pulsate 1s infinite";
});
pulsateLink.addEventListener("mouseout", function() {
  pulsateLink.style.animation = "none";
});

// Sliding Link
const slideLink = document.getElementById("slideLink");
let slideDirection = 1; // 1 for right, -1 for left
slideLink.addEventListener("click", function() {
  const moveDistance = slideDirection * 20; // Move 20px each time
  slideLink.style.transform = `translateX(${moveDistance}px)`;
  slideDirection *= -1; // Toggle direction
  slideLink.style.transition = "transform 0.5s";
});

// Opacity Changing Link
const opacityLink = document.getElementById("opacityLink");
opacityLink.addEventListener("mouseover", function() {
  opacityLink.style.opacity = "0.5";
});
opacityLink.addEventListener("mouseout", function() {
  opacityLink.style.opacity = "1";
});

// Wobbling Link
const wobbleLink = document.getElementById("wobbleLink");
wobbleLink.addEventListener("mouseover", function() {
  wobbleLink.style.animation = "wobble 1s infinite";
});
wobbleLink.addEventListener("mouseout", function() {
  wobbleLink.style.animation = "none";
});

// Border Flashing Link
const borderFlashLink = document.getElementById("borderFlashLink");
borderFlashLink.addEventListener("click", function() {
  borderFlashLink.style.borderColor = "#f44336";
  setTimeout(() => {
    borderFlashLink.style.borderColor = "#7ce7c9";
  }, 500);
});

// Ripple Effect Link
const rippleLink = document.getElementById("rippleLink");
rippleLink.addEventListener("click", function() {
  rippleLink.style.animation = "ripple 1s";
  setTimeout(() => {
    rippleLink.style.animation = "none";
  }, 1000);
});

// Heartbeat Link
const heartbeatLink = document.getElementById("heartbeatLink");
heartbeatLink.addEventListener("mouseover", function() {
  heartbeatLink.style.animation = "heartbeat 1s infinite";
});
heartbeatLink.addEventListener("mouseout", function() {
  heartbeatLink.style.animation = "none";
});

// Gradient Background Link
const gradientLink = document.getElementById("gradientLink");
gradientLink.addEventListener("mouseover", function() {
  gradientLink.style.background = "linear-gradient(45deg, #7ce7c9, #9d7beb)";
});
gradientLink.addEventListener("mouseout", function() {
  gradientLink.style.background = "";
});

// Text Shadow Link
const shadowLink = document.getElementById("shadowLink");
shadowLink.addEventListener("mouseover", function() {
  shadowLink.style.textShadow = "2px 2px 8px rgba(0,0,0,0.5)";
});
shadowLink.addEventListener("mouseout", function() {
  shadowLink.style.textShadow = "none";
});

// Sliding Underline Link
const underlineLink = document.getElementById("underlineLink");
underlineLink.addEventListener("mouseover", function() {
  underlineLink.style.setProperty("--underline-width", "100%");
  underlineLink.style.setProperty("--underline-transition", "width 0.3s ease-in-out");
});
underlineLink.addEventListener("mouseout", function() {
  underlineLink.style.setProperty("--underline-width", "0");
  underlineLink.style.setProperty("--underline-transition", "width 0.3s ease-in-out");
});
