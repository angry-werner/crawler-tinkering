import webdriver = require('webdriverio');

import Client = WebdriverIO.Client;
import RawResult = WebdriverIO.RawResult;

export class SessionFactory {
    public createSession(url: string): Client<RawResult<null>> & RawResult<null> {
        return webdriver.remote({
            desiredCapabilities: {
                browserName: 'chrome'
            }
        }).init().url(url);
    }
}
