import express from "express";
const app = express();
import { z } from "zod";

app.use(express.json());
// creating a schema for strings
const mySchema = z.object({
  name: z.string(),
  age: z.number(),
  number: z.number(),
});

app.post("/abc", (req, res) => {
  const { name, age, number } = req.body;
  const response = mySchema.safeParse(req.body);
  if (!response.success) {
    res.json({
      msg: "rejected",
      response,
    });
  } else {
    res.json({
      response,
    });
  }
});

app.listen(5000, () => {
  console.log("Server is running");
});
