import {CrawlerTinkering} from "../src/CrawlerTinkering";
import * as Fs from "fs";
import * as moment from "moment";
import {Moment} from "moment";
import {HandleDay} from "../src/HandleDay";
import {Entry} from "../src/Entry";

class DummyHandleDay implements HandleDay {
    public async handleDay(url: string): Promise<Entry[]> {
        return [new Entry('13.02.2017', 'file:///home/kow/git/crawler-tinkering/spec/resources/PartnersucheDetail.html')];
    }
}

beforeEach(() => {
    try {
        Fs.unlinkSync(CrawlerTinkering.FILE_NAME);
    } catch (error) {
        console.log('Trouble deleting file: ' + JSON.stringify(error));
    }

});

describe('Handle a full crawl', () => {
    it('Handle a happy case for one day', async () => {
        const crawlerTinkering: CrawlerTinkering = new CrawlerTinkering(new DummyHandleDay());
        await crawlerTinkering.doCrawl(moment(), 1);
        expect(crawlerTinkering.getResults().length).toBe(1);
        expect(crawlerTinkering.getResults()[0].getInfos().size).toBe(16);

    });
    it('Handle a happy case for two days', async () => {
        const crawlerTinkering: CrawlerTinkering = new CrawlerTinkering(new DummyHandleDay());
        await crawlerTinkering.doCrawl(moment(), 2);
        expect(crawlerTinkering.getResults().length).toBe(2);
        expect(crawlerTinkering.getResults()[0].getInfos().size).toBe(16);
        expect(crawlerTinkering.getResults()[1].getInfos().size).toBe(16);
    });
});
