# Chess Analyzer

A browser-based tool that analyzes your lichess.org games with a locally-run Stockfish engine and surfaces recurring blunder patterns — no backend, no install.

## How it works

1. Paste a PGN (or, eventually, fetch games directly from lichess)
2. [chess.js](https://github.com/jhlywa/chess.js) parses the PGN and steps through the game move-by-move
3. For each position, chess.js provides a FEN snapshot, which is sent to a locally-running [Stockfish](https://stockfishchess.org/) engine (asm.js build, running in a Web Worker) for evaluation
4. Moves with a large evaluation swing are flagged as blunders and classified (e.g. hanging piece, missed check escape)
5. A summary view shows your most common mistake patterns

All analysis happens client-side. Your games and results are never sent to a server — everything is computed and stored (via `localStorage`) in your own browser.

## Tech stack

- Vanilla HTML/CSS/JS — no build step, no framework
- [chess.js](https://github.com/jhlywa/chess.js) for PGN parsing, move stepping, and FEN generation
- Stockfish (asm.js build) running in a Web Worker, communicating via the UCI protocol (lichess)
- lichess.org public API for fetching games (planned)

## Project structure

```
chess-analysis/
├── analysis.html          # PGN input, parsing, and result/header display
├── bestmove.html        # single-position analysis: FEN → Stockfish best move
├── lib/
│   ├── chess.js
│   └── stockfish.js     # asm.js build — no separate .wasm file needed
└── README.md
```

## Running locally

Since the app uses ES modules (`type="module"`), opening `analysis.html` directly via `file://` won't work in most browsers. Serve it locally instead, e.g. with `npx serve`, and open the forwarded local URL.



## Status

🚧 Work in progress.

Done so far:
- PGN parsing with chess.js, including reading `Result` and `Termination` from PGN headers
- Stockfish engine loaded in a Web Worker and responding to UCI commands (`uci`, `position fen ...`, `go depth ...`)
- Confirmed FEN (not raw PGN or move lists) is the right format to send Stockfish for both single-position and full-game analysis

Next up:
- Wire `chess.fen()` output into `bestmove.html` to get a real best-move result for a given position
- Loop through an entire game's positions to build the full blunder-detection pipeline
- Blunder classification and summary view