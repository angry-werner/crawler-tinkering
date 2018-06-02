import {Entry} from "./Entry";
import {KeywordMappings} from "./KeywordMappings";

export class NormaliseEntry {
    constructor(readonly keywordMappings: KeywordMappings) {}

    public normalise(entry: Entry): Entry {
        const normalisedEntry: Entry = new Entry(entry.uuid, entry.date, entry.href);
        normalisedEntry.addInfos(this.normaliseInfos(entry.getInfos()));
        return normalisedEntry;
    }

    private normaliseInfos(infos: Map<string, string>): Map<string, string> {
        const normalisedInfos: Map<string, string> = new Map<string, string>();
        infos.forEach((value, key) => {
            const mappedKey: string | undefined = this.keywordMappings.getKeywordMappings().get(key);
            if (mappedKey === undefined) {
                console.log('Found unmappable key: ' + key);
            } else {
                normalisedInfos.set(mappedKey, value);
            }
        });
        return normalisedInfos;
    }
}
