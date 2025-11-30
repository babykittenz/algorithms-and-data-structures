const fizzBuzz = require('./index');

let consoleSpy: jest.SpyInstance;

beforeEach(() => {
    consoleSpy = jest.spyOn(console, 'log');
});

afterEach(() => {
    consoleSpy.mockRestore();
});

test('fizzBuzz function is defined', () => {
    expect(fizzBuzz).toBeDefined();
});

test('Calling fizzbuzz with `5` prints out 5 statements', () => {
    fizzBuzz(5);

    expect(consoleSpy.mock.calls.length).toEqual(5);
});

test('Calling fizzbuzz with 15 prints out the correct values', () => {
    fizzBuzz(15);

    expect(consoleSpy.mock.calls[0][0]).toEqual(1);
    expect(consoleSpy.mock.calls[1][0]).toEqual(2);
    expect(consoleSpy.mock.calls[2][0]).toEqual('fizz');
    // ... rest of assertions using consoleSpy
});