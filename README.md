# aurelia-eslint
Default ESLint rules configuration to share between Kamaji2 Aurelia applications
## Install
```bash
npm install -D github:Kamaji2/aurelia-eslint
```
## Usage
```Javascript
import stylistic from '@stylistic/eslint-plugin';
import AureliaESLintRules from 'aurelia-eslint';

export default [
  {
    plugins: {
      '@stylistic': stylistic
    },
    rules: {
      'indent': ['error', 2],
      '@stylistic/indent': ['error', 2],
      ...AureliaESLintRules
    }
  }
]
```