import { ipcMain } from "electron";
import { useGlobalEmitter } from "../controllers/mainController";

function setupIpcMainHandlers() {
  // declare ping from ipcMain
  ipcMain.on("ping", (event) => {
    event.sender.send("reply-ping", "dari ping ");
    // send from global.eventEmitter from controller
    useGlobalEmitter();
    global.eventEmitter.emit("custom-event", "dari ipcmain");
  });

  // send to renderer using mainWindow
  global.eventEmitter.on("custom-event", (arg) => {
    global.mainWindow.webContents.send("reply-ping", arg);
  });
}

export { setupIpcMainHandlers };
