# Chess Analyzer

A browser-based tool that analyzes your lichess.org games with a locally-run Stockfish engine and surfaces recurring blunder patterns — no backend, no install.

## How it works

1. Enter your lichess.org username or paste PGN
2. The app fetches your games directly from the lichess public API
3. Each game is stepped through move-by-move using [chess.js](https://github.com/jhlywa/chess.js)
4. [Stockfish](https://stockfishchess.org/) (compiled to WebAssembly) runs entirely in your browser via a Web Worker to evaluate every position
5. Moves with a large evaluation swing are flagged as blunders and classified (e.g. hanging piece, missed check escape)
6. A summary view shows your most common mistake patterns

All analysis happens client-side. Your games and results are never sent to a server — everything is computed and stored (via `localStorage`) in your own browser.

## Tech stack

- Vanilla HTML/CSS/JS — no build step, no framework
- [chess.js](https://github.com/jhlywa/chess.js) for PGN parsing and move logic
- [stockfish.wasm](https://github.com/lichess-org/stockfish.wasm) (single-threaded build) for position evaluation
- lichess.org public API for fetching games

## Project structure

```
chess-analyzer/
├── index.html        
├── lib/
│   ├── chess.js
│   ├── stockfish.js
│   └── stockfish.wasm
└── README.md
```

## Running locally

Just open `index.html` in a browser. No server or dependencies required.

## Hosting

Deployed via GitHub Pages — push to `main`, enable Pages in repo settings (source: root of `main`), and the app is live at `https://urgeny99.github.io/chess-analyzer/`.

## Status

🚧 Work in progress — built incrementally, starting with game logic and simply pasting PGN before adding Stockfish analysis, blunder classification and Lichess fetching.
