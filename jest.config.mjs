export default {
    // Specify test environment
    testEnvironment: `node`,
    // Optionally, specify test file patterns
    testMatch: [
        `**/__tests__/**/*.js`,
        `**/__tests__/**/*.cjs`,
        `**/__tests__/**/*.mjs`,
    ],
    // Use babel-jest or node for ESM support
    transform: {}
};