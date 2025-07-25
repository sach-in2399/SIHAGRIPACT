const mongoose = require("mongoose");
require("dotenv").config();

exports.connect = () => {
    mongoose.connect(process.env.DATABASE_URL, {
        useNewUrlParser: true,
        useUnifiedTopology: true,
    })
    .then(() => console.log("✅ DB connection is successful"))
    .catch((error) => {
        console.log("❌ DB connection failed");
        console.error(error);
        process.exit(1);
    });
};
