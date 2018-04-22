import Client = WebdriverIO.Client;
import RawResult = WebdriverIO.RawResult;

import {Entry} from './Entry';
import {HandleEntry} from './HandleEntry';
import {Info} from './Info';
import {SessionFactory} from './SessionFactory';
import {StringCleaning} from './StringCleaning';

export class SimpleHandleEntry implements HandleEntry {
    private static readonly TITLE_SELECTOR: string = '#page > .article > .articleHeader > h1';
    private static readonly PICTURE_SELECTOR: string = '#page > .article > .articleHeader > .picture-mini-caption > a';
    private static readonly ENTRY_SELECTOR: string = '#page > .article > .article-entry > .article_text > .vspace > p';
    private readonly stringCleaning: StringCleaning = new StringCleaning();
    private readonly sessionFactory: SessionFactory = new SessionFactory();

    public async handleEntry(entry: Entry): Promise<Entry> {
        const session: Client<RawResult<null>> & RawResult<null> = this.sessionFactory.createSession(entry.href);
        entry.addInfo(new Info('Titel',
            this.stringCleaning.clean(await session.element(SimpleHandleEntry.TITLE_SELECTOR).getText())));
        const linkElement: any = await session.element(SimpleHandleEntry.PICTURE_SELECTOR);
        const href = await session.elementIdAttribute(linkElement.value.ELEMENT, 'href');
        entry.addInfo(new Info('picture-href', href.value));
        for (const element of (await session.elements(SimpleHandleEntry.ENTRY_SELECTOR)).value) {
            entry.addInfo(this.createInfo((await session.elementIdText(element.ELEMENT)).value));
        }
        entry.printToConsole();
        session.end();
        return entry;
    }

    private createInfo(text: string): Info {
        const original = this.stringCleaning.clean(text);
        const index: number = original.indexOf(':');
        if (index === -1) {
            return new Info('Unbekannter Eintrag', original);
        } else {
            return new Info(text.substr(0, index).trimRight(), text.substring(index + 1).trimLeft());
        }
    }

    private fetchPicture(entry: Entry) {
        try {
            //
        } catch (error) {
            //
        }
    }
}
