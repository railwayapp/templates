const redis = require("redis");
const { promisify } = require("util");

const go = async () => {
  // Connect to Redis using the REDIS_URL environment
  //   variable inject by Railway
  const client = redis.createClient({
    url: process.env.REDIS_URL,
  });

  client.on("error", function (error) {
    console.error(error);
  });

  // Set key in redis
  await promisify(client.set).bind(client)("hello", "world");

  // Get all keys
  const keys = await promisify(client.keys).bind(client)("*");
  console.log(keys);

  process.exit(0);
};

go();
