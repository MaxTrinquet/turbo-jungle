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

if (process.env.NODE_ENV === "production") {
  const path = require("path");
  app.use(express.static(path.resolve(__dirname, 'client', 'build')));
  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'), function (err) {
      if (err) {
        res.status(500).send(err)
      }
    });
  })
}
