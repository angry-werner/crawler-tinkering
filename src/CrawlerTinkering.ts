import {Moment} from 'moment';

import {DumpToFile} from "./DumpToFile";
import {Entry} from './Entry';
import {HandleDay} from './HandleDay';
import {HandleEntry} from "./HandleEntry";
import {SimpleHandleDay} from "./SimpleHandleDay";
import {SimpleHandleEntry} from "./SimpleHandleEntry";

export class CrawlerTinkering {
    public static readonly FILE_NAME = 'results.json';

    private static format(dayOrMonth: string): string {
        return dayOrMonth.length === 1 ? '0' + dayOrMonth : dayOrMonth;
    }

    private readonly results: Entry[] = [];

    public constructor(private readonly handleDay: HandleDay = new SimpleHandleDay(),
                       private readonly handleEntry: HandleEntry = new SimpleHandleEntry(),
                       private readonly dumpToFile: DumpToFile = new DumpToFile(CrawlerTinkering.FILE_NAME)) {}

    public async doCrawl(startDate: Moment, daysBack: number) {
        console.log('Start crawling!');
        try {
            for (let i: number = 1; i <= daysBack; i++) {
                const queryDay = 'https://www.blickamabend.ch/suche/?q=single tages ' +
                    CrawlerTinkering.format(startDate.date().toString()) +
                    CrawlerTinkering.format((startDate.month() + 1).toString());
                console.log('Query: ' + queryDay);
                const entryRefsForDay: any[] = await this.handleDay.handleDay(queryDay);
                for (const entry of entryRefsForDay) {
                    await this.handleEntry.handleEntry(entry);
                }
                this.dumpToFile.write(entryRefsForDay);
                Array.prototype.push.apply(this.results, entryRefsForDay);
                startDate.subtract(1, 'd');
            }
        } finally {
            console.log('End crawling! Found ' + this.results.length + ' singles.');
        }
    }

    public getResults(): Entry[] {
        return this.results;
    }
}
