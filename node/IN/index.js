#!/usr/bin/env node
import _ from "lodash";
const note = process.argv[2];
let code = _.random(1, 99);
const newNote = {
  content: note ? note : "No note provided.",
  id: code + "." + Date.now(),
};

console.log(newNote);

(function () {
  console.log("IIFE");
})();
