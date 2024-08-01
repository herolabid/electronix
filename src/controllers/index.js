import { ipcMain } from "electron";
import axios from "axios";

export function setupIpcMainHandlers() {
  ipcMain.on("get-info", (event, data) => {
    event.sender.send("replay-get-info", { status: "success", data: data });
    event.sender.send("response", { status: "success", data: data });
  });
}
