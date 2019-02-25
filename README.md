# The Prophets JavaScript Style

## Usage & installation

1. Install with NPM

```
npm install --save-dev eslint-config-prophets
```

> **Note**: Our default export contains all of our ESLint rules. It requires eslint, babel-eslint, eslint-plugin-compat and eslint-plugin-json. It is necessary to also install these peerDependencies. Install these easily with this shortcut (NPM 5+):

```
npx install-peerdeps --dev eslint-config-prophets
```

2. Add `"extends": "prophets"` to your .eslintrc
