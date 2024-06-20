const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const webpush = require("web-push");
require('dotenv').config()

const app = express();

app.use(express.static(path.join(__dirname, "client")));

app.use(bodyParser.json());

webpush.setVapidDetails(
  "mailto:eddorzh@mail.ru",
  process.env.PUBLIC_KEY,
  process.env.PRIVATE_KEY,
);

app.post("/subscribe", (req, res) => {
  const subscription = req.body;

  res.status(201).json({});

  const payload = JSON.stringify({ title: "Push message" });

  webpush
    .sendNotification(subscription, payload)
    .catch(err => console.error(err));
});

app.listen(process.env.PORT, () => console.log(`Server listening on port ${process.env.PORT}`));
