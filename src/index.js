import "dotenv/config";
import express from "express";
import { pets } from "./pets.js";
import { v4 as uuidv4 } from "uuid";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/pets", (req, res) => {
  try {
    res.status(200).json(pets);
  } catch (error) {
    res
      .status(500)
      .json({ mensagem: "Erro ao buscar pets", erro: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("API de Pets com Dotenv configurado! 🐾");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
