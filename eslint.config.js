import js from "@eslint/js";
import ts from "typescript-eslint";

import prettier from "eslint-config-prettier";
import svelte from "eslint-plugin-svelte";

import globals from "globals";

export default ts.config(
  js.configs.recommended,
  ...ts.configs.strict,
  ...svelte.configs["flat/recommended"],
  prettier,
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
    },
  },
  {
    files: ["**/*.svelte"],
    languageOptions: {
      parserOptions: {
        parser: ts.parser,
      },
    },
  },
  {
    ignores: ["build/", ".svelte-kit/", "dist/"],
  },
);