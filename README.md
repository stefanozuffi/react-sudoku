# Sudoku Game

A modern, interactive Sudoku game built with React and Vite, featuring multiple difficulty levels and an intuitive user interface.

## Features

- **Multiple Difficulty Levels**: Choose from Easy, Medium, and Difficult puzzles
- **Interactive Gameplay**: Click on cells and use keyboard input (1-9, Backspace/Delete) to fill in numbers
- **Solution Verification**: Check your progress and get instant feedback on mistakes
- **Responsive Design**: Optimized for desktop and mobile devices
- **Visual Feedback**: Color-coded cells distinguish initial numbers from user input
- **Smart Validation**: Real-time error detection across rows, columns, and 3x3 boxes

## Getting Started

### Prerequisites

- Node.js (v20.19.0 or higher)
- npm (v8.0.0 or higher)

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/react-sudoku.git
cd react-sudoku
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

4. Open your browser and navigate to the local development URL (typically `http://localhost:5173`)

## Available Scripts

- `npm run dev` - Start the development server
- `npm run build` - Build the project for production
- `npm run lint` - Run ESLint to check code quality
- `npm run preview` - Preview the production build locally

## How to Play

1. **Select a Puzzle**: Use the "Choose difficulty" dropdown to select from Easy, Medium, or Difficult puzzles
2. **Fill in Numbers**: Click on any empty cell and type a number (1-9) to fill it in
3. **Delete Numbers**: Select a cell and press Backspace or Delete to remove a number
4. **Check Solution**: Click "Check for Mistakes" to validate your progress
5. **Restart**: Use the restart button in the pop-up to start over with the same puzzle

## Project Structure

```
react-sudoku/
├── src/
│   ├── assets/
│   │   ├── components/     # React components
│   │   ├── data/          # Puzzle data and examples
│   │   └── utils/         # Utility functions
│   ├── img/               # SVG icons
│   ├── App.jsx            # Main application component
│   ├── index.css          # Global styles
│   └── main.jsx           # Application entry point
├── public/                # Static assets
├── index.html            # HTML template
└── vite.config.js        # Vite configuration
```

## Technologies Used

- **React 19** - UI library
- **Vite 7** - Build tool and development server
- **Bootstrap 5** - CSS framework for responsive design
- **ESLint** - Code quality and consistency

## Upcoming Features

- 🎲 **Puzzle Generator**: Automatic generation of new Sudoku puzzles with varying difficulty levels
- ⏱️ **Timer**: Track how long it takes to solve each puzzle
- 💾 **Save Progress**: Save and resume incomplete puzzles
- 🏆 **Statistics**: Track your solving times and success rates
- 🎨 **Themes**: Customizable color schemes

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

## License

This project is open source and available under the MIT License.

## Acknowledgments

- Built with React and Vite for optimal performance
- Styled with Bootstrap for responsive design
- Puzzle validation logic ensures fair gameplay

---

**Note**: The puzzle generator feature is currently under development and will be implemented in a future release.
