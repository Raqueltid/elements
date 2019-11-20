const fs = require("fs-extra");
const concat = require("concat");

(async function build() {
  const files = [
    "./dist/elements/runtime-es5.js",
    "./dist/elements/polyfills-es5.js",
    "./dist/elements/scripts.js",
    "./dist/elements/main-es5.js"
  ];

  //Generar JS
  await fs.ensureDir("elements");
  await concat(files, "elements/elements.js");

  //Generar CSS
  await fs.ensureDir("elements/assets/elements");
  await fs.copyFile(
    "./dist/elements/styles.css",
    "elements/assets/elements/styles.css"
  );

  // Generar ASSETS
  await fs.copy("src/assets", "elements/assets");
})();
