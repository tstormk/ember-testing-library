# @testing-library/ember

Simple and complete Ember DOM testing utilities that encourage good testing practices.

<small>Please note that this version of the library is not backed by DOM Testing Library like the versions for React, Vue, etc. are. I made this addon because there is no official Ember version yet.</small>

## Installation

This addon can be installed via Ember CLI as such:

```
ember install @testing-library/ember
```

## Usage

The recommended way to use this addon is through the `setupScreen` function. This function automatically injects the DOM Testing Library screen into every test in a given module.

```ts
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { TestContext as BaseTestContext } from 'ember-test-helpers';

import { setupScreen, ScreenTestContext } from '@testing-library/ember';

interface TestContext extends BaseTestContext, ScreenTestContext {}

module('Integration | Component |  Example', function (hooks) {
  setupRenderingTest(hooks);
  setupScreen(hooks);

  test('it works as expected', async function (this: TestContext, assert) {
    await render(hbs`<MyComponent />`);

    assert.dom(this.screen.getByLabelText('My text field') as HTMLElement).exists();
  });
});
```

Once this function has been called, `this.screen` can be accessed in every `test` in your module. The functions available in `this.screen` are one to one with the queries available in the standard edition of DOM Testing Library. For a thorough list of these, you can see the [official docs](https://testing-library.com/docs/queries/about).

### Usage without injection

If you don't want to inject `this.screen` into every test in your module, you can use the `getScreen` to access the DOM Testing Library screen as a one off whenever you desire.

```ts
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { getScreen } from '@testing-library/ember';

module('Integration | Component |  Example', function (hooks) {
  setupRenderingTest(hooks);

  test('it works as expected', async function (assert) {
    await render(hbs`<MyComponent />`);

    const screen = getScreen();

    assert.dom(screen.getByLabelText('My text field') as HTMLElement).exists();
  });
});
```

## Notes

This addon does not expose an equivalent to `fireEvent` like the other framework versions of DOM Testing Library do. Instead, it is recommended you use [`@ember/test-helpers`](https://github.com/emberjs/ember-test-helpers) in conjunction with this addon for event triggering purposes.

```ts
import { render, click } from '@ember/test-helpers';
import { setupRenderingTest } from 'ember-qunit';
import { module, test } from 'qunit';

import { TestContext as BaseTestContext } from 'ember-test-helpers';

import hbs from 'htmlbars-inline-precompile';
import sinon, { SinonSpy } from 'sinon';

import { setupScreen, ScreenTestContext } from '@testing-library/ember';

interface TestContext extends BaseTestContext, ScreenTestContext {
  spy: SinonSpy;
}

module('Integration | Component |  Example', function (hooks) {
  setupRenderingTest(hooks);
  setupScreen(hooks);

  hooks.beforeEach(function (this: TestContext) {
    this.spy = sinon.spy();
  });

  test('it works as expected', async function (this: TestContext, assert) {
    await render(hbs`<MyComponent @onClick={{this.spy}} />`);

    await click(this.screen.getByText('My button') as HTMLElement);

    assert.ok(this.spy.calledOnce);
  });
});
```
