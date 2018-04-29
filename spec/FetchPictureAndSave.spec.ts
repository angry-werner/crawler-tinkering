import {Entry} from "../src/Entry";
import {FetchPictureAndSave} from "../src/FetchPictureAndSave";
import {Info} from "../src/Info";
import {SimpleHandleEntry} from "../src/SimpleHandleEntry";

describe('Test the picture download capability', () => {
    const testee: FetchPictureAndSave = new FetchPictureAndSave('test-pictures');

    xit('Happy case local', () => {
        const entry: Entry = new Entry('foo', '01.01.2018', 'bar');
        entry.addInfo(new Info(SimpleHandleEntry.PICTURE_HREF_TAG,
            'file:///home/kow/git/crawler-tinkering/spec/resources/COM-Single-0604-tamara.jpg'));
        testee.fetchAndSave(entry);
    });

    xit('Happy case remote', () => {
        const entry: Entry = new Entry('foo', '01.01.2018', 'bar');
        entry.addInfo(new Info(SimpleHandleEntry.PICTURE_HREF_TAG,
            'https://f1.blick.ch/img/incoming/origs7643682/0348231214-w644-h960-ohq/COM-Single-2411-SabrinaMuri-RubigenBYReneKaelin.jpg'));
        testee.fetchAndSave(entry);
    });
});
