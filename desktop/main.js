const { app, BrowserWindow, shell, Menu } = require("electron");
const path = require("path");
function create() {
  const w = new BrowserWindow({
    width: 1100, height: 800, minWidth: 380, minHeight: 600,
    title: "ختم قرآن", backgroundColor: "#06130f", autoHideMenuBar: true,
    webPreferences: { contextIsolation: true, nodeIntegration: false, sandbox: true }
  });
  Menu.setApplicationMenu(null);
  w.loadFile(path.join(__dirname, "app", "index.html"));
  w.webContents.setWindowOpenHandler(({ url }) => { shell.openExternal(url); return { action: "deny" }; });
}
app.whenReady().then(() => { create(); app.on("activate", () => BrowserWindow.getAllWindows().length || create()); });
app.on("window-all-closed", () => { if (process.platform !== "darwin") app.quit(); });
