import {Entry} from './Entry';
import {KeywordMappings} from "./KeywordMappings";
import {ReadFromFile} from './ReadFromFile';

export class Transformer {

    public static main() {
        const originalData: Entry[] = this.loadEntries();
        const keys: Set<string> = this.getKeys(originalData);
        const keywordMappings: KeywordMappings = new KeywordMappings();
        for (const key of keys.values()) {
            if (!keywordMappings.getKeywordMappings().has(key)) {
                console.log(key);
            }
        }
        console.log('Anzahl keys: ' + keys.size);
    }

    private static loadEntries(): Entry[] {
        return new ReadFromFile('/home/kow/git/crawler-tinkering/src/data.json').read();
    }

    private static getKeys(originalData: Entry[]): Set<string> {
        const keys: Set<string> = new Set<string>();
        for (const entry of originalData) {
            for (const key of entry.getInfos().keys()) {
                keys.add(key);
            }
        }
        return keys;
    }
}

Transformer.main();
