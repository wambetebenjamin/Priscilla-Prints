import { readFile, readdir } from "node:fs/promises";
import { extname, join } from "node:path";

const roots = ["app", "components", "data", "lib", "README.md", "credits.md"];
const textExtensions = new Set([".ts", ".tsx", ".css", ".md", ".json", ".mjs"]);
const failures = [];

async function scan(path) {
  const stat = await import("node:fs/promises").then((fs) => fs.stat(path));
  if (stat.isDirectory()) {
    for (const item of await readdir(path)) await scan(join(path, item));
    return;
  }
  if (!textExtensions.has(extname(path))) return;
  const text = await readFile(path, "utf8");
  if (text.includes("\u2014")) failures.push(`${path}: contains an em dash`);
}

for (const root of roots) await scan(root);

const credits = await readFile("credits.md", "utf8");
const images = (await readdir("public/images")).filter((name) => /\.(jpe?g|png|webp)$/i.test(name));
for (const image of images) {
  if (!credits.includes(`public/images/${image}`)) failures.push(`credits.md: missing ${image}`);
}
if (!credits.includes("pexels.com")) failures.push("credits.md: missing Pexels sources");

if (failures.length) {
  console.error(failures.join("\n"));
  process.exit(1);
}
console.log(`Content check passed for ${images.length} credited Pexels images.`);
