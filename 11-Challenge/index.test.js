const getCompleted = require('./index');

describe('Challenge 11', () => {
    test('Test #01 - expect return type string', () => {
       expect(typeof  getCompleted('01:00:00', '03:00:00')).toBe('string');
    });

    test('Test #02 - getCompleted(\'01:00:00\', \'03:00:00\') 1/3', () => {
        expect(getCompleted('01:00:00', '03:00:00')).toBe('1/3');
    });

    test('Test #03 - getCompleted(\'02:00:00\', \'04:00:00\') 1/2', () => {
        expect(getCompleted('02:00:00', '04:00:00')).toBe('1/2');
    });

    test('Test #04 - getCompleted(\'01:00:00\', \'01:00:00\') 1/1', () => {
        expect(getCompleted('01:00:00', '01:00:00')).toBe('1/1');
    });

    test('Test #05 - getCompleted(\'00:10:00\', \'01:00:00\') 1/6', () => {
        expect(getCompleted('00:10:00', '01:00:00')).toBe('1/6');
    });

    test('Test #06 - getCompleted(\'01:10:10\', \'03:30:30\') 1/3', () => {
        expect(getCompleted('01:10:10', '03:30:30')).toBe('1/3');
    });

    test('Test #07 - getCompleted(\'02:20:20\', \'03:30:30\') 2/3', () => {
        expect(getCompleted('02:20:20', '03:30:30')).toBe('2/3');
    });

    test('Test #08 - getCompleted(\'03:30:30\', \'05:50:50\') 3/5', () => {
        expect(getCompleted('03:30:30', '05:50:50')).toBe('3/5');
    });
});