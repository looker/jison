#!/usr/bin/env narwhal

exports.testAPI = require("./api");
exports.testLR0 = require("./lr0");
exports.testSLR = require("./slr");
exports.testLALR = require("./lalr");
exports.testLR1 = require("./lr1");
exports.testAST = require("./ast");
exports.testTables = require("./tables");
exports.testPrecedence = require("./precedence");
exports.testGenerator = require("./generator");

if (require.main === module.id)
    require("os").exit(require("test").run(exports)); 
