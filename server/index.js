const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const connectDB = require("./mongodb/db");
const todoRoutes = require("./routes/todoRoutes");

const app = express();

app.use(bodyParser.json());
app.use(cors());

connectDB();

app.get("/", (req, res) => {
  res.json("hello world");
});

app.use("/api/v1/todos", todoRoutes);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () =>
  console.log(`server started at http://localhost:${PORT}`)
);
