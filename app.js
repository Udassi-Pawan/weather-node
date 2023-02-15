import express from "express";
import { forecast, locate } from "./forecast.js";
const app = express();

import path from "path";
import url from "url";

const __filename = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.use(express.static(path.join(__dirname, "/public")));

app.get("/weather", (req, res) => {
  locate((req.query.address = "indore"), (error, data) => {
    forecast(data[1], data[0], (error, forecastData) => {
      if (error) res.send(error);
      else res.send([forecastData.data.values.temperature, data]);
    });
  });
});

app.listen(3000);
