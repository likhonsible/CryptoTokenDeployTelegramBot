index.js

const util = require('util');
const exec = util.promisify(require('child_process').exec);

const dotenv = require("dotenv")
dotenv.config()
