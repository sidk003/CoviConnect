const mongoose = require("mongoose");
const uri = "mongodb+srv://admin:N0f1zHWMK49RDvcB@cluster0.moofl.mongodb.net/Cluster0?retryWrites=true&w=majority"
const connectToDB = async () => {
  try {
    const conn = await mongoose.connect( uri, {
      useNewUrlParser: true,
      useCreateIndex: true,
      useUnifiedTopology: true,
    });
    console.log(
      `MongoDB connected: ${conn.connection.host}`
    );
  } catch (err) {
    console.log(`Error: ${err.message}`);
    process.exit(1);
  }
};

module.exports = connectToDB;