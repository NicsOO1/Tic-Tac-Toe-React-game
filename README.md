# 🎮 Tic Tac Toe — React + Tailwind

A clean and interactive **Tic Tac Toe game** built using **React** and **Tailwind CSS**.  
This project focuses on **state-driven UI**, **game logic correctness**, and **clean React patterns**.

---

## ✨ Features

- ✅ Turn-based gameplay (X vs O)
- 🏆 Winner detection using predefined winning combinations
- 🤝 Tie detection when the board is full
- 🚫 Prevents invalid moves
- 🔒 Disables board interaction after game ends
- 🔄 Restart game functionality
- 🎨 Minimal, modern UI using Tailwind CSS

---

## 🧠 Game Logic Overview

- The board state is stored as an array of cell objects
- Each move updates the board immutably
- Winner is calculated by checking all possible winning combinations
- Tie is detected when all cells are filled and no winner exists
- UI reacts purely based on state (no manual DOM manipulation)

---

## 🛠️ Tech Stack

- **React** (Hooks: `useState`, `useEffect`)
- **JavaScript (ES6+)**
- **Tailwind CSS**

open your browser and visit: https://fancy-fenglisu-16dc3f.netlify.app/
