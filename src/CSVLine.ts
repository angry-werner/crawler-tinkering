import {Entry} from "./Entry";
import {Fragen} from "./Fragen";

export class CSVLine {

    public write(entry: Entry): string {
        let line: string = '|';
        line = this.writeItem(line, entry.getUuid());
        line = this.writeItem(line, entry.getDate());
        line = this.writeItem(line, entry.getHref());
        for (const frage in Fragen) {
            line = this.writeItem(line, entry.getInfos().get(Fragen[frage]));
        }
        return line + '\n\r';
    }

    public writeHeader(): string {
        let line: string = '|UUID|Datum|URL|';
        for (const frage in Fragen) {
            line = this.writeItem(line, Fragen[frage]);
        }
        return line + '\n\r';
    }

    private writeItem(line: string, item: string | undefined): string {
        return line + ((item === undefined) ? '|' : item + '|');
    }
}
