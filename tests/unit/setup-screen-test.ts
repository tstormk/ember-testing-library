import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { TestContext as BaseTestContext } from 'ember-test-helpers';
import { setupScreen, ScreenTestContext } from 'ember-testing-library';

import assertValidScreen from '../helpers/assert-valid-screen';

interface TestContext extends BaseTestContext, ScreenTestContext {}

module('Unit | setupScreen', function (hooks) {
  setupTest(hooks);
  setupScreen(hooks);

  test('it injects an object containing DOM Testing Library queries for the Ember testing container into the current TestContext', function (this: TestContext, assert) {
    assertValidScreen(assert, this.screen);
  });
});
