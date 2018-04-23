import * as Fs from 'fs';
import * as URL from 'url';

import {Entry} from "./Entry";

export class FetchPictureAndSave {
    private static readonly FILE_PROTOCOL = 'file:';
    private static readonly HTTP_PROTOCOL = 'http:';

    public constructor(readonly directory: string) {
    }

    public fetchPicture(entry: Entry) {
        try {
            const urlString: string | undefined = entry.getInfos().get('picture-href');
            if (urlString === undefined) {
                return;
            } else {
                const url: URL = new URL.URL(urlString);
                if (url.protocol === FetchPictureAndSave.FILE_PROTOCOL
                    || url.protocol === FetchPictureAndSave.HTTP_PROTOCOL) {
                    try {
                        Fs.mkdirSync('json');
                    } catch (error) {
                        if (error.code !== 'EEXIST') {
                            throw error;
                        } else {
                            if (url.protocol === FetchPictureAndSave.FILE_PROTOCOL) {
                                //
                            } else if (url.protocol === FetchPictureAndSave.HTTP_PROTOCOL) {
                                //
                            }
                        }
                    }
                } else {
                    return;
                }
            }
        } catch (error) {
            //
        }
    }
}
