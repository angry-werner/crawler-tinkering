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
                    browserName: 'firefox'
                }
            })
            .init()
            .url('http://www.google.com')
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
