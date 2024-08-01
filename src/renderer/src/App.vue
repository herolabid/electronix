<script setup>
import Versions from "./components/Versions.vue";
import { onMounted } from "vue";


const sendMessage = () => {
  window.api.getInfo();
};

onMounted(() => {
   window.api.getInfo();
})

window.api.getResponse((resp) => {
  console.log({ resp });
});
// const ipcHandle = () => window.electron.ipcRenderer.send("ping");
</script>

<template>
  <div class="w-full ">

      <div class="mx-auto flex">
        <div class="grid-cols-2">
          dasda
        </div>
        <div  class="grid-cols-2">
          dasda
        </div>
      </div>

  </div>

</template>
