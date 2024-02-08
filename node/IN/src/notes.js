import { insertDB as insert, getDB as get, saveDB as save } from "./db.js";

export const newNote = async (note, tags) => {
  const newNote = {
    tags,
    id: Date.now(),
    content: note,
  };
  await insert(newNote);
  return newNote;
};

export const getAllNotes = async () => {
  const { notes } = await get();
  return notes;
};

export const findNotes = async (filter) => {
  const { notes } = await get();
  return notes.filter((note) =>
    note.content.toLowerCase().includes(filter.toLowerCase())
  );
};

export const removeNote = async (id) => {
  const { notes } = await get();
  const match = notes.find((note) => note.id === id);

  if (match) {
    const newNotes = notes.filter((note) => note.id !== id);
    await save({ notes: newNotes });
    return id;
  }
};

export const removeAllNotes = async () => {
  await save({ notes: [] });
};

removeNote(1707353014612);
