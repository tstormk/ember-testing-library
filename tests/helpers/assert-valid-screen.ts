import { BoundFunctions, Queries, queries } from '@testing-library/dom';

export default function assertValidScreen(
  assert: Assert,
  screen: BoundFunctions<Queries>
): void {
  assert.ok(screen);

  for (const queryKey of Object.keys(queries)) {
    assert.ok(
      Object.hasOwnProperty.call(screen, queryKey),
      `Screen has DOM Testing Library query "${queryKey}"`
    );
  }
}
