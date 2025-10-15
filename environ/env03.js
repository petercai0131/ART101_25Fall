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
