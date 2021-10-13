let fs = require('fs');
let packageDirectory = __dirname + '/package/';

eval(fs.readFileSync(packageDirectory + 'c-lexer.min.js', 'utf8').toString());
let cLexer = lexer;

eval(fs.readFileSync(packageDirectory + 'sql-lexer.min.js', 'utf8').toString());
let sqlLexer = lexer;

eval(fs.readFileSync(packageDirectory + 'goal-lexer.min.js', 'utf8').toString());
let goalLexer = lexer;

module.exports = {
    cLexer: cLexer,
    sqlLexer: sqlLexer,
    goalLexer: goalLexer,
};