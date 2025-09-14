import mongoose from "mongoose";
const dbUser = "catarineprsilva20_db_user";
const dbPassword ="uSAzLwqzU5TKi1Xf";
const dbName = "api-thegames";
const connect = () =>{
    mongoose.connect(
        `mongodb+srv://catarineprsilva20_db_user:uSAzLwqzU5TKi1Xf@cluster0.79r3ry3.mongodb.net/api-thegames?retryWrites=true&w=majority&appName=Cluster0`
    );
    const connection = mongoose.connection;
    connection.on("error", () => {
        console.log("Erro ao conectar com o mongoDB.");
    });
    connection.on("open", () => {
        console.log("Conectado com o mongoDB com sucesso!");
    });
};
connect();
export default mongoose;