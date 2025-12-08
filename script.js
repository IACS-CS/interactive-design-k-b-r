document.addEventListener("DOMContentLoaded", function () {
  let sunButton = document.getElementById("Sun-btn");
  let sunTarget = document.querySelector(".Sun");
  if (sunButton && sunTarget) {
    sunButton.addEventListener("click", function () {
      sunTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  } else {
    console.error(
      "ERROR: Could not find the #Sun-btn or the .Sun element. Check your HTML IDs and Class names!"
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let mercuryButton = document.getElementById("Mercury-btn");
  let mercuryTarget = document.querySelector(".Mercury");
  if (mercuryButton && mercuryTarget) {
    mercuryButton.addEventListener("click", function () {
      mercuryTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  } else {
    console.error(
      "ERROR: Could not find the #Mercury-btn or the .Mercury element. Check your HTML IDs and Class names!"
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let venusButton = document.getElementById("Venus-btn");
  let venusTarget = document.querySelector(".Venus");
  if (venusButton && venusTarget) {
    venusButton.addEventListener("click", function () {
      venusTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  } else {
    console.error(
      "ERROR: Could not find the #Venus-btn or the .Venus element. Check your HTML IDs and Class names!"
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let earthButton = document.getElementById("Earth-btn");
  let earthTarget = document.querySelector(".Earth");
  if (earthButton && earthTarget) {
    earthButton.addEventListener("click", function () {
      earthTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    });
  } else {
    console.error(
      "ERROR: Could not find the #Earth-btn or the .Earth element. Check your HTML IDs and Class names!"
    );
  }
});






