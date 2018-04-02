import webdriver = require('webdriverio');

export class Index {
    public static main() {
        console.log('Start crawling!');
        Index.doIt().then((result) => {
            if (result !== undefined) {
                console.log('Result from top promise: ' + result);
            }
        }).catch((error) => {
            console.log('Error from top promise: ' + error);
        });
        console.log('End crawling!');
    }

    private static async doIt() {
        const browser: WebdriverIO.Client<void> = webdriver.remote({
            desiredCapabilities: {
                browserName: 'chrome'
            }
        });
        try {
            const session: WebdriverIO.Client<any> =
                browser.init().url('https://www.blickamabend.ch/suche/?q=single 2903');
            const elements: any = await session.elements('div.list > div.item');
            console.log('Elemente: ' + elements.value.length);
            for (const element of elements.value) {
                const time: string = await session.elementIdElement(element.ELEMENT, 'span.time').getText();
                const linkElement: any = await session.elementIdElement(element.ELEMENT, 'a.news-links');
                const href: any = await session.elementIdAttribute(linkElement.value.ELEMENT, 'href');
                console.log('Time: ' + time + ', href: ' + href.value);
            }
        } finally {
            if (browser != null) {
                // browser.close();
            }
        }
    }
}

Index.main();
