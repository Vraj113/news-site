const fs = require("fs");
const path = require("path");

const target = path.join(
  __dirname,
  "..",
  "node_modules",
  "next",
  "dist",
  "build",
  "swc",
  "index.js"
);

if (!fs.existsSync(target)) {
  process.exit(0);
}

const source = fs.readFileSync(target, "utf8");
if (source.includes("wasmFallbackBindings")) {
  process.exit(0);
}

const needle = `            attempts = attempts.concat(a);
        }
        logLoadFailure(attempts, true);`;

const replacement = `            attempts = attempts.concat(a);
        }
        const wasmFallbackBindings = await tryLoadWasmWithFallback(attempts);
        if (wasmFallbackBindings) {
            return resolve(wasmFallbackBindings);
        }
        logLoadFailure(attempts, true);`;

if (!source.includes(needle)) {
  console.warn("Could not patch Next SWC loader; native binary may still be blocked.");
  process.exit(0);
}

fs.writeFileSync(target, source.replace(needle, replacement));
console.log("Patched Next.js to fall back to WASM when the native SWC binary is blocked.");
