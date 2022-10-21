const express = require("express");
const app = express();
const PORT = 3000;

app.set("view engine", "ejs");

app.use(express.static("public"));
app.use(
  express.urlencoded({
    extended: true,
  })
);

app.get("/", (req, res) => {
  res.sendFile("./index.html", { root: __dirname });
});

app.post("/thank-you", (req, res) => {
  const rating = req.body.rating;
  console.log(rating)
  res.render("thanks", { rating: rating || 0 });
});

app.listen(PORT, () => {
  console.log(`server is running at localhost:${PORT}`);
});
