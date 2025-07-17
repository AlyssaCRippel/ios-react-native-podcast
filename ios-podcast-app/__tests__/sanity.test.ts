import { describe, it, expect } from '@jest/globals';

describe('Sanity Test', () => {
  it('should run a basic test', () => {
    expect(1 + 1).toBe(2);
  });

  it('should handle strings', () => {
    expect('React Native').toContain('Native');
  });
});
