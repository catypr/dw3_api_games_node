import Game from "../models/Games.js";

// O service será responsável por conter os métodos de manipulação do banco.

class gameService {
  //classe
  // Buscando os regitros do banco.
  async getAll() {
    //primeiro método
    try {
      const games = await Game.find();
      return games;
    } catch (error) {
      console.log(error);
    }
  }
  //Cadastrar registros no banco
  async Create(title, year, genre, plataform, price) {
    try {
      const newGame = new Game({
        title,
        year,
        genre,
        plataform,
        price,
      });
      await newGame.save();
    } catch (error) {
      console.log(error);
    }
  }

  //Deletando registros no banco
  async Delete(id) {
    try {
      await Game.findByIdAndDelete(id);
      console.log(`Game com a id: ${id} foi deletado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }

  //alterando registros no banco
  async Update(id, title, year, genre, plataform, price) {
    try {
      await Game.findByIdAndUpdate(id, {
        title,
        year,
        genre,
        plataform,
        price,
      });
      console.log(`Dados do game com id${id} alterado com sucesso.`);
    } catch (error) {
      console.log(error);
    }
  }
}
export default new gameService();
