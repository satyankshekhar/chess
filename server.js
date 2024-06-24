const express = require('express');
const { execFile } = require('child_process');
const path = require('path');

const app = express();
const port = 3000;

app.use(express.static(path.join(__dirname, 'public')));

app.get('/stockfish', (req, res) => {
    const stockfishPath = path.join(__dirname, 'stockfish/stockfish-windows-x86-64-avx2.exe');
    const stockfish = execFile(stockfishPath);

    console.log('Stockfish started');
    console.log(stockfish);
    stockfish.stdout.on('data', (data) => {
        console.log(`stdout: ${data}`);
        res.write(data);
    });

    stockfish.stderr.on('data', (data) => {
        console.error(`stderr: ${data}`);
    });

    stockfish.on('close', (code) => {
        console.log(`child process exited with code ${code}`);
        res.end();
    });

    stockfish.stdin.write('uci\n');
    stockfish.stdin.write('isready\n');
    stockfish.stdin.write('position startpos\n');
    stockfish.stdin.write('go depth 10\n');
});

app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
