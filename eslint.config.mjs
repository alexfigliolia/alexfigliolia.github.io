import { globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import globals from "globals";
import tseslint from "typescript-eslint";
import eslint from "@eslint/js";
import ReactThree from "@react-three/eslint-plugin";
import tsPlugin from "@typescript-eslint/eslint-plugin";
import tsParser from "@typescript-eslint/parser";

export default tseslint.config(
  globalIgnores(["build/**/*", "tsconfig.tsbuildinfo"]),
  eslint.configs.recommended,
  tseslint.configs.stylisticTypeChecked,
  tseslint.configs.strictTypeChecked,
  ReactThree.configs.recommended,
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      parserOptions: {
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
  },
  {
    files: ["**/*.{ts,tsx}"],
    plugins: {
      "@typescript-eslint": tsPlugin,
      import: importPlugin,
    },
    languageOptions: {
      parser: tsParser,
      parserOptions: { projectService: true },
    },
    settings: {
      "import/resolver": { typescript: { alwaysTryTypes: true } },
      "import/external-module-folders": [".yarn"], // ← The magic line
    },
  },
  {
    files: ["**/*.{ts,tsx,mts,cts}"],
    rules: {
      "no-undef": "off",
    },
  },
  {
    files: ["**/*.ts*", "**/*.js"],
    rules: {
      "prettier/prettier": "error",
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-extraneous-class": 0,
      "@typescript-eslint/no-unsafe-member-access": 0,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
    },
  },
  {
    plugins: {
      "simple-import-sort": simpleImportSort,
    },
    rules: {
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^node:", "^[a-z]", "^@?\\w", "^", "^\\.", "^\\u0000"]],
        },
      ],
    },
  },
  {
    files: ["**/*.{js,mjs,cjs,jsx,mjsx,ts,tsx,mtsx}"],
    ...reactPlugin.configs.flat.recommended,
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      globals: {
        ...globals.serviceworker,
        ...globals.browser,
      },
    },
    settings: { react: { version: "18.3" } },
  },
);
