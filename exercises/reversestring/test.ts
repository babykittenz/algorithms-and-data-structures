import { reverse } from './index';

test('Reverse function exists', () => {
  expect(reverse).toBeDefined();
});

test('Reverse reverses a string', () => {
    expect(reverse('abcd')).toEqual('dcba');
});

test('Reverse handles leading spaces', () => {
    expect(reverse('  abcd')).toEqual('dcba  ');
});
