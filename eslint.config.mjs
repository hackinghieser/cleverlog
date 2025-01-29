// @ts-check
import globals from "globals";
import eslint from "@eslint/js";
import typescriptEslint from "typescript-eslint";
import eslintPluginVue from "eslint-plugin-vue";
import esLintConfigPrettier from "eslint-config-prettier";

export default typescriptEslint.config(
  { ignores: ["*.d.ts", "**/coverage", "**/dist", "src-tauri/"] },
  {
    extends: [
      eslint.configs.recommended,
      ...typescriptEslint.configs.recommended,
      ...eslintPluginVue.configs["flat/recommended"],
    ],
    files: ["**/*.{ts,vue}"],
    languageOptions: {
      ecmaVersion: "latest",
      sourceType: "module",
      globals: globals.browser,
      parserOptions: {
        parser: typescriptEslint.parser,
      },
    },
    linterOptions: {},

    rules: {
      // your rules
      "vue/attribute-hyphenation": "error",
    },
  },
  esLintConfigPrettier,
);
