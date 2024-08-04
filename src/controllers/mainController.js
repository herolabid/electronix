

export function useGlobalEmitter() {
  global.eventEmitter.emit("custom-event", "from masak nasi");
}

