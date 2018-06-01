export class KeywordMappings {
    private static keywordMappings: Map<string, string> = new Map<string, string>();

    private static init() {
        KeywordMappings.keywordMappings.set('Titel', 'Titel');
        KeywordMappings.keywordMappings.set('Alter', 'Alter');
        KeywordMappings.keywordMappings.set('Wohnort', 'Wohnort');
        KeywordMappings.keywordMappings.set('Grösse', 'Grösse');
        KeywordMappings.keywordMappings.set('Beruf', 'Beruf');
        KeywordMappings.keywordMappings.set('Sternzeichen', 'Sternzeichen');
        KeywordMappings.keywordMappings.set('Kontakt', 'Kontakt');
        KeywordMappings.keywordMappings.set('picture-href', 'picture-href');
        KeywordMappings.initHobby();
        KeywordMappings.initBeruhigung();
        KeywordMappings.initHoeren();
        KeywordMappings.initVerzeihen();
        KeywordMappings.initRegentag();
        KeywordMappings.initWohnOrt();
        KeywordMappings.initReiseZiele();
        KeywordMappings.initFollows();
        KeywordMappings.initNichtLebenOhne();
        KeywordMappings.initBeziehung();
        KeywordMappings.initDate();
        KeywordMappings.initWut();
        KeywordMappings.initZehnJahre();
        KeywordMappings.initMagIchNicht();
        KeywordMappings.initZaubern();
        KeywordMappings.initBereuen();
        KeywordMappings.initAbschaffen();
        KeywordMappings.initFreunde();
        KeywordMappings.initSex();
        KeywordMappings.initErstesMal();
        KeywordMappings.initTraumberuf();
        KeywordMappings.initPersonenEinfluss();
        KeywordMappings.initUnnoetig();
        KeywordMappings.initEinfluss();
        KeywordMappings.initClubs();
        KeywordMappings.initAnmachspruch();
        KeywordMappings.initZiel();
        KeywordMappings.initErleben();
        KeywordMappings.initFreundeSind();
        KeywordMappings.initMotto();
        KeywordMappings.initGlaube();
        KeywordMappings.initVerlieben();
        KeywordMappings.keywordMappings.set('Das macht mich glücklich', 'Das macht mich glücklich');
        KeywordMappings.keywordMappings.set('Mein grösster Traum', 'Mein grösster Traum');
        KeywordMappings.keywordMappings.set('Liebe ist', 'Liebe ist');
        KeywordMappings.keywordMappings.set('Speziell an mir ist', 'Speziell an mir ist');
        KeywordMappings.keywordMappings.set('Mein Tick', 'Mein Tick');
        KeywordMappings.keywordMappings.set('Speziell an mir sind', 'Speziell an mir sind');
        KeywordMappings.keywordMappings.set('Ich werde schwach bei', 'Ich werde schwach bei');
        KeywordMappings.keywordMappings.set('So verführe ich', 'So verführe ich');
        KeywordMappings.keywordMappings.set('So verführt man mich', 'So verführt man mich');
        KeywordMappings.keywordMappings.set('Da werde ich schwach', 'Da werde ich schwach');
        KeywordMappings.keywordMappings.set('Wenn ich zaubern könnte, würde ich', 'Wenn ich zaubern könnte, würde ich');
        KeywordMappings.keywordMappings.set('Das mag ich an mir', 'Das mag ich an mir');
        KeywordMappings.keywordMappings.set('', '');
        KeywordMappings.keywordMappings.set('', '');
        KeywordMappings.keywordMappings.set('', '');

    }

    private static initHobby() {
        KeywordMappings.keywordMappings.set('Mein Hobby', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('Meine Hobbys', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('Meine Hobbies', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('Mein Hobbys', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');
        KeywordMappings.keywordMappings.set('', 'Mein Hobby');

    }

    private static initBeruhigung() {
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht bin, beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht/wütend bin, beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich, indem', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich mit', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend/enttäuscht bin, beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht bin', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht bin, beruhigt mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht bin, beruhige ich mich mit', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin beruhige ich mich mit', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhigt mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend/enttäuscht bin, beruhigt mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mit', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Um Stress abzubauen', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Das beruhigt mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend oder enttäuscht bin, beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('beruhige ich mich mit', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend/enttäuscht bin', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, versuche ich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wüten bin, beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin,beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin beruhigt mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend oder enttäuscht bin', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Bin ich enttäuscht, beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend/enttäuscht bin, beruhige ich mich mit', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich hässig bi, beruhig ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich hässig oder enttüscht bin', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich enttäusch bin, beruhige ich mich', 'Wenn ich wütend bin, beruhige ich mich');
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich, indem ich', 'Wenn ich wütend bin, beruhige ich mich');

    }

    private static initHoeren() {
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten diese Band', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Diese Musik höre ich im Moment am liebsten', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Im Moment höre ich', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Diese Band höre ich momentan am liebsten', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten diese Musikerin', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Mein Lieblingsmusiker', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Ich höre am liebsten', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten die Band', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Momentan höre ich am liebsten', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten den Musiker', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Ich höre gerade am liebsten die Musik von', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Im Moment höre ich am Liebsten', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Das höre ich am liebsten', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Mein Lieblingssänger ist', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Ich Moment höre ich am liebsten', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Momentane Lieblingsband', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Momentan ist meine Lieblingsband', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Meine Lieblingsmusiker', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Im Moment los i am liebschte', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Im Moment los ich am liebschte', 'Im Moment höre ich am liebsten');
        KeywordMappings.keywordMappings.set('Ich höre gerade', 'Im Moment höre ich am liebsten');
    }

    private static initVerzeihen() {
        KeywordMappings.keywordMappings.set('Ich kann alles verzeihen ausser', 'Ich kann alles verzeihen ausser');
        KeywordMappings.keywordMappings.set('Ich kann alles verzeihen, ausser', 'Ich kann alles verzeihen ausser');
        KeywordMappings.keywordMappings.set('Ich kann alles verzeihen', 'Ich kann alles verzeihen');
        KeywordMappings.keywordMappings.set('Ich kann alles vergeben ausser', 'Ich kann alles verzeihen ausser');
        KeywordMappings.keywordMappings.set('Ich kann alles verziehen ausser', 'Ich kann alles verzeihen ausser');
        KeywordMappings.keywordMappings.set('Ich verzeihe alles, aber', 'Ich kann alles verzeihen ausser');
        KeywordMappings.keywordMappings.set('Ich chan alles verzeihe usser', 'Ich kann alles verzeihen ausser');
        KeywordMappings.keywordMappings.set('Ich cha alles verzeihe usser', 'Ich kann alles verzeihen ausser');
    }

    private static initRegentag() {
        KeywordMappings.keywordMappings.set('An einem regnerischen Tag mache ich', 'An einem regnerischen Tag mache ich');
        KeywordMappings.keywordMappings.set('An einem regnerischen Tag', 'An einem regnerischen Tag mache ich');
        KeywordMappings.keywordMappings.set('An einem regnerischen Nachmittag mache ich', 'An einem regnerischen Nachmittag mache ich');
        KeywordMappings.keywordMappings.set('Mein Schlechtwetter-Programm', 'An einem regnerischen Tag mache ich');
        KeywordMappings.keywordMappings.set('An einem Regen-Tag mache ich', 'An einem regnerischen Tag mache ich');
        KeywordMappings.keywordMappings.set('Einen regnerischen Tag', 'An einem regnerischen Tag mache ich');
        KeywordMappings.keywordMappings.set('An einem Regentag', 'An einem regnerischen Tag mache ich');
        KeywordMappings.keywordMappings.set('An einem Regentag mache ich', 'An einem regnerischen Tag mache ich');
        KeywordMappings.keywordMappings.set('A eme rägnerische Tag mach i', 'An einem regnerischen Tag mache ich');
    }

    private static initWohnOrt() {
        KeywordMappings.keywordMappings.set('In diesem Land möchte ich am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Dort würde ich am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('In diesem Land lebe ich am liebsten', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('In diesem Land würden wir am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('In diesem Land würde ich am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Da lebe ich am liebsten', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('An diesem Ort würde ich am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('In dieser Stadt würde ich am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Hier würde ich am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('In dieser Stadt möchte ich leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Hier lebe ich am liebsten', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Ich wohne am liebsten', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Hier würde ich gerne leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Hier möchte ich am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('In diesem Land würde ich gerne leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('In diesem Land möchte ich leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('In diesem Land würde ich am liebsten Leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('In diesen Ländern würde ich am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Dort will ich am liebsten leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Hier möchte ich leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Hier will ich leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Do würd i am liebschte läbe', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Döt wür ich am liebschte läbe', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Dort würde ich gerne leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Dort würde ich am liebsten Leben', 'In diesem Land möchte ich am liebsten leben');
        KeywordMappings.keywordMappings.set('Da möchte ich leben', 'In diesem Land möchte ich am liebsten leben');
    }

    private static initReiseZiele() {
        KeywordMappings.keywordMappings.set('Mein Lieblingsreiseziel', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Meine Lieblingsreiseziele', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Meine Traumferien', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Lieblingsreiseziel', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Meine Lieblingsdestination', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Mein Lieblingsreiseziel ist', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Mein Traumreiseziel', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Mein Lieblingreisesziel', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Mein Lieblinsgreiseziel', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Mein Lieblingsziel', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Mis Lieblingsreiseziel', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Meine Lieblingsreiseziele sind', 'Mein Lieblingsreiseziel');
        KeywordMappings.keywordMappings.set('Mein Lieblinsreiseziel', 'Mein Lieblingsreiseziel');

    }

    private static initFollows() {
        KeywordMappings.keywordMappings.set('Diesem Star folge ich auf Instagram', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Diesen Stars folge ich auf Instagram', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Diesem Star folge ich auf Social Media', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Auf Instagram/Twitter folge ich', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Diesem Star folge ich auf Instagram/Twitter', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Auf Twitter/Instagram folge ich', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Diesen Stars folge ich auf Instagram/Twitter', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Diesen Stars folge ich auf Social Media', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Diesem Star folge ich auf Twitter', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Dem Promi folg ich uf Instagram', 'Diesem Star folge ich auf Instagram');
        KeywordMappings.keywordMappings.set('Diesen Stars folge ich auf Twitter/Instagram', 'Diesem Star folge ich auf Instagram');
    }

    private static initNichtLebenOhne() {
        KeywordMappings.keywordMappings.set('Ich kann nicht leben ohne', 'Ich kann nicht leben ohne');
        KeywordMappings.keywordMappings.set('Ich kann nicht leben', 'Ich kann nicht leben ohne');
        KeywordMappings.keywordMappings.set('Ich kan nicht leben ohne', 'Ich kann nicht leben ohne');
        KeywordMappings.keywordMappings.set('Ohne das kann ich nicht leben', 'Ich kann nicht leben ohne');
        KeywordMappings.keywordMappings.set('Wir können nicht leben ohne', 'Ich kann nicht leben ohne');
        KeywordMappings.keywordMappings.set('I cha nit läbe ohni', 'Ich kann nicht leben ohne');
        KeywordMappings.keywordMappings.set('Ich chan nöd läbe ohni', 'Ich kann nicht leben ohne');
        KeywordMappings.keywordMappings.set('Ich cha nüd läbe ohni', 'Ich kann nicht leben ohne');
        KeywordMappings.keywordMappings.set('Ich cha nöd läbe ohni', 'Ich kann nicht leben ohne');

    }

    private static initBeziehung() {
        KeywordMappings.keywordMappings.set('Wichtig in einer Beziehung ist', 'Wichtig in einer Beziehung ist');
        KeywordMappings.keywordMappings.set('Wichtig in einer Beziehung sind', 'Wichtig in einer Beziehung ist');
        KeywordMappings.keywordMappings.set('Wichtig in einer Beziehung', 'Wichtig in einer Beziehung ist');
        KeywordMappings.keywordMappings.set('Wichtig in einer Beziehung ist mir', 'Wichtig in einer Beziehung ist');
        KeywordMappings.keywordMappings.set('Wichtig an einer Beziehung ist', 'Wichtig in einer Beziehung ist');
        KeywordMappings.keywordMappings.set('Wichtig inere Beziehig isch', 'Wichtig in einer Beziehung ist');
    }

    private static initDate() {
        KeywordMappings.keywordMappings.set('Mein erstes Date sieht so aus', 'Mein erstes Date sieht so aus');
        KeywordMappings.keywordMappings.set('Mein erstes Date ist', 'Mein erstes Date sieht so aus');
        KeywordMappings.keywordMappings.set('So sieht mein erstes Date au', 'Mein erstes Date sieht so aus');
        KeywordMappings.keywordMappings.set('Mein erstes Date', 'Mein erstes Date sieht so aus');
        KeywordMappings.keywordMappings.set('So würde mein erstes Date aussehen', 'Mein erstes Date sieht so aus');
        KeywordMappings.keywordMappings.set('Mein erstes Date wird', 'Mein erstes Date sieht so aus');
        KeywordMappings.keywordMappings.set('Das perfekte Date sieht so aus', 'Mein erstes Date sieht so aus');
        KeywordMappings.keywordMappings.set('Mein erstes Date besteht aus', 'Mein erstes Date sieht so aus');
        KeywordMappings.keywordMappings.set('So gseht mis erste Date us', 'Mein erstes Date sieht so aus');
        KeywordMappings.keywordMappings.set('Mein erstes Date wäre', 'Mein erstes Date sieht so aus');
    }

    private static initWut() {
        KeywordMappings.keywordMappings.set('Das macht mich wütend', 'Das macht mich wütend');
        KeywordMappings.keywordMappings.set('Das macht mit wütend', 'Das macht mich wütend');
        KeywordMappings.keywordMappings.set('Das macht uns wütend', 'Das macht mich wütend');
        KeywordMappings.keywordMappings.set('Das macht mich hässig', 'Das macht mich wütend');
        KeywordMappings.keywordMappings.set('', 'Das macht mich wütend');
        KeywordMappings.keywordMappings.set('', 'Das macht mich wütend');
        KeywordMappings.keywordMappings.set('', 'Das macht mich wütend');
        KeywordMappings.keywordMappings.set('', 'Das macht mich wütend');
    }

    private static initZehnJahre() {
        KeywordMappings.keywordMappings.set('In zehn Jahren bin ich', 'In zehn Jahren bin ich');
        KeywordMappings.keywordMappings.set('In zehn Jahre bin ich', 'In zehn Jahren bin ich');
        KeywordMappings.keywordMappings.set('In Zehn Jahren bin ich', 'In zehn Jahren bin ich');
        KeywordMappings.keywordMappings.set('In zehn Jahren', 'In zehn Jahren bin ich');
        KeywordMappings.keywordMappings.set('Ich zehn Jahren bin ich', 'In zehn Jahren bin ich');
        KeywordMappings.keywordMappings.set('In 10 Jahren bin ich', 'In zehn Jahren bin ich');
        KeywordMappings.keywordMappings.set('I zäh Johr bin ich', 'In zehn Jahren bin ich');
    }

    private static initMagIchNicht() {
        KeywordMappings.keywordMappings.set('Das mag ich nicht an mir', 'Das mag ich nicht an mir');
        KeywordMappings.keywordMappings.set('Das mag ich nicht am mir', 'Das mag ich nicht an mir');
        KeywordMappings.keywordMappings.set('Das mag ich an mir nicht', 'Das mag ich nicht an mir');
        KeywordMappings.keywordMappings.set('Das han i nöd gern a mir', 'Das mag ich nicht an mir');
    }

    private static initZaubern() {
        KeywordMappings.keywordMappings.set('Wenn ich zaubern könnte, wäre ich', 'Wenn ich zaubern könnte, wäre ich');
        KeywordMappings.keywordMappings.set('Wenn ich zaubern könnte', 'Wenn ich zaubern könnte, wäre ich');
        KeywordMappings.keywordMappings.set('Wenn ich zaubern könnte würde ich', 'Wenn ich zaubern könnte, wäre ich');
        KeywordMappings.keywordMappings.set('Wenn ich eine Superkraft hätte', 'Wenn ich zaubern könnte, wäre ich');
    }

    private static initAbschaffen() {
        KeywordMappings.keywordMappings.set('Das möchte ich abschaffen', 'Das möchte ich abschaffen');
        KeywordMappings.keywordMappings.set('Das würde ich gerne abschaffen', 'Das möchte ich abschaffen');
        KeywordMappings.keywordMappings.set('Das möchte ich gerne abschaffen', 'Das möchte ich abschaffen');
        KeywordMappings.keywordMappings.set('Den möchte ich abschaffen', 'Das möchte ich abschaffen');
        KeywordMappings.keywordMappings.set('Das würde ich abschaffen', 'Das möchte ich abschaffen');
        KeywordMappings.keywordMappings.set('Das möcht ich abschaffe', 'Das möchte ich abschaffen');
        KeywordMappings.keywordMappings.set('Das wür i abschaffe', 'Das möchte ich abschaffen');
    }

    private static initBereuen() {
        KeywordMappings.keywordMappings.set('Am meisten bereue ich', 'Am meisten bereue ich');
        KeywordMappings.keywordMappings.set('Das bereue ich am meisten', 'Am meisten bereue ich');
        KeywordMappings.keywordMappings.set('Am meisten bedauere ich', 'Am meisten bereue ich');
        KeywordMappings.keywordMappings.set('Ich bereue', 'Am meisten bereue ich');
        KeywordMappings.keywordMappings.set('Ich bedaure am meisten', 'Am meisten bereue ich');
        KeywordMappings.keywordMappings.set('Das bereue ich', 'Am meisten bereue ich');
        KeywordMappings.keywordMappings.set('Am meistens bereue ich', 'Am meisten bereue ich');
    }

    private static initFreunde() {
        KeywordMappings.keywordMappings.set('Das sagen meine Freunde über mich', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Meine Freunde sagen über mich', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Das sagen mein Freunde über mich', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Das sagen meine Freunde', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Das sagen meine Freude über mich', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Meine Freunde finden mich', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Dass sagen meine Freunde über mich', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Das sagen unsere Freunde über uns', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Meine Freunde sagen', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Das sagen meine Kollegen über mich', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Das säge mini Fründe über mich', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Das säged mini Fründe über mich', 'Das sagen meine Freunde über mich');
        KeywordMappings.keywordMappings.set('Das säget mini Fründ  über m', 'Das sagen meine Freunde über mich');
    }

    private static initSex() {
        KeywordMappings.keywordMappings.set('Sex ist', 'Sex ist');
        KeywordMappings.keywordMappings.set('Sex', 'Sex ist');
    }

    private static initErstesMal() {
        KeywordMappings.keywordMappings.set('Meine erste grosse Liebe', 'Meine erste grosse Liebe');
        KeywordMappings.keywordMappings.set('Mein erstes Mal', 'Meine erste grosse Liebe');
        KeywordMappings.keywordMappings.set('Mini erscht gross Liebi', 'Meine erste grosse Liebe');
    }

    private static initTraumberuf() {
        KeywordMappings.keywordMappings.set('Mein Traumberuf', 'Mein Traumberuf');
        KeywordMappings.keywordMappings.set('Mein Traumberuf ist', 'Mein Traumberuf');
        KeywordMappings.keywordMappings.set('Meinen Traumberuf', 'Mein Traumberuf');
        KeywordMappings.keywordMappings.set('Mein Traumjob', 'Mein Traumberuf');
        KeywordMappings.keywordMappings.set('Unser Traumberuf', 'Mein Traumberuf');
        KeywordMappings.keywordMappings.set('Bruef', 'Mein Traumberuf');
        KeywordMappings.keywordMappings.set('Mi Traumbruef', 'Mein Traumberuf');
    }

    private static initPersonenEinfluss() {
        KeywordMappings.keywordMappings.set('Diese Person hat mein Leben beeinflusst', 'Diese Person hat mein Leben beeinflusst');
        KeywordMappings.keywordMappings.set('Diese Personen haben mein Leben beeinflusst', 'Diese Person hat mein Leben beeinflusst');
        KeywordMappings.keywordMappings.set('Diese Person hat mein Leben verändert', 'Diese Person hat mein Leben beeinflusst');
    }

    private static initUnnoetig() {
        KeywordMappings.keywordMappings.set('Völlig unnötig auf dieser Welt', 'Völlig unnötig auf dieser Welt');
        KeywordMappings.keywordMappings.set('Völlig unnötig auf dieser Welt ist', 'Völlig unnötig auf dieser Welt');
        KeywordMappings.keywordMappings.set('Völlig unnötig auf dieser Welt sind', 'Völlig unnötig auf dieser Welt');
        KeywordMappings.keywordMappings.set('Völlig unnötig auf der Welt ist', 'Völlig unnötig auf dieser Welt');
        KeywordMappings.keywordMappings.set('Völlig unmöglich', 'Völlig unnötig auf dieser Welt');
        KeywordMappings.keywordMappings.set('Völlig unnnötig auf dieser Welt', 'Völlig unnötig auf dieser Welt');
        KeywordMappings.keywordMappings.set('Völlig unnötig', 'Völlig unnötig auf dieser Welt');
        KeywordMappings.keywordMappings.set('Völlig unnötig auf der Welt', 'Völlig unnötig auf dieser Welt');
        KeywordMappings.keywordMappings.set('Völlig unnötig uf dere Wält', 'Völlig unnötig auf dieser Welt');
    }

    private static initEinfluss() {
        KeywordMappings.keywordMappings.set('Dieser Film hat mein Leben beeinflusst', 'Dieser Film hat mein Leben beeinflusst');
        KeywordMappings.keywordMappings.set('Dieses Buch hat mein Leben beeinflusst', 'Dieser Film hat mein Leben beeinflusst');
        KeywordMappings.keywordMappings.set('Dieses Buch/dieser Film hat mein Leben beeinflusst', 'Dieser Film hat mein Leben beeinflusst');
        KeywordMappings.keywordMappings.set('Dieses Buch hat mein Leben verändert', 'Dieser Film hat mein Leben beeinflusst');
        KeywordMappings.keywordMappings.set('Dieser Film hat mein Leben verändert', 'Dieser Film hat mein Leben beeinflusst');
        KeywordMappings.keywordMappings.set('Diese Serie hat mein Leben verändert', 'Dieser Film hat mein Leben beeinflusst');
        KeywordMappings.keywordMappings.set('Diese Serie hat mein Leben beeinflusst', 'Dieser Film hat mein Leben beeinflusst');
        KeywordMappings.keywordMappings.set('Diese Fernsehserie hat mein Leben beeinflusst', 'Dieser Film hat mein Leben beeinflusst');
    }

    private static initClubs() {
        KeywordMappings.keywordMappings.set('Mein Lieblingsclub', 'Mein Lieblingsclub');
        KeywordMappings.keywordMappings.set('Meine Lieblingsclubs', 'Mein Lieblingsclub');
        KeywordMappings.keywordMappings.set('Mein Lieblingsclub (Disco)', 'Mein Lieblingsclub');
        KeywordMappings.keywordMappings.set('Meine Lieblingsbar', 'Mein Lieblingsclub');
        KeywordMappings.keywordMappings.set('Lieblingsclub', 'Mein Lieblingsclub');
        KeywordMappings.keywordMappings.set('Meine Lieblingsclub', 'Mein Lieblingsclub');
        KeywordMappings.keywordMappings.set('Mein Leblingsclub', 'Mein Lieblingsclub');
        KeywordMappings.keywordMappings.set('Min Lieblingsclub', 'Mein Lieblingsclub');
    }

    private static initAnmachspruch() {
        KeywordMappings.keywordMappings.set('Der schlimmste Anmachspruch', 'Der schlimmste Anmachspruch');
        KeywordMappings.keywordMappings.set('Der schlimmste Anmachspruch, den ich je gehört habe', 'Der schlimmste Anmachspruch');
        KeywordMappings.keywordMappings.set('Den schlimmsten Anmachspruch, den ich je gehört habe', 'Der schlimmste Anmachspruch');
        KeywordMappings.keywordMappings.set('Dümmster Anmachspruch, den ich je gehört habe', 'Der schlimmste Anmachspruch');
        KeywordMappings.keywordMappings.set('Schlimmster Anmachspruch, den ich je gehört habe', 'Der schlimmste Anmachspruch');
        KeywordMappings.keywordMappings.set('Der Schlimmste Anmachspruch', 'Der schlimmste Anmachspruch');
        KeywordMappings.keywordMappings.set('Der schlimmste Anmachspruch, den ich je hörte', 'Der schlimmste Anmachspruch');
    }

    private static initZiel() {
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch erreichen', 'Das will ich unbedingt noch erreichen');
        KeywordMappings.keywordMappings.set('Das will ich noch erreichen', 'Das will ich unbedingt noch erreichen');
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch tun', 'Das will ich unbedingt noch erreichen');
        KeywordMappings.keywordMappings.set('Das will ich unbedingt erreichen', 'Das will ich unbedingt noch erreichen');
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch  erreiche', 'Das will ich unbedingt noch erreichen');
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch machen', 'Das will ich unbedingt noch erreichen');
        KeywordMappings.keywordMappings.set('Das möchte ich noch erreichen', 'Das will ich unbedingt noch erreichen');
        KeywordMappings.keywordMappings.set('Das will ich noch gemacht haben', 'Das will ich unbedingt noch erreichen');
        KeywordMappings.keywordMappings.set('Das will ich noch machen', 'Das will ich unbedingt noch erreichen');
        KeywordMappings.keywordMappings.set('Das will ich unbedingt no erreiche', 'Das will ich unbedingt noch erreichen');
    }

    private static initErleben() {
        KeywordMappings.keywordMappings.set('Das will ich noch erleben', 'Das will ich noch erleben');
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch erleben', 'Das will ich noch erleben');
        KeywordMappings.keywordMappings.set('Das will ich mal erlebt haben', 'Das will ich noch erleben');
    }

    private static initFreundeSind() {
        KeywordMappings.keywordMappings.set('Meine Freunde sind für mich', 'Meine Freunde sind für mich');
        KeywordMappings.keywordMappings.set('Meine Freunde sind mir', 'Meine Freunde sind für mich');
        KeywordMappings.keywordMappings.set('Mein Freunde sind für mich', 'Meine Freunde sind für mich');
        KeywordMappings.keywordMappings.set('Meine Freund sind für mich', 'Meine Freunde sind für mich');
        KeywordMappings.keywordMappings.set('Meine Freunde sind', 'Meine Freunde sind für mich');
        KeywordMappings.keywordMappings.set('Meine Freunde', 'Meine Freunde sind für mich');
        KeywordMappings.keywordMappings.set('Meine Freund sind', 'Meine Freunde sind für mich');
    }

    private static initMotto() {
        KeywordMappings.keywordMappings.set('Mein Motto', 'Mein Motto');
    }

    private static initGlaube() {
        KeywordMappings.keywordMappings.set('Ich glaube an', 'Ich glaube an');
        KeywordMappings.keywordMappings.set('Ich glaube', 'Ich glaube an');
    }

    private static initVerlieben() {
        KeywordMappings.keywordMappings.set('Ich verliebe mich, wenn', 'Ich verliebe mich, wenn');
        KeywordMappings.keywordMappings.set('Ich verliebe mich', 'Ich verliebe mich, wenn');
        KeywordMappings.keywordMappings.set('Ich verliebe mich, bei', 'Ich verliebe mich, wenn');
        KeywordMappings.keywordMappings.set('Ich verliebe mi, wenn', 'Ich verliebe mich, wenn');
        KeywordMappings.keywordMappings.set('', 'Ich verliebe mich, wenn');
        KeywordMappings.keywordMappings.set('', 'Ich verliebe mich, wenn');
        KeywordMappings.keywordMappings.set('', 'Ich verliebe mich, wenn');
        KeywordMappings.keywordMappings.set('', 'Ich verliebe mich, wenn');
        KeywordMappings.keywordMappings.set('', 'Ich verliebe mich, wenn');
        KeywordMappings.keywordMappings.set('', 'Ich verliebe mich, wenn');

    }

    public getKeywordMappings(): Map<string, string> {
        return KeywordMappings.keywordMappings;
    }
}