# 🧠 Memory Game

A modern and interactive Memory Game built with **TypeScript, HTML and SCSS**.

Choose your favorite theme, select the number of cards and decide which player starts. Find matching pairs, score points and become the Memory champion!

---

## 🎮 Features

* 🃏 Classic Memory gameplay
* 👥 Two-player mode
* 🎨 Multiple selectable themes
* 🔢 Three different game sizes
* 🔀 Randomly shuffled cards
* 🏆 Score tracking for both players
* 🥇 Winner and draw detection
* 🎯 Current player indicator
* ⚙️ Game settings saved with `localStorage`
* 💬 Exit confirmation dialog
* 📱 Responsive design

---

## 🚀 Getting Started

### Prerequisites

Before starting the project, make sure you have the following installed:

* [Node.js](https://nodejs.org/)
* npm

### Installation

#### 1. Clone the repository

```bash
git clone <your-repository-url>
```

#### 2. Navigate into the project directory

```bash
cd memory-game
```

#### 3. Install the dependencies

```bash
npm install
```

#### 4. Start the development server

```bash
npm run dev
```

The application will then be available in your browser.

---

## 🕹️ How to Play

The game is designed for two players.

### Game Setup

Before starting a game:

1. Select a theme.
2. Choose which player starts.
3. Select the number of cards.
4. Start the game.

### Gameplay

1. Flip two cards.
2. If the cards match, the current player scores one point and keeps their turn.
3. If the cards do not match, they are turned face down again.
4. The other player continues.
5. The game ends when all pairs have been found.

The player with the most matching pairs wins.

If both players finish with the same number of pairs, the game ends in a draw.

---

## 🃏 Game Sizes

The game offers three different game sizes:

|   Cards  |  Grid |
| :------: | :---: |
| 16 Cards | 4 × 4 |
| 24 Cards | 4 × 6 |
| 36 Cards | 6 × 6 |

Each card appears twice, creating matching pairs.

---

## 🎨 Available Themes

The game currently includes three different themes.

### 💻 Code Vibes

A theme inspired by programming and technology.

### 🎮 Gaming

A theme featuring gaming-related cards.

### 🚀 DA Projects

A theme based on projects from the Developer Academy.

---

## ⚙️ Game Settings

The selected game settings are saved locally before the game starts.

The settings include:

```ts
const settings = {
  theme,
  player,
  numberOfCards,
};
```

These settings are stored in `localStorage`:

```ts
localStorage.setItem(
  "settings",
  JSON.stringify(settings)
);
```

When the game starts, the settings are loaded again:

```ts
const settings = JSON.parse(
  localStorage.getItem("settings") ?? "{}"
);
```

This allows the selected configuration to be transferred from the settings page to the actual game.

---

## 🏆 Scoring System

The game supports two players:

* 🔵 **Blue Player**
* 🟠 **Orange Player**

Every successfully found pair awards one point to the current player.

At the end of the game, the final score is evaluated automatically.

The game can determine whether:

* 🔵 Blue wins
* 🟠 Orange wins
* 🤝 The game ends in a draw

The final scores and the winner are stored and displayed on the game-over screen.

---

## 💾 Game Results

The final game results are saved in `localStorage`.

```ts
const winningValues = {
  scoreBlue,
  scoreOrange,
  winner,
};

localStorage.setItem(
  "winningValue",
  JSON.stringify(winningValues)
);
```

This allows the game-over screen to access and display the results of the completed game.

---

## 🔀 Card Randomization

Before the game starts, the cards are randomly shuffled:

```ts
memoryCardArray.sort(() => Math.random() - 0.5);
```

Depending on the selected game size, the appropriate number of cards is used to generate the game field.

---

## 🧠 Game Logic

The game uses event delegation to handle card clicks.

When a card is clicked:

1. The card is flipped.
2. The image source is stored.
3. A second card is selected.
4. Both image sources are compared.
5. If the cards match:

   * The pair is marked as solved.
   * The current player receives one point.
6. If the cards do not match:

   * The cards are turned face down again.
   * The player changes.
7. The score and win condition are updated.

Example:

```ts
if (firstImageSrc === imageSrc) {
  firstCard.classList.add("is-solved");
  card.classList.add("is-solved");
} else {
  changePlayer();
}
```

---

## 📱 Responsive Design

The game is designed to work across different screen sizes, including:

* Desktop
* Tablet
* Mobile devices

The game field dynamically adapts to the selected number of cards.

---

## 🧩 Technologies Used

* **HTML5** – Structure and semantic markup
* **SCSS** – Styling and responsive layouts
* **TypeScript** – Game logic and type safety
* **Vite** – Development environment and build tool
* **LocalStorage API** – Saving game settings and results

---

## 📂 Project Structure

```text
📦 Memory Game
├── 📁 public
│   └── 📁 img
│       ├── theme-it-logos.png
│       ├── theme-gameing.png
│       └── theme-da-projects.png
│
├── 📁 src
│   ├── 📁 template
│   │   ├── memory-cards.ts
│   │   └── template-functions.ts
│   │
│   ├── 📁 styles
│   │   └── ...
│   │
│   ├── game.ts
│   └── main.ts
│
├── index.html
├── game.html
├── game_over_screen.html
├── package.json
└── README.md
```

---

## 📚 What I Learned

During the development of this project, I gained practical experience with:

* TypeScript and static typing
* DOM manipulation
* Event listeners and event delegation
* Dynamic HTML generation
* Array manipulation and randomization
* Game state management
* LocalStorage
* TypeScript interfaces and type definitions
* SCSS architecture
* Responsive web design
* Managing complex game logic

---

## 👨‍💻 Developer

**Thorben Ansgar Schreyer**

Frontend Developer

---

## 📄 License

This project was created for educational and portfolio purposes.
