import Jasmine = require('jasmine');
import {HandleEntry} from '../src/HandleEntry';
import {Entry} from "../src/Entry";

describe('Handle a single entry', () => {
    it('Happy case', async () => {
        const entry: Entry = new Entry('1234', 'file:///home/kow/git/crawler-tinkering/spec/support/PartnersucheDetail.html');
        const result = await new HandleEntry().handleEntry(entry);
        expect(result.getInfos().get('Titel')).toEqual('Tamara sucht einen Mann, der mich überrascht und berührt');
    });
});
