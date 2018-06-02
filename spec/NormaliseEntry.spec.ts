import {Entry} from "../src/Entry";
import {Fragen} from "../src/Fragen";
import {Info} from "../src/Info";
import {KeywordMappings} from "../src/KeywordMappings";
import {NormaliseEntry} from "../src/NormaliseEntry";

describe('Normalise entries', () => {
    it('No info', () => {
        // Arrange
        const testee: NormaliseEntry = new NormaliseEntry(new KeywordMappings());
        const uuid: string = 'foo';
        const date: string = 'bar';
        const href: string = 'baz';
        const entry = new Entry(uuid, date, href);
        // Act
        const normalisedEntry = testee.normalise(entry);
        // Assert
        expect(normalisedEntry.getHref()).toBe(entry.getHref());
        expect(normalisedEntry.getDate()).toBe(entry.getDate());
        expect(normalisedEntry.getUuid()).toBe(entry.getUuid());
    });
    it('Some info', () => {
        // Arrange
        const testee: NormaliseEntry = new NormaliseEntry(new KeywordMappings());
        const uuid: string = 'foo';
        const date: string = 'bar';
        const href: string = 'baz';
        const entry = new Entry(uuid, date, href);
        const info: string = 'info';
        entry.addInfo(new Info('Wichtig inere Beziehig isch', info));
        // Act
        const normalisedEntry = testee.normalise(entry);
        // Assert
        expect(normalisedEntry.getInfos().size).toBe(1);
        expect(normalisedEntry.getInfos().get(Fragen.WICHTIG_IN_BEZIEHUNG)).toBe(info);
    });
    it('Some broken info', () => {
        // Arrange
        const testee: NormaliseEntry = new NormaliseEntry(new KeywordMappings());
        const uuid: string = 'foo';
        const date: string = 'bar';
        const href: string = 'baz';
        const entry = new Entry(uuid, date, href);
        const info: string = 'info';
        entry.addInfo(new Info('crap', info));
        // Act
        const normalisedEntry = testee.normalise(entry);
        // Assert
        expect(normalisedEntry.getInfos().size).toBe(0);
    });
    it('', () => {
        for (const frage in Fragen) {
            console.log(Fragen[frage]);
        }
    });
});
