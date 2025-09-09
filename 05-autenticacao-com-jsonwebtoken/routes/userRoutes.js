import express from "express";
const userRotes = express.Router();
import userController from "../controllers/userController.js";

//Endpoint para CADASTRAR um usuário
userRotes.post("/user", userController.createUser);

// Endpoint para logar
userRotes.post("/login", userController.loginUser);

export default userRotes;