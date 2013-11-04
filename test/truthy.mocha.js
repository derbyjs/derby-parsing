var expect = require('expect.js');
var derbyTemplates = require('../index');

describe('template truthy', function() {

  it('gets standard truthy value for if block', function() {
    expect(derbyTemplates.createExpression('if false').truthy()).equal(false);
    expect(derbyTemplates.createExpression('if undefined').truthy()).equal(false);
    expect(derbyTemplates.createExpression('if null').truthy()).equal(false);
    expect(derbyTemplates.createExpression('if ""').truthy()).equal(false);
    expect(derbyTemplates.createExpression('if []').truthy()).equal(false);

    expect(derbyTemplates.createExpression('if true').truthy()).equal(true);
    expect(derbyTemplates.createExpression('if 0').truthy()).equal(true);
    expect(derbyTemplates.createExpression('if 1').truthy()).equal(true);
    expect(derbyTemplates.createExpression('if "Hi"').truthy()).equal(true);
    expect(derbyTemplates.createExpression('if [0]').truthy()).equal(true);
    expect(derbyTemplates.createExpression('if {}').truthy()).equal(true);
    expect(derbyTemplates.createExpression('if {foo: 0}').truthy()).equal(true);
  });

  it('gets inverse truthy value for unless block', function() {
    expect(derbyTemplates.createExpression('unless false').truthy()).equal(true);
    expect(derbyTemplates.createExpression('unless undefined').truthy()).equal(true);
    expect(derbyTemplates.createExpression('unless null').truthy()).equal(true);
    expect(derbyTemplates.createExpression('unless ""').truthy()).equal(true);
    expect(derbyTemplates.createExpression('unless []').truthy()).equal(true);

    expect(derbyTemplates.createExpression('unless true').truthy()).equal(false);
    expect(derbyTemplates.createExpression('unless 0').truthy()).equal(false);
    expect(derbyTemplates.createExpression('unless 1').truthy()).equal(false);
    expect(derbyTemplates.createExpression('unless "Hi"').truthy()).equal(false);
    expect(derbyTemplates.createExpression('unless [0]').truthy()).equal(false);
    expect(derbyTemplates.createExpression('unless {}').truthy()).equal(false);
    expect(derbyTemplates.createExpression('unless {foo: 0}').truthy()).equal(false);
  });

  it('gets always truthy value for else block', function() {
    derbyTemplates.createExpression('else')
    expect(derbyTemplates.createExpression('else').truthy()).equal(true);
  });

});
