#!/usr/bin/env node
import "./src/command.js";
import * as f from "./src/command.js";

await f.wait(1000);
console.log("done");
