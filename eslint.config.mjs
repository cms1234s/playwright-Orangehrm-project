import js from "@eslint/js";
import globals from "globals";
import prettierPlugin from "eslint-plugin-prettier";
import { defineConfig } from "eslint/config";
import eslintConfigPrettier from "eslint-config-prettier/flat";

export default defineConfig([
  // 1. Load the recommended JS rules globally
  js.configs.recommended,

  // 2. Your specific project overrides
  {
    files: ["**/*.{js,mjs,cjs}"],
    plugins: {
      prettier: prettierPlugin,
    },
    languageOptions: {
      globals: { ...globals.browser, ...globals.node },
      ecmaVersion: "latest",
      sourceType: "module",
    },
    rules: {
      "prettier/prettier": "error",
      "linebreak-style": ["error", "unix"],
      "no-console": "error",
      "no-alert": "error",
      "no-inline-comments": "error",
      "spaced-comment": [
        "error",
        "always",
        {
          block: { balanced: true },
          line: { markers: ["/"], exceptions: ["-", "+"] },
        },
      ],
    },
  },

  // 3. Prettier config MUST be last to override stylistic rules
  eslintConfigPrettier,
]);
