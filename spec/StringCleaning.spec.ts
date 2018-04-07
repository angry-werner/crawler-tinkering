import Jasmine = require('jasmine');
import {StringCleaning} from '../src/StringCleaning';

describe('String cleaning', () => {
    it('Already clean string', () => {
        const aString: string = 'foo';
        expect(new StringCleaning().normaliseSpace(aString)).toBe(aString);
    });
    it('String with more than one space', () => {
        expect(new StringCleaning().normaliseSpace('f o  o')).toBe('f o o');
    });
    it('String with line breaks', () => {
        expect(new StringCleaning().replaceLineBreaks('f\no\ro\r\nbar')).toBe('f o o bar');
    });
    it('Clean string with line breaks and multiple spaces', () => {
        expect(new StringCleaning().clean('f \no \ro\r\n b\tar')).toBe('f o o b ar');
    });
    it('Clean string with line breaks and multiple spaces, plus trim front and tail spaces', () => {
        expect(new StringCleaning().clean('  f \no \ro\r\n bar ')).toBe('f o o bar');
    });
    it('Clean from weird stuff', () => {
        expect(new StringCleaning().clean('foo...bar…baz')).toBe('foo bar baz');
    });
});
