import { getRootElement } from '@ember/test-helpers';

import { BoundFunctions, Queries, within } from '@testing-library/dom';

/**
 * Returns the DOM Testing Library screen for the Ember testing container.
 *
 * The `getScreen` function provides a way to access the DOM Testing Library
 * screen without having to inject the screen into an entire testing module
 * by using the {@link setupScreen} function.
 *
 * @returns the DOM Testing Library screen for the Ember testing container
 */
export default function getScreen(): BoundFunctions<Queries> {
  const rootElement = getRootElement() as HTMLElement;

  return within(rootElement);
}
