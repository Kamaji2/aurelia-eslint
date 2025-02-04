import globals from "globals";
import pluginJs from "@eslint/js";
import tseslint from "typescript-eslint";
import stylistic from "@stylistic/eslint-plugin";


/** @type {import('eslint').Linter.Config[]} */
export default [
  { files: ["**/*.{js,mjs,cjs,ts}"] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  {
    ignores: ["*ckeditor*"]
  },
  { plugins: { "@stylistic": stylistic } },
  {
    rules: {
      "@stylistic/indent": ["error", 2],

      "@stylistic/array-bracket-newline": ["error", { multiline: true }],

      "@stylistic/array-element-newline": ["error", "consistent"],
      "@stylistic/dot-location": ["error", "property"],
      "@stylistic/multiline-ternary": ["error", "never"],

      "@stylistic/object-curly-spacing": [
        "error", "always", {
          objectsInObjects: true,
          arraysInObjects: true 
        }
      ],
      "@stylistic/object-curly-newline": [
        "error", {
          multiline: true,
          minProperties: 3,
          consistent: true 
        }
      ],

      "@stylistic/key-spacing": [
        "error", {
          beforeColon: false,
          afterColon: true
        }
      ],

      "@stylistic/comma-spacing": [
        "error", {
          before: false,
          after: true
        }
      ],

      "@stylistic/function-paren-newline": ["error", "never"],
      "@stylistic/func-call-spacing": ["error", "never"],
      "@stylistic/function-call-argument-newline": ["error", "consistent"],
      "@stylistic/space-in-parens": ["error", "never"],
      "@stylistic/comma-dangle": ["error", "never"],
      "@stylistic/arrow-parens": ["error", "always"],
      "@stylistic/brace-style": ["error", "1tbs"],
      "@stylistic/nonblock-statement-body-position": ["error", "beside"],
      "@stylistic/no-tabs": ["error"],
      "@stylistic/newline-per-chained-call": 0,
      "@stylistic/quotes": ["error", "double", { "allowTemplateLiterals": "always" }],
      "no-unused-vars": ["error"]
    }
  }
];