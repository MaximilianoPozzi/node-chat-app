var expect = require('expect');

var {generateMessage, generateLocationMessage} = require('./message');

describe('generateMessage', () => {
    it('should generate correct message object', () => {
        var from = 'Richard';
        var text = 'Hello everyone';
        var res = generateMessage(from, text);

        expect(res.from).toBe(from);
        expect(res.text).toBe(text);
        expect(res.createdAt).toBeA('number');
    });
});

describe('generateLocationMessage', () => {
    it('should generate correct location object', () => {
        var from = 'Richard';
        var latitude = 1;
        var longitude = 5;

        var res = generateLocationMessage(from, latitude, longitude);

        expect(res.from).toBe(from);
        expect(res.url).toBe(`https://www.google.com/maps?q=${latitude},${longitude}`);
        expect(res.createdAt).toBeA('number');
    });
});