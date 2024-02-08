import fs from "node:fs/promises";

var path = new URL("../db.json", import.meta.url).pathname;
// replace %20 from path to space
const DB_PATH = path.replace(/%20/g, " ").slice(1);

export const getDB = async () => {
  const db = await fs.readFile(DB_PATH, "utf-8");
  return JSON.parse(db);
};

export const saveDB = async (db) => {
  await fs.writeFile(DB_PATH, JSON.stringify(db, null, 2));
  return db;
};

export const insertDB = async (note) => {
  const db = await getDB();
  db.notes.push(note);
  await saveDB(db);
  return note;
};
