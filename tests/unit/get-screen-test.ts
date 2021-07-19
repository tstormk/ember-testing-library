import { setupTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { getScreen } from '@testing-library/ember';

import assertValidScreen from '../helpers/assert-valid-screen';

module('Unit | getScreen', function (hooks) {
  setupTest(hooks);

  // eslint-disable-next-line qunit/require-expect
  test('it returns an object containing DOM Testing Library queries for the Ember testing container', function (assert) {
    const screen = getScreen();

    assertValidScreen(assert, screen);
  });
});
