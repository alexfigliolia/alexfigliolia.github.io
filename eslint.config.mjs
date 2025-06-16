import { globalIgnores } from "eslint/config";
import importPlugin from "eslint-plugin-import";
import jsxA11y from "eslint-plugin-jsx-a11y";
import eslintPluginPrettierRecommended from "eslint-plugin-prettier/recommended";
import reactPlugin from "eslint-plugin-react";
import reactHooks from "eslint-plugin-react-hooks";
import simpleImportSort from "eslint-plugin-simple-import-sort";
import unusedImports from "eslint-plugin-unused-imports";
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
  reactPlugin.configs.flat.recommended,
  reactPlugin.configs.flat["jsx-runtime"],
  reactHooks.configs["recommended-latest"],
  eslintPluginPrettierRecommended,
  {
    languageOptions: {
      ...reactPlugin.configs.flat.recommended.languageOptions,
      parserOptions: {
        parser: tsParser,
        projectService: true,
        tsconfigRootDir: import.meta.dirname,
      },
    },
    plugins: {
      "import-plugin": importPlugin,
      "@typescript-eslint": tsPlugin,
      "jsx-a11y": jsxA11y,
      "simple-import-sort": simpleImportSort,
      "@react-three": ReactThree,
      "unused-imports": unusedImports,
    },
    settings: {
      "import/resolver": { typescript: { alwaysTryTypes: true } },
      "import/external-module-folders": [".yarn"],
      react: { version: "19.1" },
    },
    rules: {
      "no-undef": "off",
      "prettier/prettier": "error",
      "@typescript-eslint/ban-ts-comment": 0,
      "@typescript-eslint/no-explicit-any": 0,
      "@typescript-eslint/no-extraneous-class": 0,
      "@typescript-eslint/no-unsafe-member-access": 0,
      "@typescript-eslint/no-unsafe-assignment": 0,
      "@typescript-eslint/restrict-template-expressions": 0,
      "@typescript-eslint/no-unsafe-call": 0,
      "@typescript-eslint/no-unnecessary-condition": 0,
      "@typescript-eslint/no-empty-function": 0,
      "@typescript-eslint/no-non-null-assertion": 0,
      "@typescript-eslint/no-unnecessary-type-parameters": 0,
      "@typescript-eslint/no-unused-vars": [
        "error",
        {
          args: "all",
          varsIgnorePattern: "^_",
          destructuredArrayIgnorePattern: "^_",
          argsIgnorePattern: "^_",
        },
      ],
      "simple-import-sort/exports": "error",
      "simple-import-sort/imports": [
        "error",
        {
          groups: [["^node:", "^[a-z]", "^@?\\w", "^", "^\\.", "^\\u0000"]],
        },
      ],
      "react/no-unknown-property": 0,
      "unused-imports/no-unused-imports": "error",
    },
  },
);
