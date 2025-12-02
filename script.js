// AI-generated code starts here
// This script creates animated rockets and can be used to extend
// the solar system animation. It is intentionally verbose and
// commented to help students understand what each part does.

/* Student prompt: Add rockets that fly in and out, and keep the
	 solar system rotating. */

// Grab the container that will hold rocket elements
var rocketsContainer = document.querySelector(".rockets");

// Create a rocket element and add it to the DOM. Each rocket receives
// randomized size, top position, direction, and animation duration.
function createRocket() {
  // Make a new div for the rocket
  var r = document.createElement("div");
  r.className = "rocket";

  // Random vertical position (between 8% and 92% of the viewport height)
  var topPct = 8 + Math.random() * 84;
  r.style.top = topPct + "vh";

  // Randomize rocket size slightly
  var scale = 0.8 + Math.random() * 0.8; // between 0.8 and 1.6
  r.style.transform = "translateX(-120%) scale(" + scale + ")";

  // Choose a direction: roughly left-to-right or right-to-left
  var goRight = Math.random() > 0.45;

  // Randomize flight time and delay so rockets appear at different intervals
  var duration = 6 + Math.random() * 8; // between 6s and 14s
  var delay = Math.random() * 3; // up to 3s delay

  // Assign animation depending on direction
  if (goRight) {
    r.style.animation =
      "fly-right " + duration + "s linear " + delay + "s forwards";
  } else {
    // flip horizontally for rockets flying left
    r.style.animation =
      "fly-left " + duration + "s linear " + delay + "s forwards";
  }

  // Add the rocket into the rockets container
  rocketsContainer.appendChild(r);

  // Remove the element when the animation ends to keep the DOM small
  r.addEventListener("animationend", function () {
    if (r && r.parentNode) {
      r.parentNode.removeChild(r);
    }
  });
}

// Spawn rockets repeatedly. This function starts an interval that
// creates rockets at a random-ish cadence to make the background lively.
var rocketInterval = setInterval(function () {
  // Spawn 1-2 rockets each tick
  var count = Math.random() > 0.6 ? 2 : 1;
  for (var i = 0; i < count; i++) {
    createRocket();
  }
}, 1200);

// Small cleanup: if the page becomes hidden we can stop creating rockets
// (this is optional; helpful for battery life on mobile)
document.addEventListener("visibilitychange", function () {
  if (document.hidden) {
    clearInterval(rocketInterval);
  } else {
    // restart if needed
    rocketInterval = setInterval(function () {
      var count = Math.random() > 0.6 ? 2 : 1;
      for (var i = 0; i < count; i++) {
        createRocket();
      }
    }, 1200);
  }
});

document.querySelector(".explore-btn").addEventListener(
  "click", // when they click explore
  function () {
    // run this code on click...
    document
      .querySelector(".sun")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  }
);

document
  .querySelector("#explore-button-Mercury")
  .addEventListener("click", function () {
    document
      .querySelector(".planet--1")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  });

document
  .querySelector("#explore-button-Venus")
  .addEventListener("click", function () {
    document
      .querySelector(".planet--2")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  });

document
  .querySelector("#explore-button-Earth")
  .addEventListener("click", function () {
    document
      .querySelector(".planet--3")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  });

document
  .querySelector("#explore-button-Mars")
  .addEventListener("click", function () {
    document
      .querySelector(".planet--4")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  });

  document
  .querySelector("#explore-button-Jupiter")
  .addEventListener("click", function () {
    document
      .querySelector(".planet--5")
      .scrollIntoView({
        behavior: "smooth",
        block: "center",
        inline: "center",
      });
  });
