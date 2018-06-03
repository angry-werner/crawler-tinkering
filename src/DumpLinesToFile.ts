import * as Fs from 'fs';

export class DumpLinesToFile {

    public constructor(readonly fileName: string = 'data.csv') {}

    public write(data: string[]) {
        let fd: number | undefined;
        try {
            fd = Fs.openSync(this.fileName, 'a');
            for (const line of data) {
                Fs.appendFileSync(fd, line, 'utf-8');
            }
        } catch (err) {
            /* Handle the error */
        } finally {
            if (fd !== undefined) {
                Fs.closeSync(fd);
            }
        }
    }
}
