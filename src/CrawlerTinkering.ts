import {Moment} from 'moment';
import webdriver = require('webdriverio');
import {StringCleaning} from './StringCleaning';
import Element = WebdriverIO.Element;
import RawResult = WebdriverIO.RawResult;

export class CrawlerTinkering {
    private results: any[] = [];

    public async doCrawl(startDate: Moment, daysBack: number) {
        console.log('Start crawling!');
        try {
            for (let i: number = 1; i <= daysBack; i++) {
                const queryDay = 'https://www.blickamabend.ch/suche/?q=single tages '
                    + this.format(startDate.date().toString()) + this.format((startDate.month() + 1).toString());
                console.log('Query: ' + queryDay);
                const result: any[] = await this.handleDay(queryDay);
                for (const entry of result) {
                    // handle entry
                }
                Array.prototype.push.apply(this.results, result);
                startDate.subtract(1, 'd');
            }
        } finally {
            //
            console.log('End crawling! Found ' + this.results.length + ' singles.');
        }
    }

    private async handleDay(url: string): Promise<any> {
        const results: any[] = [];
        const session: WebdriverIO.Client<any> = webdriver.remote({
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }).init().url(url);
        const elements: any = await session.elements('div.list > div.item');
        console.log('Elemente: ' + elements.value.length);
        for (const element of elements.value) {
            const dateString: string = await session.elementIdElement(element.ELEMENT, 'span.time').getText();
            const linkElement: any = await session.elementIdElement(element.ELEMENT, 'a.news-links');
            const href = await session.elementIdAttribute(linkElement.value.ELEMENT, 'href');
            const entry: any = {
                date: dateString,
                href: href.value
            };
            results.push(entry);
        }
        session.close();
        return results;
    }

    private async handleEntry(entry: any): Promise<any> {
        const session: WebdriverIO.Client<any> = webdriver.remote({
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }).init().url(entry.href);
        const title: string = await session.element('#page > .article > .articleHeader > h1').getText();
        const infos = {
            title: new StringCleaning().clean(title)
        };
        entry.infos = infos;
        const infoElements: RawResult<Element[]> =
            await session.elements('#page > .article. > .article-entry > .article_text > .vspace > p');
        for (const element of infoElements.value) {
            console.log();
        }
        session.close();
        return entry;
    }

    private format(dayOrMonth: string): string {
        return dayOrMonth.length === 1 ? '0' + dayOrMonth : dayOrMonth;
    }
}
