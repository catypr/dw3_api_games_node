import gameService from "../services/gameService.js";
import { ObjectId } from "mongodb";

// Função para listar jogos
const getAllgames = async (req, res) => {
  try {
    const games = await gameService.getAll();
    //cód 200(ok) - requisição feita com sucesso
    res.status(200).json({ games: games });
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};
// Função para CADASTRAR jogos
const createGame = async (req, res) => {
  try {
    const { title, year, genre, plataform, price } = req.body;
    await gameService.Create(title, year, genre, plataform, price);
    res.sendStatus(201); //código 201 (created) : recurso criado
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });
  }
};

//função para deletar jogos
const deleteGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      await gameService.Delete(id);
      res.sendStatus(204); //código (no content)
    } else {
      // se o id não for valido
      res.status(400).json({ error: "A ID enviada é ínvalida." }); //400 bad request - requisição mal formada
    }
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Erro interno do servidor." });

    //res.status(500).jason({}) -> para enviar json junto
    //res.sendStatus(500) -> somente código de status
  }
};

//função para alterar jogos
const updateGame = async (req, res) => {
  try {
    if (ObjectId.isValid(req.params.id)) {
      const id = req.params.id;
      const { title, year, genre, plataform, price } = req.body;
      await gameService.Update(id, title, year, genre, plataform, price);
      res.sendStatus(200);
    } else {
      res.sendStatus(400);
    }
  } catch (error) {
    console.log(error);
    res.status(500).jason({ error: "Erro interno no servidor." });
  }
};

export default { getAllgames, createGame, deleteGame, updateGame };
