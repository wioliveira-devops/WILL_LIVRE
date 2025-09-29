import express from "express";

const app = express();

app.get("/", (req, res) => {
  res.send("Olá, Mundo!");
});

app.listen(3000, () =>
  console.log("My server is running on port http://localhost:3000/")
);
