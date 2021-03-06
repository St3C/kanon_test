import express from "express";
import * as bodyParser from "body-parser";

export const app = express();
const port: string | number = process.env.PORT || 5000;

app.use(bodyParser.json());
require("./api/countriesRoutes")(app);

// Express will serve up production assets
app.use(express.static("client/build"));

// Express will serve up the index.html file if it doesn't recognize the route
const path = require("path");
app.use("*", (req, res) => {
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

//routes
app.listen(port, () => console.log("Running on port " + port));
