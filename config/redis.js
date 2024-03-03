const redis = require("redis");

const redisClient = redis.createClient();

redisClient.connect();

redisClient.on("connect", () => {
  console.log("redis connected successfully");
});

redisClient.on("error", (err) => {
  console.error("Redis connection error:", err);
});

module.exports = redisClient;
