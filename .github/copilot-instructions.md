# Project Overview

This is a discord bot with name of "Annie". Primarily built using discord.js as the core framework.
The bot is a half multi-purpose with commands and features such as server economy (using Artcoins as currency), level ranking system, server shop, custom items, custom server welcomer messages and many others.
It uses PostgreSQL as the primary database to store user and discord server-specific configurations data, as well using Redis for caching static data that rarely updated in PostgreSQL. Also primarily using Redis to handle the cooling-down time for each user after using commands; as a way to rate-limit the usage.

# Commit Message Guidelines

All commit messages must follow the [Conventional Commits](https://www.conventionalcommits.org/) specification:

```
<type>[optional scope]: <description>

[optional body]

[optional footer(s)]
```

**Types:**
- feat: A new feature
- fix: A bug fix
- docs: Documentation only changes
- style: Changes that do not affect the meaning of the code (white-space, formatting, missing semi-colons, etc)
- refactor: A code change that neither fixes a bug nor adds a feature
- perf: A code change that improves performance
- test: Adding missing tests or correcting existing tests
- build: Changes that affect the build system or external dependencies
- ci: Changes to CI configuration files and scripts
- chore: Other changes that don’t modify src or test files
- revert: Reverts a previous commit

**Examples:**
```
feat(commands): add new shop command

fix(utils): handle null values in currency parser

docs(readme): update installation instructions

chore: update dependencies

refactor(events): simplify event handler logic

revert: feat(commands): add new shop command
```

**Additional Guidelines:**
- Use the imperative mood in the description ("add" not "added" or "adds")
- Scope is optional but recommended for clarity (e.g., `feat(commands): ...`)
- Separate body and footer with a blank line
- Footer can include references to issues or breaking changes

**Scope Guidelines:**
- Use command name/filename for changes specific to one command (e.g., `fix(setshop):`, `feat(profile):`)
- Use broader categories for changes across multiple files (e.g., `fix(commands):`, `feat(utils):`)
- Leave scope empty for very broad fixes (e.g., `fix():`, `chore():`)

## Linking Issues or Pull Requests

To reference or close a GitHub issue or pull request, add a footer to your commit message after a blank line. Use keywords like `Closes`, `Fixes`, or `Refs` followed by the issue or PR number (e.g., `#123`). This will automatically link (and, for `Closes`/`Fixes`, close) the referenced issue or PR when the commit is merged.

**Examples:**

```
fix(utils): handle null values in currency parser

This fixes a bug where null values caused a crash in the currency parser.

Closes #123
```

```
feat(commands): add new shop command

Implements the shop feature for server economy.

Refs #456
```

You can list multiple references if needed:

```
fix: resolve multiple bugs

Fixes #12, closes #34, refs #56
```

## package versions
- Node: 24.4.1
- NPM: 11.4.2

## Coding Standards

- Always use semicolons at the end of each statement
- Use backticks ` for string-typed values
- Preferably always use async-await and try-catch block for promises
- Use camelCase for function, variables and method names
- All functions should include JSDoc comments for parameters and return types
- Prefer const/let over var, use const by default

## Error Handling

- Always use try-catch blocks for async operations

## Testing Guidelines

- Write unit tests for all utility functions
- Test both success and error scenarios
- Use descriptive test names that explain the expected behavior
