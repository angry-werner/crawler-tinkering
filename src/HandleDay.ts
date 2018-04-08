import Client = WebdriverIO.Client;
import RawResult = WebdriverIO.RawResult;

import {Entry} from "./Entry";
import {SessionFactory} from "./SessionFactory";

export class HandleDay {
    private static HIT_LIST = 'div.list > div.item';
    private sessionFactory: SessionFactory = new SessionFactory();

    public async handleDay(url: string): Promise<Entry[]> {
        const results: Entry[] = [];
        const session: Client<RawResult<null>> & RawResult<null> = this.sessionFactory.createSession(url);
        const elements: any = await session.elements(HandleDay.HIT_LIST);
        for (const element of elements.value) {
            const dateString: string = await session.elementIdElement(element.ELEMENT, 'span.time').getText();
            const linkElement: any = await session.elementIdElement(element.ELEMENT, 'a.news-links');
            const href = await session.elementIdAttribute(linkElement.value.ELEMENT, 'href');
            results.push(new Entry(dateString, href.value));
        }
        session.end();
        return results;
    }
}
