const express = require("express");
const app = express();

const cookieParser = require("cookie-parser");
app.use(cookieParser());

app.get("/", (req, res) => {
  res.cookie("Name", "Ronak");
  res.send("Cookie has been set");
});

const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Test server is running on http://localhost:${PORT}`);
});
