import * as SQLite from "expo-sqlite";

const db = SQLite.openDatabase("usuarios.db");

export const initDB = () => {
  db.transaction(tx => {
    tx.executeSql(
      "CREATE TABLE IF NOT EXISTS usuarios (id INTEGER PRIMARY KEY AUTOINCREMENT, correo TEXT NOT NULL, contraseña TEXT NOT NULL);"
    );
  });
};

export const insertUsuario = (correo: string, contraseña: string) => {
  db.transaction(tx => {
    tx.executeSql("INSERT INTO usuarios (correo, contraseña) VALUES (?, ?);", [correo, contraseña]);
  });
};

export const getUsuarios = (callback: (usuarios: any[]) => void) => {
  db.transaction(tx => {
    tx.executeSql("SELECT * FROM usuarios;", [], (_, { rows }) => {
      callback(rows._array);
    });
  });
};