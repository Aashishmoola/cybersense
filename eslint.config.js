import js from "@eslint/js";
import globals from "globals";
import reactHooks from "eslint-plugin-react-hooks";
import reactRefresh from "eslint-plugin-react-refresh";
import tseslint from "typescript-eslint";
import react from 'eslint-plugin-react';
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default tseslint.config(
    eslintConfigPrettier,
  { ignores: ["dist"] },
  {
    extends: [js.configs.recommended, ...tseslint.configs.strictTypeChecked],
    settings: { react: { version: '18.3' } },
    files: ["**/*.{ts,tsx}"],
    languageOptions: {
    parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
        },
      ecmaVersion: 2020,
      globals: globals.browser,
    },
    plugins: {
      "react-hooks": reactHooks,
      "react-refresh": reactRefresh,
      react,
    },
    rules: {
      ...reactHooks.configs.recommended.rules,
      "react-refresh/only-export-components": [
        "warn",
        { allowConstantExport: true },
      ],
      ...react.configs.recommended.rules,
      ...react.configs['jsx-runtime'].rules,      
    },
  }
);

