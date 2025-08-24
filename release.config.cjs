module.exports = {
    branches: ['main', { name: 'next', prerelease: true }],
    repositoryUrl: 'https://github.com/annieverse/annieverseutil.git',
    plugins: [
        '@semantic-release/github',
        [
            '@semantic-release/commit-analyzer',
            {
                releaseRules: [
                    { type: 'feat', release: 'minor' },
                    { type: 'fix', release: 'patch' },
                    { type: 'perf', release: 'patch' },
                    { type: 'BREAKING CHANGE', release: 'major' },
                ],
            },
        ],
        '@semantic-release/release-notes-generator',
        [
            "@semantic-release/changelog",
            {
                "changelogFile": "docs/CHANGELOG.md"
            }
        ],
        [
            '@semantic-release/npm',
            {
                npmPublish: true,
            },
        ],
        [
            '@semantic-release/git',
            {
                assets: ['package.json', 'dist', "docs/CHANGELOG.md"],
                message: 'chore(release): ${nextRelease.version} [skip ci]\n\n${nextRelease.notes}',
            },
        ],
    ],
};
