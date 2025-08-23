import { defineConfig } from "eslint/config";
import globals from "globals";
import jsdoc from "eslint-plugin-jsdoc";
import eslintjs from "@eslint/js";
import stylistic from '@stylistic/eslint-plugin';

const { node, commonjs, jest } = globals;

export default defineConfig([
    eslintjs.configs.recommended,
    {
        linterOptions: {
            reportUnusedInlineConfigs: `error`,
        },
        plugins: { jsdoc: jsdoc, '@stylistic': stylistic },
        rules: {
            "getter-return": `error`,
            "no-mixed-spaces-and-tabs": `off`,
            "no-irregular-whitespace": `off`,
            "no-case-declarations": `off`,
            "no-fallthrough": `off`,
            "no-empty": `off`,
            "no-unused-vars": `off`,
            "linebreak-style": `off`,
            '@stylistic/indent': [`error`, 4],
            '@stylistic/quotes': [`error`, `backtick`],
            '@stylistic/semi': [`error`, `always`],
            '@stylistic/multiline-comment-style': [`error`, `starred-block`]
        },
    },
    {
        files: [`**/*.cjs`],
        languageOptions: {
            ecmaVersion: `latest`,
            sourceType: `commonjs`,
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: true,
                    impliedStrict: true
                },
            },
            globals: {
                ...node,
                ...commonjs,
                ...jest
            },
        },
    },
    {
        files: [`**/*.mjs`, `**/*.js`],
        languageOptions: {
            ecmaVersion: `latest`,
            sourceType: `module`,
            parserOptions: {
                ecmaFeatures: {
                    globalReturn: true,
                    impliedStrict: true
                },
            },
            globals: {
                ...node,
                ...jest,
            },
        },
    },
]);