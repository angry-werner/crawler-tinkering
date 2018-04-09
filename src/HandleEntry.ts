import {Entry} from './Entry';

export interface HandleEntry {
    handleEntry(entry: Entry): Promise<Entry>;
}
