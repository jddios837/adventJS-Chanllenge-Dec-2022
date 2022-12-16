const selectSleigh = require('./index');

describe('Challenge 12', () => {
    test('Test #1 return type string', () => {
        expect(typeof selectSleigh(0, [])).toBe('string');
    });

    test('Test #2 return TMChein', () => {
        expect(selectSleigh(1, [
            { name: 'pheralb', consumption: 0.3 },
            { name: 'TMChein', consumption: 0.5 }
        ])).toBe('TMChein');
    });

    test('Test #3 return Pedrosillano', () => {
        expect(selectSleigh(10, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 5 }
        ])).toBe('Pedrosillano');
    });

    test('Test #4 return SamarJaffal', () => {
        expect(selectSleigh(10, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ])).toBe('SamarJaffal');
    });

    test('Test #5 return null', () => {
        expect(selectSleigh(50, [
            { name: 'Pedrosillano', consumption: 1 },
            { name: 'SamarJaffal', consumption: 2 },
            { name: 'marcospage', consumption: 3 }
        ])).toBe(null);
    });
});