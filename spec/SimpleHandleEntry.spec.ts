import Jasmine = require('jasmine');
import {SimpleHandleEntry} from '../src/SimpleHandleEntry';
import {Entry} from "../src/Entry";

describe('Handle a single entry', () => {
    it('Happy case', async () => {
        const entry: Entry = new Entry('foo-bar','13.02.2017', 'file:///home/kow/git/crawler-tinkering/spec/resources/PartnersucheDetail.html');
        const result: Entry = await new SimpleHandleEntry().handleEntry(entry);
        expect(result.getInfos().get('Titel')).toEqual('Tamara sucht einen Mann, der mich überrascht und berührt');
        expect(result.getInfos().size).toBe(16);
    });
});
