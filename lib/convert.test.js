const convert = require('./convert');

test('convert cotacao 4 to quantidade 4', () => {
    expect(convert.conversao(4,4)).toBe(16);
});

test('convert cotacao 0 to quantidade 4', () => {
    expect(convert.conversao(0,4)).toBe(0);
});

test('convert cotacao 5 to quantidade 0', () => {
    expect(convert.conversao(5,0)).toBe(0);
});

test('entrada invalida', () => {
    expect(convert.conversao('string','string')).toBe(NaN);
})

test('entrada em branco', () => {
    expect(convert.conversao(' ',' ')).toBe(0);
})

test('toMoney converts to float', () => {
    expect(convert.toMoney(2)).toBe('2.00');
})

test('toMoney converts string', () => {
    expect(convert.toMoney('2')).toBe('2.00');
})

