import {CSVLine} from "./CSVLine";
import {DumpLinesToFile} from "./DumpLinesToFile";
import {Entry} from './Entry';
import {KeywordMappings} from "./KeywordMappings";
import {NormaliseEntry} from "./NormaliseEntry";
import {ReadFromFile} from './ReadFromFile';

export class Transformer {

    public static main() {
        const originalData: Entry[] = this.loadEntries();
        const normalisedData: Entry[] = [];
        for (const entry of originalData) {
            normalisedData.push(Transformer.normaliser.normalise(entry));
        }
        const lines: string[] = [];
        lines.push(Transformer.csv.writeHeader());
        for (const entry of normalisedData) {
            lines.push(Transformer.csv.write(entry));
        }
        Transformer.dumper.write(lines);
    }

    private static normaliser: NormaliseEntry = new NormaliseEntry(new KeywordMappings());
    private static csv: CSVLine = new CSVLine();
    private static dumper: DumpLinesToFile = new DumpLinesToFile();

    private static loadEntries(): Entry[] {
        return new ReadFromFile('/home/kow/git/crawler-tinkering/src/data.json').read();
    }
}

Transformer.main();
