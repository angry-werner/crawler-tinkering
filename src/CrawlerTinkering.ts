import {Moment} from 'moment';
import webdriver = require('webdriverio');
import {StringCleaning} from './StringCleaning';
import Element = WebdriverIO.Element;
import RawResult = WebdriverIO.RawResult;

import {Entry} from './Entry';
import {HandleDay} from './HandleDay';
import {HandleEntry} from "./HandleEntry";
import {SimpleHandleDay} from "./SimpleHandleDay";
import {SimpleHandleEntry} from "./SimpleHandleEntry";

export class CrawlerTinkering {
    private readonly results: Entry[] = [];
    private readonly handleDay: HandleDay;
    private readonly handleEntry: HandleEntry;

    public constructor(handleDay: HandleDay = new SimpleHandleDay(),
                       handleEntry: HandleEntry = new SimpleHandleEntry()) {
         this.handleDay = handleDay;
         this.handleEntry = handleEntry;
    }

    public async doCrawl(startDate: Moment, daysBack: number) {
        console.log('Start crawling!');
        try {
            for (let i: number = 1; i <= daysBack; i++) {
                const queryDay = 'https://www.blickamabend.ch/suche/?q=single tages '
                    + this.format(startDate.date().toString()) + this.format((startDate.month() + 1).toString());
                console.log('Query: ' + queryDay);
                const result: any[] = await this.handleDay.handleDay(queryDay);
                for (const entry of result) {
                    await this.handleEntry.handleEntry(entry);
                }
                Array.prototype.push.apply(this.results, result);
                startDate.subtract(1, 'd');
            }
        } finally {
            console.log('End crawling! Found ' + this.results.length + ' singles.');
        }
    }

    public getResults(): Entry[] {
        return this.results;
    }

    private format(dayOrMonth: string): string {
        return dayOrMonth.length === 1 ? '0' + dayOrMonth : dayOrMonth;
    }
}
