export class StringCleaning {
    public normaliseSpace(aString: string): string {
        return aString.replace(/\s+/g, ' ');
    }

    public replaceLineBreaks(aString: string): string {
        return aString.replace(/(\r\n|\n|\r|\t)/g, ' ');
    }

    public replaceOtherStuff(aString: string): string {
        return aString.replace(/(\.\.\.|…)/g, ' ');
    }

    public clean(aString: string): string {
        return this.normaliseSpace(this.replaceOtherStuff(this.replaceLineBreaks(aString))).trim();
    }
}
