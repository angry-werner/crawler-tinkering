import * as UUID from 'uuid';

import Client = WebdriverIO.Client;
import RawResult = WebdriverIO.RawResult;

import {Entry} from './Entry';
import {HandleDay} from './HandleDay';
import {SessionFactory} from './SessionFactory';

export class SimpleHandleDay implements HandleDay {
    private static readonly HIT_LIST = 'div.list > div.item';
    private readonly sessionFactory: SessionFactory = new SessionFactory();

    public async handleDay(url: string): Promise<Entry[]> {
        const results: Entry[] = [];
        const session: Client<RawResult<null>> & RawResult<null> = this.sessionFactory.createSession(url);
        const elements: any = await session.elements(SimpleHandleDay.HIT_LIST);
        for (const element of elements.value) {
            const dateString: string = await session.elementIdElement(element.ELEMENT, 'span.time').getText();
            const linkElement: any = await session.elementIdElement(element.ELEMENT, 'a.news-links');
            const href = await session.elementIdAttribute(linkElement.value.ELEMENT, 'href');
            results.push(new Entry(UUID.v4(), dateString, href.value));
        }
        session.end();
        return results;
    }
}
