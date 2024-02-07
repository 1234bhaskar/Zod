import express from "express";
const app = express();
//import { z } from "zod";
app.use(express.json());

import mySchema from "./validation.js";

app.post("/login", (req, res) => {
  const { email, password, name } = req.body;
  const validation = mySchema.safeParse(req.body);

  if (!validation.success) {
    res.json({
      msg: "Please enter the data properly.", //Checking Format of input
      validation,
    });
  } else if (validation.success) {
    if (!email == "testmail@mail.com") {
      res.json({
        msg: "Not registred email",
        validation,
      });
    } else if (email == "testmail@mail.com" && password != "password") {
      res.json({
        msg: "Wrong password",
        validation,
      });
    }

    if (email == "testmail@mail.com" && password == "password") {
      res.json({
        msg: "Login successfully :)",
        validation,
      });
    } else {
      res.json({
        msg: "You are not authenticated",
      });
    }
  }
});

app.listen(5000, () => {
  console.log("Server is running");
});
