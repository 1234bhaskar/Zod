import { z } from "zod";

const mySchema = z.object({
  name: z.string(),
  email: z.string().email(),
  //number: z.number().max(10),
  password: z.string().min(8),
});

export default mySchema;
