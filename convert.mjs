import {  compileFromFile } from 'json-schema-to-typescript'
import fs from "node:fs";

// compile from file
compileFromFile('lottie.schema.json')
  .then(ts => fs.writeFileSync('assets/ts/lottie-schema.d.ts', ts));
