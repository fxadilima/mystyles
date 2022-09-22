import { module, test } from 'qunit';
import { setupTest } from 'mystyles/tests/helpers';

module('Unit | Route | programming', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:programming');
    assert.ok(route);
  });
});
