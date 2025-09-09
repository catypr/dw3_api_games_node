import express from "express";
const gameRoutes = express.Router();
import gameController from "../controllers/gameController.js";

//A cama de Routes serÁ responsável por conter os ENDPOINTS da API
//Endpoint para listar
gameRoutes.get("/game", gameController.getAllgames);

//Endpoint para cadastrat
gameRoutes.post("/games", gameController.createGame);

//endpint para deletar
gameRoutes.delete("/games/:id", gameController.deleteGame);

//endpoint alterar
gameRoutes.put("/games/:id", gameController.updateGame);

export default gameRoutes;
