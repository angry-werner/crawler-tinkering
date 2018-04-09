import {Entry} from './Entry';

export interface HandleDay {
    handleDay(url: string): Promise<Entry[]>;
}
