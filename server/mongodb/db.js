const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    const connectionString =
      "mongodb+srv://nababratadeb:nababrata12@cluster0.xi0cloi.mongodb.net/?retryWrites=true&w=majority";

    await mongoose.connect(connectionString, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Connected to MongoDB");
  } catch (err) {
    console.error(err.message);
    process.exit(1);
  }
};

module.exports = connectDB;
