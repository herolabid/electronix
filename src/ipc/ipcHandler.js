import { ipcMain } from "electron";
const redis = require('redis')



const redisHost = import.meta.env.VITE_REDIS_HOST;
const redisPort = import.meta.env.VITE_REDIS_PORT;
const redisPass = import.meta.env.VITE_REDIS_PASSWORD;

const configRedis = {
  url: `redis://${redisHost}:${redisPort}`,
  password: redisPass
};

const client = redis.createClient(configRedis);


export function setupIpcMainHandlers() {

}
