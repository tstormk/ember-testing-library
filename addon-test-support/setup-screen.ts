import { TestContext } from 'ember-test-helpers';

import { BoundFunctions, Queries } from '@testing-library/dom';

import getScreen from './get-screen';

/**
 * An interface used to extend the default `TestContext` with a `screen`
 * property that holds the DOM Testing Library screen when the associated
 * module has invoked the {@link setupScreen} function.
 *
 * ```my-test.ts
 * import { TestContext as BaseTestContext } from 'ember-test-helpers';
 *
 * import { ScreenTestContext } from 'ember-testing-library';
 *
 * interface TestContext extends BaseTestContext, ScreenTestContext {}
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
