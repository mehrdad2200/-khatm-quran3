// فایل‌های برنامهٔ وب را (پوشهٔ والد) داخل desktop/app کپی می‌کند
const fs = require("fs"), path = require("path");
const src = path.join(__dirname, ".."), dst = path.join(__dirname, "app");
const skip = new Set(["desktop", "node_modules", ".git"]);
fs.rmSync(dst, { recursive: true, force: true });
(function copy(a, b) {
  fs.mkdirSync(b, { recursive: true });
  for (const f of fs.readdirSync(a)) {
    if (a === src && skip.has(f)) continue;
    const p = path.join(a, f), q = path.join(b, f);
    fs.statSync(p).isDirectory() ? copy(p, q) : fs.copyFileSync(p, q);
  }
})(src, dst);
console.log("app copied to", dst);
