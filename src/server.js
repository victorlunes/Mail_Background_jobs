import 'dotenv/config.js'
import express from "express";
import UserController from "./app/controllers/UserController.js";

const app = express();

app.use(express.json())

app.post("/create", UserController.store)

app.listen(3000, () => {
  console.log(`O servidor esta rodando na porta:${3000}`);
});
