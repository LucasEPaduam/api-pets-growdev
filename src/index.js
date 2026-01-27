import "dotenv/config";
import express from "express";
import { pets } from "./pets.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/", (req, res) => {
  res.send("API de Pets com Dotenv configurado! 🐾");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
