const expect = require('expect');
const {isRealString} = require('./validation');

describe('isRealString', () => {
    it('should reject non-string values', () => {
        var invalidValue = 65;
        var res = isRealString(invalidValue);
        expect(res).toBe(false);
    });

    it('should reject string with only spaces', () => {
        var invalidValue = '   ';
        var res = isRealString(invalidValue);
        expect(res).toBe(false);
    });

    it('should allow string with non-space characters', () => {
        var value = 'Hello World';
        var res = isRealString(value);
        expect(res).toBe(true);
    });
});