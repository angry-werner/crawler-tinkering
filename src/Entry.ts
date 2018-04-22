import {Info} from './Info';

export class Entry {
    public readonly infos: Map<string, string> = new Map<string, string>();

    public constructor(readonly date: string, readonly href: string) {}

    public addInfo(info: Info) {
        this.infos.set(info.key, info.value);
    }

    public addInfos(infos: Map<string, string>) {
        infos.forEach((value, key, map) => {
            this.infos.set(key, value);
        });
    }

    public getInfos(): Map<string, string> {
        return this.infos;
    }

    public printToConsole() {
        console.log('Datum: ' + this.date);
        console.log('URL: ' + this.href);
        this.getInfos().forEach((value, key, map) => {
            console.log(key + ': ' + value);
        });
    }
}
