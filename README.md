derby-parsing
===============

This module contains the HTML-based template parsing for [DerbyJS](https://github.com/derbyjs/derby). Given a template source string, it produces parsed `Template`s and `Expression`s as defined in [derbyjs/derby-templates](https://github.com/derbyjs/derby-templates).

## Installation

```shell
npm install derby-parsing
```

## Example usage

```javascript
var derbyParsing = require('derby-parsing');

var templateSource = '<title>{{_page.title}}</title>';
var template = derbyParsing.createTemplate(templateSource);
```

## Tests

```shell
npm test
```
