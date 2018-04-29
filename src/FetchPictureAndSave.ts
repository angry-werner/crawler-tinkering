import * as Fs from 'fs';
import * as http from 'http';
import * as URL from 'url';

import {Entry} from './Entry';

export class FetchPictureAndSave {
    private static readonly FILE_PROTOCOL = 'file:';
    private static readonly HTTPS_PROTOCOL = 'https:';
    private static readonly PICTURES_DIR = 'pictures';

    public constructor(readonly directory: string) {
    }

    public fetchAndSave(entry: Entry) {
        try {
            const urlString: string | undefined = entry.getInfos().get('picture-href');
            if (urlString === undefined) {
                return;
            } else {
                const url: URL = new URL.URL(urlString);
                if (url.protocol === FetchPictureAndSave.FILE_PROTOCOL
                    || url.protocol === FetchPictureAndSave.HTTPS_PROTOCOL) {
                    try {
                        Fs.mkdirSync('pictures');
                    } catch (error) {
                        if (error.code !== 'EEXIST') {
                            throw error;
                        }
                    }
                    if (url.protocol === FetchPictureAndSave.FILE_PROTOCOL) {
                        Fs.createReadStream(url.pathname).pipe(
                            Fs.createWriteStream('./' + FetchPictureAndSave.PICTURES_DIR + '/' + entry.uuid + '.jpg'));
                    } else if (url.protocol === FetchPictureAndSave.HTTPS_PROTOCOL) {
                        console.log('Picture URL: ' + url.toString());
                        http.get(url.toString(), (response) => {
                            console.log('Got picture: ' + './'
                                + FetchPictureAndSave.PICTURES_DIR + '/' + entry.uuid + '.jpg');
                            response.pipe(Fs.createWriteStream(
                                './' + FetchPictureAndSave.PICTURES_DIR + '/' + entry.uuid + '.jpg'));
                        });
                    }
                }
            }
        } catch (error) {
            console.log('Picture download error: ' + JSON.stringify(error));
        }
    }
}
