import path from "path";
import fs from "fs";
import React from "react";
import express from "express";
import ReactDOMServer from "react-dom/server";

import App from "../src/App";

const PORT = process.env.PORT || 5000;
const app = express();

const indexFile = path.resolve("./build/index.html");
app.use(express.static(path.resolve(__dirname, "..", "build")));
app.get("^/$", (req, res, next) => {
  const app = ReactDOMServer.renderToString(<App />);
  fs.readFile(indexFile, "utf8", (error, data) => {
    if (error) {
      console.error("Something went wrong", error);
      return res.status(500).send("Oops, better luck next time");
    }

    return res.send(
      data.replace('<div id="root"></div>', `<div id="root>${app}</div>`)
    );
  });
});

app.listen(PORT, () => {
  console.log(`Server is listening from the ${PORT}`);
});
