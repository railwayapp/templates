const mongoose = require("mongoose");
const catNames = require("cat-names");

// Connect to Redis using the MONGO_URL environment
//   variable inject by Railway
mongoose.connect(process.env.MONGO_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Create mongoose models
const Cat = mongoose.model("Cat", { name: String });

const go = async () => {
  // Create a cat
  const kitty = new Cat({ name: catNames.random() });
  await kitty.save();

  // Get all cats
  const cats = await Cat.find();
  console.log(`Found ${cats.length} cats`);
  console.log(cats);

  process.exit(0);
};

go();
