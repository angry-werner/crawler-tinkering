import * as Fs from 'fs';
import {DumpToFile} from "../src/DumpToFile";
import {Entry} from "../src/Entry";
import {Info} from '../src/Info';
import {SerialisableEntry} from "../src/SerialisableEntry";

describe('Check if we can serialise stuff to the file system.', () => {
    const fileName: string = 'testFile.json';
    let testee: DumpToFile;

    beforeEach(() => {
        try {
            Fs.unlinkSync(fileName);
        } catch (error) {
            console.log('Trouble deleting file: ' + JSON.stringify(error));
        }
        testee = new DumpToFile(fileName);
    });

    afterEach(() => {
        try {
            // Fs.unlinkSync(fileName);
        } catch (error) {
            console.log('Trouble deleting file: ' + JSON.stringify(error));
        }

    });

    it('Write everything at once', () => {
        // Arrange
        const entry1: Entry = new Entry('01.01.2018', 'http://www.example1.org');
        const entry2: Entry = new Entry('02.02.2018', 'http://www.example2.org');
        const entries: Entry[] = [entry1, entry2];
        // Act
        testee.write(entries);
        // Assert
        const readEntries: Entry[] = parseNonArray();
        expect(readEntries.length).toBe(2);
    });

    it('Write one after the other', () => {
        // Arrange
        const entry1: Entry = new Entry('01.01.2018', 'http://www.example1.org');
        const entry2: Entry = new Entry('02.02.2018', 'http://www.example2.org');
        entry2.addInfo(new Info('foo', 'bar'));
        entry2.addInfo(new Info('ugo', 'gaga'));
        // Act
        testee.write([entry1]);
        // Assert
        const readFirstEntries: any[] = parseNonArray();
        expect(readFirstEntries.length).toBe(1);
        // Act
        testee.write([entry2]);
        // Assert
        const readSecondEntries: any[] = parseNonArray();
        expect(readSecondEntries.length).toBe(2);
        expect(SerialisableEntry
            .to(readSecondEntries[1].date, readSecondEntries[1].href, readSecondEntries[1].infos)).toEqual(entry2);
        expect(SerialisableEntry
            .to(readSecondEntries[0].date, readSecondEntries[0].href, readSecondEntries[0].infos)).toEqual(entry1);
    });

    function parseNonArray(): Entry[] {
        return JSON.parse('[' + Fs.readFileSync(fileName).toString('UTF-8') + ']');
    }
});
