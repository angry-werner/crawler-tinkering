import {Entry} from "../src/Entry";
import {CSVWriteLine} from "../src/CSVWriteLine";
import {Info} from "../src/Info";
import {Fragen} from "../src/Fragen";

describe('Write lines of CSV', () => {
    it('Write line without infos, match result', () => {
        const entry: Entry = new Entry('foo', 'bar', 'baz');
        expect(new CSVWriteLine().write(entry)).toBe('|foo|bar|baz|||||||||||||||||||||||||||||||||||||||||||||||||||\n\r');
    });
    it('Write line without infos, match result', () => {
        const entry: Entry = new Entry('foo', 'bar', 'baz');
        entry.addInfo(new Info(Fragen.MUSIK, 'Led Zeppelin'));
        expect(new CSVWriteLine().write(entry)).toBe('|foo|bar|baz|||||||||||||Led Zeppelin||||||||||||||||||||||||||||||||||||||\n\r');
    });
});
