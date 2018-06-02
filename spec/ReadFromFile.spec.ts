import {ReadFromFile} from '../src/ReadFromFile';

describe('Read stuff from file', () => {
    it('Happy case', () => {
        const testee: ReadFromFile = new ReadFromFile('/home/kow/git/crawler-tinkering/data/original-data.json');
        console.log('Number of entries: ' + testee.read().length);
    });
});
