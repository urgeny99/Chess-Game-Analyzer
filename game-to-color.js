import { Chess } from './lib/chess.js';

const chess = new Chess();

while (!chess.isGameOver()) {
  const moves = chess.moves()
  const move = moves[Math.floor(Math.random() * moves.length)]
  chess.move(move)
}

console.log(chess.ascii())

const hash = chess.hash()
console.log(chess.hash())

const color = `#${hash.substring(0, 6)}`
const r = parseInt(color.substring(1, 3), 16);
const g = parseInt(color.substring(3, 5), 16);
const b = parseInt(color.substring(5, 7), 16);
console.log(`\x1b[48;2;${r};${g};${b}m   \x1b[0m ${color}`);