const fs = require("fs-extra");

async function copyHeaders() {
  try {
    await fs.copy("_headers", ".next/_headers");
    console.log("Headers file copied successfully!");
  } catch (err) {
    console.error("Error copying headers file:", err);
    process.exit(1);
  }
}

copyHeaders();
