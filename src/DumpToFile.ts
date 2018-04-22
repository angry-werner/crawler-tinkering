import {Entry} from "./Entry";

import * as Fs from 'fs';
import {SerialisableEntry} from "./SerialisableEntry";

export class DumpToFile {
    private firstWritten: boolean = false;

    public constructor(private readonly fileName: string = 'results.json') {}

    public write(entries: Entry[]) {
        let fd;
        try {
            fd = Fs.openSync(this.fileName, 'a');
            for (const entry of entries) {
                Fs.appendFileSync(fd, this.writeComma() + JSON.stringify(SerialisableEntry.from(entry)), 'utf8');
            }
        } catch (err) {
            /* Handle the error */
        } finally {
            if (fd !== undefined) {
                Fs.closeSync(fd);
            }
        }
    }

    private writeComma(): string {
        if (this.firstWritten === false) {
            this.firstWritten = true;
            return '';
        } else {
            return ',';
        }
    }
}
