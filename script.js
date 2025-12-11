let elementInCenter = null;

document.addEventListener("DOMContentLoaded", function () {
  let sunButton = document.getElementById("Sun-btn");
  let sunTarget = document.querySelector(".Sun");
  if (sunButton && sunTarget) {
    sunButton.addEventListener("click", function () {
      sunTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      elementInCenter = sunTarget;
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
      elementInCenter = mercuryTarget;
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
      elementInCenter = venusTarget;
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
      elementInCenter = earthTarget;
    });
  } else {
    console.error(
      "ERROR: Could not find the #Earth-btn or the .Earth element. Check your HTML IDs and Class names!"
    );
  }
});
document.addEventListener("DOMContentLoaded", function () {
  let marsButton = document.getElementById("Mars-btn");
  let marsTarget = document.querySelector(".Mars");
  if (marsButton && marsTarget) {
    marsButton.addEventListener("click", function () {
      marsTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      elementInCenter = marsTarget;
    });
  } else {
    console.error(
      "ERROR: Could not find the #Mars-btn or the .Mars element. Check your HTML IDs and Class names!"
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let jupiterButton = document.getElementById("Jupiter-btn");
  let jupiterTarget = document.querySelector(".Jupiter");
  if (jupiterButton && jupiterTarget) {
    jupiterButton.addEventListener("click", function () {
      jupiterTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      elementInCenter = jupiterTarget;
    });
  } else {
    console.error(
      "ERROR: Could not find the #Jupiter-btn or the .Jupiter element. Check your HTML IDs and Class names!"
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let saturnButton = document.getElementById("Saturn-btn");
  let saturnTarget = document.querySelector(".Saturn");
  if (saturnButton && saturnTarget) {
    saturnButton.addEventListener("click", function () {
      saturnTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      elementInCenter = saturnTarget;
    });
  } else {
    console.error(
      "ERROR: Could not find the #Saturn-btn or the .Saturn element. Check your HTML IDs and Class names!"
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let uranusButton = document.getElementById("Uranus-btn");
  let uranusTarget = document.querySelector(".Uranus");
  if (uranusButton && uranusTarget) {
    uranusButton.addEventListener("click", function () {
      uranusTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      elementInCenter = uranusTarget;
    });
  } else {
    console.error(
      "ERROR: Could not find the #Uranus-btn or the .Uranus element. Check your HTML IDs and Class names!"
    );
  }
});

document.addEventListener("DOMContentLoaded", function () {
  let neptuneButton = document.getElementById("Neptune-btn");
  let neptuneTarget = document.querySelector(".Neptune");
  if (neptuneButton && neptuneTarget) {
    neptuneButton.addEventListener("click", function () {
      neptuneTarget.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
      elementInCenter = neptuneTarget;
    });
  } else {
    console.error(
      "ERROR: Could not find the #Neptune-btn or the .Neptune element. Check your HTML IDs and Class names!"
    );
  }
});

// Zoom functionality
const universe = document.querySelector(".universe");
let scale = 1;

// when they adjust the zoom slider
const zoomSlider = document.getElementById("zoom-slider");
zoomSlider.addEventListener("input", function () {
  scale = zoomSlider.value;
  universe.style.transform = `scale(${scale})`;
  if (elementInCenter) {
    // delay 300ms
    setTimeout(() => {
      elementInCenter.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 300);
  }
});
