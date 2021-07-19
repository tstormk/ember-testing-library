import { TestContext } from 'ember-test-helpers';

import { BoundFunctions, Queries } from '@testing-library/dom';

import getScreen from './get-screen';

/**
 * An interface used to extend the default `TestContext` with a `screen`
 * property that holds the DOM Testing Library screen when the associated
 * module has invoked the {@link setupScreen} function.
 *
 * ```my-test.ts
 * import { setupTest } from 'ember-qunit';
 * import { module, test } from 'qunit';
 *
 * import { TestContext as BaseTestContext } from 'ember-test-helpers';
 *
 * import { setupScreen, ScreenTestContext } from '@testing-library/ember';
 *
 * interface TestContext extends BaseTestContext, ScreenTestContext {}
 *
 * module('Example', function (hooks) {
 *   setupTest(hooks);
 *   setupScreen(hooks);
 *
 *   test('it works as expected', async function (this: TestContext, assert) {
 *     assert.dom(this.screen.getByLabelText('My text field') as HTMLElement).exists();
 *   });
 * });
 * ```
 */
export interface ScreenTestContext {
  screen: BoundFunctions<Queries>;
}

/**
 * Sets up the DOM Testing Library screen.
 *
 * The `setupScreen` method is used to automatically inject the DOM Testing
 * Library screen into every test in a given module.
 *
 * Once invoked, all subsequent `hooks.beforeEach` and test invocations will
 * have access to the DOM Testing Library screen through the `this.screen`
 * property.
 *
 * Alternatively, if you do not need to inject the DOM Testing Library screen
 * into every test in your module, you can use the {@link getScreen} function
 * for one-off access to the screen.
 */
export default function setupScreen(hooks: NestedHooks): void {
  hooks.beforeEach(function (this: TestContext & ScreenTestContext) {
    this.screen = getScreen();
  });
}
