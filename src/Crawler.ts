import * as moment from 'moment';
import {Moment} from 'moment';
import {CrawlerTinkering} from './CrawlerTinkering';

export class Crawler {

    public static main() {
        const date: Moment = moment().subtract(76, 'd');

        new CrawlerTinkering().doCrawl(date, 1).then((result) => {
            if (result !== undefined) {
                console.log('Result from top promise: ' + result);
            }
        }).catch((error) => {
            console.log('Error from top promise: ' + error);
        });
    }
}

Crawler.main();
