import * as moment from 'moment';
import webdriver = require('webdriverio');
import {StringCleaning} from "./StringCleaning";
import Element = WebdriverIO.Element;
import RawResult = WebdriverIO.RawResult;

export class Index {
    public static results: any[] = [];
    public static main() {
        Index.doCrawl().then((result) => {
            if (result !== undefined) {
                console.log('Result from top promise: ' + result);
            }
        }).catch((error) => {
            console.log('Error from top promise: ' + error);
        });
    }

    private static async doCrawl() {
        console.log('Start crawling!');
        try {
            const date = moment();
            date.subtract(61, 'd');
            for (let i: number = 1; i <= 1; i++) {
                const queryDay = Index.format(date.date().toString()) + Index.format((date.month() + 1).toString());
                console.log('Query: ' + queryDay);
                const result: any[] = await Index.handleDay(queryDay);
                for (const entry of result) {
                    const advertisement: any = await Index.handleEntry(entry);
                    console.log(JSON.stringify(entry));
                }
                Array.prototype.push.apply(Index.results, result);
                date.subtract(1, 'd');
            }
        } finally {
            //
            console.log('End crawling! Found ' + Index.results.length + ' singles.');
        }
    }

    private static format(dayOrMonth: string): string {
        return dayOrMonth.length === 1 ? '0' + dayOrMonth : dayOrMonth;
    }

    private static async handleDay(date: string): Promise<any> {
        const results: any[] = [];
        const session: WebdriverIO.Client<any> = webdriver.remote({
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }).init().url('https://www.blickamabend.ch/suche/?q=single tages ' + date);
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

    private static async handleEntry(entry: any): Promise<any> {
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
}

Index.main();
