import DatabaseSingleton from "./singleton/DatabaseSingleton";

const conexao1 = DatabaseSingleton.getInstance();
conexao1.connect();

const conexao2 = DatabaseSingleton.getInstance();
conexao2.connect(); 

conexao2.disconnect();

conexao1.disconnect();