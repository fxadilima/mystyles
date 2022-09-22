import { module, test } from 'qunit';
import { setupTest } from 'mystyles/tests/helpers';

module('Unit | Route | sejarah', function (hooks) {
  setupTest(hooks);

  test('it exists', function (assert) {
    let route = this.owner.lookup('route:sejarah');
    assert.ok(route);
  });
});
