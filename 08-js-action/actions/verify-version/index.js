const fs = require("fs");
const path = require("path");

try {
  const targetPath = path.join(__dirname, "..", "..", "..", "package.json");

  const packageJson = JSON.parse(fs.readFileSync(targetPath, "utf-8"));
  const version = packageJson.version;

  console.log(`Version: ${version}`);
} catch (error) {
  console.error(error);
  process.exit(1);
}
