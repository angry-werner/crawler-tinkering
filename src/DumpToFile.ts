import {Entry} from "./Entry";

import * as Fs from 'fs';

export class DumpToFile {
    private firstWritten: boolean = false;

    public constructor(private readonly fileName: string = 'results.json') {}

    public write(entries: Entry[]) {
        let fd;
        try {
            fd = Fs.openSync(this.fileName, 'a');
            for (const entry of entries) {
                Fs.appendFileSync(fd, this.writeComma() + JSON.stringify(entry), 'utf8');
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
