import {SimpleHandleEntry} from '../src/SimpleHandleEntry';
import {Entry} from "../src/Entry";

let originalTimeout: number;

beforeEach(() => {
    originalTimeout = jasmine.DEFAULT_TIMEOUT_INTERVAL;
    jasmine.DEFAULT_TIMEOUT_INTERVAL = 30000;
});

afterEach(() => {
    jasmine.DEFAULT_TIMEOUT_INTERVAL = originalTimeout;
});

describe('Handle a single entry', () => {
    it('Happy case', async () => {
        const entry: Entry = new Entry('foo-bar','13.02.2017',
            'file:///home/kow/git/crawler-tinkering/spec/resources/PartnersucheDetail.html');
        const result: Entry = await new SimpleHandleEntry().handleEntry(entry);
        expect('Tamara sucht einen Mann, der mich überrascht und berührt').toEqual('' + result.getInfos().get('Titel'));
        expect(result.getInfos().size).toBe(16);
    });

    it('Happy case', async () => {
        const entry: Entry = new Entry('foo-bar','13.02.2017',
            'file:///home/kow/git/crawler-tinkering/spec/resources/PartnersucheDetail-anders.html');
        const result: Entry = await new SimpleHandleEntry().handleEntry(entry);
        expect('Enzo sucht eine selbstsichere Frau mit Persönlichkeit.').toEqual('' + result.getInfos().get('Titel'));
        expect(result.getInfos().size).toBe(15);
    });
});
