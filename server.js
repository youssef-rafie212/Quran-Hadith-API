import mongoose from "mongoose";
import dotenv from "dotenv";

dotenv.config({ path: "./config.env" });
import app from "./app.js";

mongoose
  .connect(process.env.DB, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => {
    console.log("DB connected");
  });

const port = process.env.PORT;
app.listen(port, () => {
  console.log(`server running on port ${port}`);
});
