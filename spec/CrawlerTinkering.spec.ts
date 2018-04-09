import {CrawlerTinkering} from "../src/CrawlerTinkering";
import * as moment from "moment";
import {Moment} from "moment";
import {HandleDay} from "../src/HandleDay";
import {Entry} from "../src/Entry";

class DummyHandleDay implements HandleDay {
    public async handleDay(url: string): Promise<Entry[]> {
        return [new Entry('foo', 'bar')];
    }
}

describe('Handle a full crawl', () => {
    it('Handle a happy case for one day', async () => {
        const crawlerTinkering: CrawlerTinkering = new CrawlerTinkering(new DummyHandleDay());
        await crawlerTinkering.doCrawl(moment(), 1);
        expect(crawlerTinkering.getResults().length).toBe(1);
    });
});
