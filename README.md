# Check Command
> A small node module to check if npm commands are present

## Installation
```
$ npm install check-command --save
```

## Usage

### Javascript
```javascript
var checkCommand = require('check-command');

checkCommand('build', 'package.json'); // => true or false
```

### Typescript
```typescript
import { checkCommand } from 'check-command';

checkCommand('build', 'package.json'); // => true or false
```

## Test
```sh
$ npm test
```
