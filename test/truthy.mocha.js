var expect = require('expect.js');
var parser = require('../index');

describe('template truthy', function() {

  it('gets standard truthy value for if block', function() {
    expect(parser.createExpression('if false').truthy()).equal(false);
    expect(parser.createExpression('if undefined').truthy()).equal(false);
    expect(parser.createExpression('if null').truthy()).equal(false);
    expect(parser.createExpression('if ""').truthy()).equal(false);
    expect(parser.createExpression('if []').truthy()).equal(false);

    expect(parser.createExpression('if true').truthy()).equal(true);
    expect(parser.createExpression('if 0').truthy()).equal(true);
    expect(parser.createExpression('if 1').truthy()).equal(true);
    expect(parser.createExpression('if "Hi"').truthy()).equal(true);
    expect(parser.createExpression('if [0]').truthy()).equal(true);
    expect(parser.createExpression('if {}').truthy()).equal(true);
    expect(parser.createExpression('if {foo: 0}').truthy()).equal(true);
  });

  it('gets inverse truthy value for unless block', function() {
    expect(parser.createExpression('unless false').truthy()).equal(true);
    expect(parser.createExpression('unless undefined').truthy()).equal(true);
    expect(parser.createExpression('unless null').truthy()).equal(true);
    expect(parser.createExpression('unless ""').truthy()).equal(true);
    expect(parser.createExpression('unless []').truthy()).equal(true);

    expect(parser.createExpression('unless true').truthy()).equal(false);
    expect(parser.createExpression('unless 0').truthy()).equal(false);
    expect(parser.createExpression('unless 1').truthy()).equal(false);
    expect(parser.createExpression('unless "Hi"').truthy()).equal(false);
    expect(parser.createExpression('unless [0]').truthy()).equal(false);
    expect(parser.createExpression('unless {}').truthy()).equal(false);
    expect(parser.createExpression('unless {foo: 0}').truthy()).equal(false);
  });

  it('gets always truthy value for else block', function() {
    parser.createExpression('else')
    expect(parser.createExpression('else').truthy()).equal(true);
  });

});
