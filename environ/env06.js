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

// ====== Hover Animation for Digimon Images ======
$(document).ready(function () {
  $(".pic img").hover(
    function () {
      // When hovered: enlarge & glow
      $(this).stop().animate(
        { width: "420px" }, // slightly larger
        500
      ).css({
        "box-shadow": "0 0 30px #00ffcc, 0 0 60px #ff00ff",
        "border-radius": "12px"
      });
    },
    function () {
      // When mouse leaves: restore size & remove glow
      $(this).stop().animate(
        { width: "350px" }, // original width
        500
      ).css({
        "box-shadow": "none",
        "border-radius": "0px"
      });
    }
  );
});

// ====== Clean Up Mode ======
$(document).ready(function () {
  let isClean = false; // track cleanup state

  // save the original text for later restore
  const savedTopHTML = $("#top .highlight").html();
  const savedSideHTML = $("#side-words").html();

  // variable to store hidden elements
  let $hiddenEls = $();

  $("#cleanupBtn").on("click", function () {
    if (!isClean) {
      // ===== Clean up mode =====
      // Fade out everything except Digimon images and the control buttons
      $hiddenEls = $("body > *:not(.controls):not(h1):not(h2):not(.pic)").fadeOut(800);

      // Clear both title lines
      $("#top .highlight").empty();
      $("#side-words").empty();

      // Keep Digimon images centered and glowing
      $(".pic img").css({
        display: "inline-block",
        margin: "40px",
        "box-shadow": "0 0 20px #00ffcc, 0 0 40px #ff00ff",
        "border-radius": "12px"
      });

      // Update button text
      $(this).text("Restore");
      isClean = true;
    } else {
      // ===== Restore mode =====
      // Restore both titles
      $("#top .highlight").html(savedTopHTML);
      $("#side-words").html(savedSideHTML);

      // Fade in hidden elements
      $hiddenEls.fadeIn(800);

      // Reset image style
      $(".pic img").css({
        margin: "",
        "box-shadow": "",
        "border-radius": ""
      });

      // Update button text
      $(this).text("Clean Up");
      isClean = false;
    }
  });
});



// =======================
// KEYBOARD: Glitch Surge on key press
// =======================
(function () {
  // Helper to pulse images + HUD when a key is pressed
  function glitchPulse(keyLabel) {
    $("#hud").text(`KEY: ${keyLabel}`);
    const $imgs = $(".pic img");

    // Add surge look
    $imgs.addClass("glitch-surge");
    // Quick micro-shake on the first image for feedback
    $imgs.eq(0).addClass("shake-once");

    // Remove the temporary classes shortly after
    setTimeout(() => {
      $imgs.removeClass("glitch-surge");
      $imgs.eq(0).removeClass("shake-once");
    }, 180);
  }


  $(document).on("keydown", function (e) {
    const key = e.key;

    // Show the key and pulse the visuals
    glitchPulse(key.length === 1 ? key.toUpperCase() : key);
  });

})();


// =======================
// SCROLL: Parallax Drift + Hue sweep
// =======================
(function () {
  // Throttle to avoid doing work every single scroll tick
  let ticking = false;

  function onScroll() {
    const y = window.scrollY || document.documentElement.scrollTop || 0;

    // Parallax transform: small translate and rotate based on scroll
    // Keep it subtle to avoid fighting your hover sizes
    const translateY = Math.round(y * 0.07);    // 7% of scroll
    const rotateZ   = Math.min(6, y * 0.02);    // cap at ~6deg

    $(".pic img").css("transform", `translateY(${translateY}px) rotate(${rotateZ}deg)`);

    // Ambient hue sweep: gentle rotation between 0–100deg based on scroll
    const hue = (y % 1000) * 0.1; // 0..100
    // Respect your existing invert mode: if .inverted is active, keep invert(1)
    if ($("body").hasClass("inverted")) {
      $("body").css("filter", `invert(1) hue-rotate(${180 + hue}deg)`);
    } else {
      $("body").css("filter", `hue-rotate(${hue}deg)`);
    }

    ticking = false;
  }

  window.addEventListener("scroll", function () {
    if (!ticking) {
      window.requestAnimationFrame(onScroll);
      ticking = true;
    }
  }, { passive: true });
})();
