import { module, test } from 'qunit';
import { setupRenderingTest } from 'prueba/tests/helpers';
import { render } from '@ember/test-helpers';
import { hbs } from 'ember-cli-htmlbars';

module('Integration | Component | login/login', function (hooks) {
  setupRenderingTest(hooks);

  test('it renders', async function (assert) {
    // Set any properties with this.set('myProperty', 'value');
    // Handle any actions with this.set('myAction', function(val) { ... });

    await render(hbs`<Login::Login />`);

    assert.dom().hasText('');

    // Template block usage:
    await render(hbs`
      <Login::Login>
        template block text
      </Login::Login>
    `);

    assert.dom().hasText('template block text');
  });
});
