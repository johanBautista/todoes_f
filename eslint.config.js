import js from "@eslint/js"
import ts from "@typescript-eslint/eslint-plugin"
import tsParser from "@typescript-eslint/parser"
import vueParser from "vue-eslint-parser"
import vue from "eslint-plugin-vue"
import prettier from "eslint-config-prettier"
import prettierPlugin from "eslint-plugin-prettier" // Importa el plugin de Prettier

export default [
  js.configs.recommended, // Configuración recomendada de ESLint para JavaScript
  {
    // Configuración para TypeScript y Vue
    files: ["**/*.ts", "**/*.vue"], // Archivos que ESLint debe analizar
    languageOptions: {
      parser: vueParser, // Usa el parser de TypeScript
      parserOptions: {
        parser: tsParser, // Parser de TypeScript
        ecmaVersion: 2020, // Versión de ECMAScript
        sourceType: "module", // Módulos de ES
      },
    },
    plugins: {
      "@typescript-eslint": ts, // Plugin de TypeScript
      vue, // Plugin de Vue
      prettier: prettierPlugin, // Plugin de Prettier
    },
    rules: {
      ...ts.configs.recommended.rules, // Reglas recomendadas de TypeScript
      ...vue.configs["vue3-recommended"].rules, // Reglas recomendadas de Vue 3
      "prettier/prettier": ["error", {}, { usePrettierrc: true }], // Integración con Prettier
    },
    //fix: true, // Habilita el auto-fix
  },
  prettier, // Configuración de Prettier
  {
    // Ignorar archivos y directorios
    ignores: ["node_modules/", "dist/", "public/"],
  },
]
