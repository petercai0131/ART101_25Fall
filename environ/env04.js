// ---------- Basic variables ----------
let worldTitle = "THE LOST DIGITAL REALM";
let atmosphere = "chaotic, neon-glitched, and unstable";

// ---------- Array: environmental elements ----------
let environmentElements = [
  "corrupted data streams",
  "floating code fragments",
  "broken firewalls",
  "neon glitches",
  "echoes of old Digimon cries"
];

// ---------- Object: describing main entity ----------
let mainEntity = {
  name: "CyberAgumon",
  type: "Data",
  powerLevel: 404,
  corrupted: true,
  abilities: ["data regeneration", "code roar", "glitch step"],
  quote: "010101... you shouldn’t be here..."
};

// ---------- Object: describing secondary entity ----------
let companion = {
  name: "Packetmon",
  type: "Virus",
  speed: 9.8,
  friendly: false,
  traits: ["unpredictable", "radioactive glow", "bites cables"],
  line: "hehehe... connection unstable..."
};

// ---------- Printing to HTML ----------
$("#js1").html(`<b>${worldTitle}</b><br><i>${atmosphere}</i>`);

$("#js2").html(
  `<b>Environmental Elements:</b><br>` +
  environmentElements.join(", ") +
  `<br><br><b>Main Entity:</b> ${mainEntity.name} (${mainEntity.type})<br>` +
  `Power: ${mainEntity.powerLevel}<br>` +
  `Abilities: ${mainEntity.abilities.join(", ")}<br>` +
  `<em>“${mainEntity.quote}”</em>`
);

$("#js3").html(
  `<b>Companion:</b> ${companion.name}<br>` +
  `Type: ${companion.type}<br>` +
  `Speed: ${companion.speed}<br>` +
  `Traits: ${companion.traits.join(", ")}<br>` +
  `<em>“${companion.line}”</em>`
);

// Optional: add a dynamic visual feedback
$(".js-div .highlight").css({
  "color": "#00ffcc",
  "text-shadow": "0 0 15px #00ffcc, 0 0 20px #00ffff",
});



// ====== Atomized motion: with parameters & toggle control ======
(function () {
  // Global state for start/stop toggle
  let atomTimer = null;
  let lastMode = null;

  // Tag all text-like elements with .atomized to allow individual movement
  function markTextAtoms(rootSel = "body", includeImages = false) {
    const $root = $(rootSel);

    // Common text containers; can add more like em,strong,code,blockquote if needed
    let textSelectors = "p,h1,h2,h3,h4,h5,span,a,li,dt,dd,figcaption,div";
    if (includeImages) textSelectors += ",img";

    $root.find(textSelectors).each(function () {
      const $el = $(this);
      // Skip empty or non-visual elements
      if (!$el.text().trim() && !includeImages) return;

      // Avoid tagging twice
      if (!$el.hasClass("atomized")) {
        $el.addClass("atomized").attr("data-origin", "0,0");
      }
    });
  }

  // Reset all atomized elements back to original position
  function resetAtoms() {
    $(".atomized").css({
      transform: "translate(0px, 0px)",
    });
  }

  /**
   * Make all text (or selected region) move like floating “atoms”
   * @param {string} selector - Target selector (default 'body')
   * @param {number} intensity - Max random displacement in pixels (default 30)
   * @param {number} period - Refresh period (ms); smaller = faster (default 900ms)
   * @param {"jitter"|"drift"} mode - Mode: fast jitter or smooth drift (default "jitter")
   * @param {boolean} includeImages - Whether to include <img> elements (default false)
   */
  function atomize(selector = "pic", intensity = 300, period = 1, mode = "drift", includeImages = false) {
    // If running, stop and reset (toggle behavior)
    if (atomTimer) {
      clearInterval(atomTimer);
      atomTimer = null;
      resetAtoms();
      $("#atomizeBtn").text("Atomize Text (Start)");
      return;
    }

    // Mark target elements
    markTextAtoms(selector, includeImages);

    // Set up animation strategy
    lastMode = mode;
    const $targets = $(selector).find(".atomized");

    atomTimer = setInterval(() => {
      $targets.each(function () {
        const $el = $(this);

        // Random displacement
        let dx = (Math.random() * 2 - 1) * intensity;
        let dy = (Math.random() * 2 - 1) * intensity;

        // Behavior by mode
        if (mode === "drift") {
          // Drift mode: smoother, includes subtle rotation
          dx *= 0.35;
          dy *= 0.35;
          const rot = (Math.random() * 2 - 1) * 3; // ±3°
          $el.css({
            transition: "transform 1.2s ease-in-out",
            transform: `translate(${dx}px, ${dy}px) rotate(${rot}deg)`,
          });
        } else { // "jitter" mode: fast and erratic
          $el.css({
            transition: "transform 0.2s ease",
            transform: `translate(${dx}px, ${dy}px)`,
          });
        }
      });
    }, period);

    $("#atomizeBtn").text("Atomize Text (Stop)");
  }

  // ====== Button binding ======
  $(document).ready(function () {
    // If no button found, auto-insert a fallback one
    if ($("#atomizeBtn").length === 0) {
      $("body").append(
        `<div class="controls"><button id="atomizeBtn" class="atom-btn">Atomize Text (Start)</button></div>`
      );
    }

    // Example: click to apply to entire page; strong drift with images
    $("#atomizeBtn").on("click", function () {
      atomize(".pic, #top, #side-words", 400, 800, "drift", true);
    });
  });

  // Optional: expose function globally for console or other buttons
  window.atomize = atomize;
})();


// ====== Color inversion + dynamic hue shifting ======
(function () {
  let isInverted = false;
  let hueAngle = 240;
  let hueTimer = null;

  $("#invertBtn").on("click", function () {
    // Toggle state
    isInverted = !isInverted;

    if (isInverted) {
      $("body").addClass("inverted");
      $(this).text("Invert Off");

      // Start dynamic hue rotation between 180–360°
      hueTimer = setInterval(() => {
        hueAngle += 2 + Math.random() * 5; // vary by 2–7 degrees per step
        if (hueAngle > 360) hueAngle = 180; // loop range
        $("body").css("filter", `invert(1) hue-rotate(${hueAngle}deg)`);
      }, 100); // update every 0.1s
    } else {
      $("body").removeClass("inverted");
      $("body").css("filter", ""); // reset filter
      $(this).text("Invert Colors");
      clearInterval(hueTimer);
    }
  });
})();
