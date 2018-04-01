import webdriver = require('webdriverio');

export class Index {
    public static main() {
        console.log('Hello world!');
        Index.doIt();
    }

    private static doIt() {
        webdriver
            .remote({
                desiredCapabilities: {
                    browserName: 'chrome'
                }
            })
            .init()
            .url('https://www.blickamabend.ch')
            .getTitle()
            .then((title) => {
                console.log('Title was: ' + title);
            }).end()
            .catch((err) => {
                console.log(err);
            });
    }
}
Index.main();
