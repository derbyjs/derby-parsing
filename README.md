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



This module depends on and extends `derby-templates` by implementing the `View._parse()` (and thus `View.parse()`) function of
`derby-templates`. It parses the html template source code and creates a template object (hierarchy?).

`derby-parsing` uses a modified `esprima` to parse its templates, called `esprima-derby`.

## API

Additionally, `derby-parsing` exports the following functions.


### createTemplate(source, view)

Parses `source` (the full html template source) and returns a `templates.Template` object.


### createStringTemplate


### createExpression(source)

Parses `source` and creates an Expression hierarchy. `source` is the whole expression inside of `{{ }}` in a Derby template.
Example:
```
each _page.letters as #letter, #i
```
Everything but the paths in such expressions is recorded as an ExpressionMeta object.


The path (`_page.letters` in this case) is then parsed using `createPathExpression()`, see the next section.



### createPathExpression(source)

Parses `source` with `esprima` into a node tree and then reduces the node tree to an expression tree using
`derby-templates`.


An example:

```
createPathExpression("_page.colors[_page.key].name")
```

reduces to

```
new expressions.BracketsExpression(
    new expressions.PathExpression(['_page', 'colors']),
    new expressions.PathExpression(['_page', 'key']),
    ['name'])
```

which then returns

```
BracketsExpression {
    before: PathExpression { segments: [ '_page', 'colors' ], meta: undefined },
    inside: PathExpression { segments: [ '_page', 'key' ], meta: undefined },
    afterSegments: [ 'name' ],
    meta: undefined
}
```



### markup
