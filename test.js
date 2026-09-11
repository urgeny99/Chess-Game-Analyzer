import { Chess } from './lib/chess.js';

const chess = new Chess();


while (!chess.isGameOver()) {
  const moves = chess.moves()
  const move = moves[Math.floor(Math.random() * moves.length)]
  chess.move(move)
}
console.log(chess.ascii())
console.log(chess.pgn())

console.log(chess.get('c4'))

chess.setHeader('Date', '1967.07.20')
chess.setHeader('Event', 'Casual Game')
chess.setHeader('Site', 'Berlin GER')
chess.setHeader('Round', '1')
chess.setHeader('White', 'Fischer, Robert J.')
chess.setHeader('Black', 'Spassky, Boris V.')

console.log(chess.getHeaders())

console.log(chess.hash())