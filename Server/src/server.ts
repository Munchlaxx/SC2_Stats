import express from "express";

const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("We in this bitch!");
});

app.get("/api", (req, res) => {
  res.send("Redirect");
});

app.listen(port, (err) => {
  if (err) {
    return console.error(err);
  }
  return console.log(`server is listening on ${port}`);
});
