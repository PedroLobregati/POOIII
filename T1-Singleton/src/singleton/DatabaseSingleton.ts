export default class DatabaseSingleton {
    private static instance: DatabaseSingleton;
    private isConnected: boolean;
  
    private constructor() {
      this.isConnected = false;
    }
  
    public static getInstance(): DatabaseSingleton {
      if (!DatabaseSingleton.instance) {
        DatabaseSingleton.instance = new DatabaseSingleton();
      }
      return DatabaseSingleton.instance;
    }
  
    public connect(): void {
      if (!this.isConnected) {
        console.log("Estabelecendo conexão com o banco...");
        this.isConnected = true;
      } else {
        console.log("Já conectado ao banco de dados.");
      }
    }
  
    public disconnect(): void {
      if (this.isConnected) {
        console.log("Desconectando do banco...");
        this.isConnected = false;
      } else {
        console.log("Não há conexão ativa para desconectar.");
      }
    }
}