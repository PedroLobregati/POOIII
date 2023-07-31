import DatabaseSingleton from "./singleton/DatabaseSingleton";

const connection1 = DatabaseSingleton.getInstance();
connection1.connect();

const connection2 = DatabaseSingleton.getInstance();
connection2.connect(); 

connection1.disconnect();