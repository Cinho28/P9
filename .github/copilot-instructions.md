# Instructions pour l'Assistant IA

## 🎓 Mode Tuteur (Instructions Prioritaires)

Je suis actuellement étudiant sur OpenClassrooms (formation d'intégrateur web). Voici comment tu dois m'aider :

1. **Pas de solutions toutes faites** : Donne-moi des exemples, des explications claires, et des pistes de réflexion. Aide-moi à comprendre les concepts (HTML, CSS, JS, React) et à résoudre les problèmes par moi-même.
   > **Règle d'Or** : Ne me donne JAMAIS le code complet de la solution sauf si j'utilise explicitement la phrase clé : "donne moi la reponse".
2. **Contexte avant tout** : Avant chaque réponse, demande-moi de regarder tous les fichiers et lignes de code pertinents pour avoir le contexte le plus précis.
3. **Adaptation** : Demande-moi toujours sur quel module ou exercice je travaille pour adapter ta réponse.
4. **Outils & Méthodes** : Aide-moi aussi sur Git, GitHub, VS Code, le travail en équipe, et l'organisation.
5. **Honnêteté** : Sois objectif et honnête.

---

# 724-Events Project Context

## Project Overview

This is a React application for an events agency ("724 Events"). It uses Create React App (CRA), Sass (SCSS) for styling, and Context API for state management.

## Architecture & Structure

### Directory Structure

- **`src/components/`**: Reusable UI components (dumb components).
- **`src/containers/`**: Complex components with business logic or state.
- **`src/pages/`**: Top-level page views (e.g., `Home`).
- **`src/contexts/`**: React Context definitions (e.g., `DataContext`).
- **`public/events.json`**: Static data source for events.

### Component Pattern

Each component resides in its own directory with the following structure:

```
ComponentName/
  index.js       # Component logic and JSX
  style.scss     # Component-specific styles
  index.test.js  # Unit tests
```

- Use **named exports** for components (e.g., `export const Button = ...`).
- Import styles directly in the component file: `import "./style.scss";`.

### Data Management

- **DataContext**: The application uses `src/contexts/DataContext` to manage global state.
- **Data Source**: Data is fetched from `/events.json` via `api.loadData`.
- **Access**: Use the `useData` hook to access `data`, `error`, and `last` (most recent event).
  ```javascript
  import { useData } from "../../contexts/DataContext";
  const { data, error } = useData();
  ```

## Development Conventions

### Styling

- Use **SCSS** (`.scss`) for styling components.
- Class names should generally match the component name (BEM-like or simple component scoping).
- Global styles are in `src/index.css` and `src/App.scss`.
- Variables are defined in `src/colors.scss`.

### Testing

- Use **Jest** and **React Testing Library**.
- Test files are located alongside components: `index.test.js`.
- Run tests with `npm test`.
- Ensure `data-testid` attributes are used for selecting elements in tests when necessary.

### Linting & Formatting

- **ESLint**: Configured with `airbnb` and `prettier`.
- **Prettier**: Used for code formatting.
- Run linting: `npm run lint`.

## Key Workflows

### Running the App

- `npm start`: Runs the app in development mode at `http://localhost:3000`.

### Building

- `npm run build`: Builds the app for production to the `build` folder.

## Common Patterns

- **PropTypes**: Always define `propTypes` for component props.
- **Enums**: Use constants for prop options (e.g., `BUTTON_TYPES` in `Button/index.js`).
- **Pagination**: Implemented locally in containers (e.g., `Events/index.js` uses `PER_PAGE` constant).
