import "dotenv/config";
import express from "express";
import { pets } from "./pets.js";
import { v4 as uuidv4 } from "uuid";
import { validarPet } from "./middlewares/validator.js";

const app = express();

const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get("/pets", (req, res) => {
  try {
    res.status(200).send({
      ok: true,
      mensagem: "Pets encontrados com sucesso",
      pets,
    });
  } catch (error) {
    res
      .status(500)
      .send({ mensagem: "Erro ao buscar pets", erro: error.message });
  }
});

app.post("/pets", [validarPet], (req, res) => {
  try {
    const { nome, raca, idade, nomeTutor } = req.body;

    const novoPet = {
      id: uuidv4(),
      nome,
      raca,
      idade,
      nomeTutor,
    };

    pets.push(novoPet);
    res.status(201).send({
      ok: true,
      mensagem: "Pet cadastrado com sucesso",
      novoPet,
    });
  } catch (error) {
    res
      .status(500)
      .send({ mensagem: "Erro ao cadastrar pet", erro: error.message });
  }
});

app.get("/pets/:id", (req, res) => {
  try {
    const { id } = req.params;

    const petLocalizado = pets.find((p) => p.id === id);

    if (!petLocalizado) {
      return res
        .status(404)
        .send({ ok: false, mensagem: "Pet não encontrado" });
    }

    res.status(200).send({
      ok: true,
      mensagem: "Pet encontrado com sucesso",
      petLocalizado,
    });
  } catch (error) {
    res
      .status(500)
      .send({ mensagem: "Erro ao buscar o pet", erro: error.message });
  }
});

app.get("/", (req, res) => {
  res.send("API de Pets com Dotenv configurado! 🐾");
});

app.listen(PORT, () => {
  console.log(`Servidor rodando na porta ${PORT}`);
});
