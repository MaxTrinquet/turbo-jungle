require("dotenv").config();
const express = require("express")
const cors = require("cors");

const connectDB = require("./config/db")
const app = express()

// connect database
connectDB();//added

//cors
app.use(cors({ origin: true, credentials: true }));

const plant = require("./routes/plant");

// initialize middleware
app.use(express.json({ extended: false }));
app.get("/", (req, res) => res.send("Server up and running"));

// use routes
app.use("/api/plant", plant);

// setting up port
const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
  console.log(`server is running on http://localhost:${PORT}`);
});
