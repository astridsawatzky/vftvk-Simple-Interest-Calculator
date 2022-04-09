const calculateInterest = require('./script');


test('1000 bucks, 10 year, 10 percent', () => {
    expect(calculateInterest(1000, 10,10)).toBe(1000);
});
test('4800 bucks, 5 year, 15.25 percent', () => {
    expect(calculateInterest(4800, 5,15.25)).toBe(3660);
});
