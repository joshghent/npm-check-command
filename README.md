# Check Command
> A small node module to check if npm commands are present

## Installation
```
$ npm install npm-check-command --save
```

## Usage

### Javascript
```javascript
var checkCommand = require('npm-check-command');

checkCommand('build', 'package.json'); // => true or false
```

### Typescript
```typescript
import { checkCommand } from 'npm-check-command';

checkCommand('build', 'package.json'); // => true or false
```

## Test
```sh
$ npm test
```
