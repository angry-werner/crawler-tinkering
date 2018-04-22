import {Entry} from "./Entry";

export class SerialisableEntry {
    public static from(entry: Entry): SerialisableEntry {
        return new SerialisableEntry(entry.uuid, entry.date, entry.href, [...entry.getInfos()]);
    }

    public static to(uuid: string, date: string, href: string, infos: any[]): Entry {
        const converted: Entry = new Entry(uuid, date, href);
        converted.addInfos(new Map(infos));
        return converted;
    }

    private constructor(readonly uuid: string, readonly date: string, readonly href: string, readonly infos: any[]) {}
}
