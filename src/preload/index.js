import { contextBridge, ipcRenderer } from "electron";
import { electronAPI } from "@electron-toolkit/preload";

// Custom APIs for renderer
const api = {
  getInfo: () => ipcRenderer.send('get-info'),
  replayGetInfo: (callback) => ipcRenderer.on('replay-get-info', (event, response) => callback(response)),
  sendExampleMessage: (data) => ipcRenderer.send("example-message", data),
  getResponse: (callback) => ipcRenderer.on("response", (event, response) => callback(response))
};

// Use `contextBridge` APIs to expose Electron APIs to
// renderer only if context isolation is enabled, otherwise
// just add to the DOM global.
if (process.contextIsolated) {
  try {
    contextBridge.exposeInMainWorld("electron", electronAPI);
    contextBridge.exposeInMainWorld("api", api);
  } catch (error) {
    console.error(error);
  }
} else {
  window.electron = electronAPI;
  window.api = api;
}
