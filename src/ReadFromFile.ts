import {Entry} from './Entry';

import * as Fs from 'fs';
import {SerialisableEntry} from './SerialisableEntry';

export class ReadFromFile {

    public constructor(readonly fileName: string) {}

    public read(): Entry[] {
        let fd;
        try {
            fd = Fs.openSync(this.fileName, 'r');
            const data: Buffer = Fs.readFileSync(this.fileName);
            const sEntries: SerialisableEntry[] = JSON.parse(data.toString());
            const entries: Entry[] = [];
            for (const entry of sEntries) {
                entries.push(SerialisableEntry.to(entry.uuid, entry.date, entry.href, entry.infos));
            }
            return entries;
        } finally {
            if (fd !== undefined) {
                Fs.closeSync(fd);
            }
        }
    }
}
