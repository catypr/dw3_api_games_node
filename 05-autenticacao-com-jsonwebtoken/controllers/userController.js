//importando o service
import userService from "../services/userService.js";
//importando o jwt
import jwt from 'jsonwebtoken'
//segredo para o token(é recomendado que o segredo esteja nas vartiáveis de ambiente)
const JWTSecret = 'apithegames'

//Função para CADASTRAR um usuário
const createUser = async (req, res) => {
  try {
    const { name, email, password } = req.body;
    await userService.Create(name, email, password);
    res.status(201).json({ sucess: "Usuário cadastrado com sucesso!" });
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

// Função para realizar LOGIN
const loginUser = async (req, res) => {
  try {
    const { email, password } = req.body;
    // Buscando o usuário pelo email
    const user = await userService.getOne(email);
    // Se o usuário for encontrado
    if(user != undefined) {
      //fazendo a validação da senha (senha correta)
      if(user.password == password){
        // Gerando o token com JMT
        jwt.sign({id: user.id, email: user.email}, JWTSecret, {expiresIn: '48h'}, (error, token) => {
          if (error) {
            res.ststus(400).json({ error: 'Não foi possível gerer o Token de autenticação.'})
          }else {
            //token gerado com succeso 
            res.status(200).json({token})
          }
        });
        // Senha incorreta
      }else {
        res.status(401).json({ error: 'Credenciais inválidas!'})
        //cod. 401: Unauthorized
      }
    }else {
      res.status(400).json({ error: "Usuário nao encontrado"})
    }
  } catch (error) {
    console.log(error);
    res.sendStatus(500);
  }
};

export default { createUser, loginUser };