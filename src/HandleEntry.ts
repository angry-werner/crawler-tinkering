import webdriver = require('webdriverio');

import Element = WebdriverIO.Element;
import RawResult = WebdriverIO.RawResult;

import {Entry} from "./Entry";
import {Info} from "./Info";
import {StringCleaning} from "./StringCleaning";

export class HandleEntry {
    private stringCleaning: StringCleaning = new StringCleaning();

    public async handleEntry(entry: Entry): Promise<Entry> {
        const session: WebdriverIO.Client<any> = webdriver.remote({
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }).init().url(entry.href);
        const title: string = await session.element('#page > .article > .articleHeader > h1').getText();
        entry.addInfo(new Info('title', this.stringCleaning.clean(title)));
        const infoElements: RawResult<Element[]> =
            await session.elements('#page > .article > .article-entry > .article_text > .vspace > p');
        for (const element of infoElements.value) {
            const text: RawResult<string> = await session.elementIdText(element.ELEMENT);
            entry.addInfo(this.createInfo(text.value));
        }
        entry.printToConsole();
        session.close();
        return entry;
    }

    private createInfo(text: string): Info {
        const original = this.stringCleaning.clean(text);
        const index: number = original.indexOf(':');
        if (index === -1) {
            return new Info('Unbekannter Eintrag', text);
        } else {
            return new Info(text.substr(0, index), text.substring(index + 1));
        }
    }
}
