require("particles.js");

function particle() {
  particlesJS.load("particle", "../json/particles.json", function() {
    console.log("callback - particles.js config loaded");
  });
}

module.exports = {
  particle
};
