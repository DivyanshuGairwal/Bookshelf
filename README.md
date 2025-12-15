# Bookshelf - Book Discovery Web App

A clean, modern React application for discovering books using the Google Books API. Built with React (Vite), React Router, and standard CSS. This project demonstrates responsive design, API integration, and standard React patterns.

## Features

- **Search Books**: Search for books by title or author using the Google Books API.
- **Book Details**: View detailed information about a book, including description, page count, and publication date.
- **Favorites**: Save books to your personal favorites list (persisted via LocalStorage).
- **Responsive Design**: Fully responsive UI that works seamlessly on mobile, tablet, and desktop.
- **Dark Theme**: Modern dark-themed user interface.
- **UI/UX Polish**:
  - **Skeleton Loading**: Smooth loading states with pulse animations.
  - **Animations**: Subtle fade-in transitions for smoother navigation.
  - **Glassmorphism**: Modern navbar with blurred background.

## Tech Stack

- **Frontend Library**: React (Vite)
- **Routing**: React Router DOM (v6)
- **Styling**: Vanilla CSS (CSS Modules & Variables)
- **API**: Google Books API
- **State Management**: React Hooks (useState, useEffect)

## Getting Started

Follow these instructions to get the project up and running on your local machine.

### Prerequisites

- Node.js (v14 or higher)
- npm (v6 or higher)

### Installation

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd bookshelf
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

### Running the App

Start the development server:
```bash
npm run dev
```

Open your browser and navigate to `http://localhost:5173`.

### Building for Production

To create a production build:
```bash
npm run build
```

## Folder Structure

```
src/
├── components/     # Reusable UI components (Navbar, BookCard, SearchBar)
├── pages/          # Page components (Home, BookDetails, Favorites)
├── services/       # API integration logic
├── App.jsx         # Main application component with routing
└── index.css       # Global styles and variables
```

## Contributing

1. Fork the project
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

Distributed under the MIT License. See `LICENSE` for more information.
