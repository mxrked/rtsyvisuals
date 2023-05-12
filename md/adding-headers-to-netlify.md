# 1: Modifying build command in package.json

<!-- "scripts": {
"dev": "next dev",
"build": "next build && node copy-headers.js",
"start": "next start",
"lint": "next lint",
"export": "next export",
"generateSitemap": "node ./scripts/generate-sitemap.js"
}, -->

- # build: "next build && node copy-headers.js"
      - This adds the copy-headers file to node and if used in conjunction with Netlify

===

# 2: Modifying next.config.js

If you dont have "fs-extra" installed as a dependency, install it by running

# npm i fs-extra

Now add this code to the next.config.js file

<!--
      async afterBuild({ utils }) {
            await fs.copy("_headers", ".next/_headers");
      }
-->

# This adds the \_headers file after npm run build

===

# 3: Creating the copy-headers file

In the root of your project, create a file named "copy-headers.js" and inside of that file add the following code:

<!--

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

-->

This is used to force the \_headers file to be added to .next

===

# 4: Commit and push your changes

After all of that is done, commit your changes and push it to the github repo to which your Netlify project is linked to.
