<script setup>
const { ipcRenderer } = require("electron");

// Mendengarkan balasan dari pesan asinkron
ipcRenderer.on("reply-ping", (event, arg) => {
  console.log(arg); // Mencetak 'pong'
});

ipcRenderer.on("global-event-response", (event, data) => {
  console.log(`Received global event with data:`, data);
});


// window.electron.ipcRenderer.send("ping");
const ipcHandle = () => ipcRenderer.send("ping", "ping");
</script>

<template>
  <div class="w-full ">
    Welcome to Electronix
    <button class="px-4 py-2" @click="ipcHandle">Ping</button>
  </div>
</template>
