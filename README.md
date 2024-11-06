# React + TypeScript + Vite + shadcn/ui

This template provides a setup to get React working in Vite with HMR, ESLint rules, and shadcn/ui components.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

- ⚡️ Vite with HMR and ESLint
- 🎨 [Tailwind CSS](https://tailwindcss.com/) integration
- 🧩 [shadcn/ui](https://ui.shadcn.com/) components
- 📱 Responsive design patterns
- 🔑 TypeScript strict mode enabled

## Getting Started

### Prerequisites

- Node.js (version 16 or higher)
- npm

### Adding shadcn Components

```bash
# Add new shadcn components using the CLI
npx shadcn-ui@latest add [component-name]

# Example: Adding the button component
npx shadcn-ui@latest add button
```

## Project Structure

```
├── public/
├── src/
│   ├── components/
│   │   └── ui/          # shadcn components
│   ├── lib/
│   ├── App.tsx
│   └── main.tsx
├── .eslintrc.json
├── tailwind.config.js
└── vite.config.ts
```

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## License

MIT

## Acknowledgments

- [shadcn/ui](https://ui.shadcn.com/)
- [Vite](https://vitejs.dev/)
- [Tailwind CSS](https://tailwindcss.com/)