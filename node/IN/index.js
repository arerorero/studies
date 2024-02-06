#!/usr/bin/env node
import "./src/command.js";
import * as u from "./src/utils.js";

await u.wait(1000);
console.log("done");
