export const validarPet = (req, res, next) => {
  try {
    const { nome, raca, idade, nomeTutor } = req.body;

    if (!nome || !raca || !idade || !nomeTutor) {
      return res.status(400).send({
        ok: false,
        mensagem:
          "Falha na validação: Todos os campos (nome, raca, idade, nomeTutor) são obrigatórios.",
      });
    }

    if (typeof idade !== "number") {
      return res.status(400).send({
        ok: false,
        mensagem: "Falha na validação: O campo idade deve ser um número.",
      });
    }

    next();
  } catch (error) {
    return res.status(500).send({
      ok: false,
      mensagem: error.toString(),
    });
  }
};
