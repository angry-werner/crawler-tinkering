import Jasmine = require('jasmine');
import {Entry} from "../src/Entry";
import {HandleDay} from '../src/HandleDay';

describe('Handle a day result set', () => {
    it('Happy case', async () => {
        const result: Entry[] = await new HandleDay().handleDay('file:///home/kow/git/crawler-tinkering/spec/support/PartnersucheTreffer.html');
        expect(result.length).toBe(4);
        expect(result[0].href).toEqual('file:///home/kow/git/crawler-tinkering/spec/support/PartnersucheDetail.html');
    });
});
