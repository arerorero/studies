import { getAllNotes } from "./src/notes.js";
import { start } from "./src/server.js";

const notes = await getAllNotes();
start(notes, 3006);
