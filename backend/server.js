const express = require("express");
const cors = require("cors");
const dotenv = require('dotenv');
const path = require("path");
const connectDB = require("./lib/db");
const PORT = process.env.PORT || 5000;
const submissionRoute = require("./routes/submissionRoute");


const app = express();

app.use(cors());
app.use(express.json());


dotenv.config();
connectDB();


app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use("/api", submissionRoute);

app.listen(PORT, () => {
    console.log("Server running on port 5000");
});
