import {Fragen} from "./Fragen";

export class KeywordMappings {
    private static keywordMappings: Map<string, Fragen> = new Map<string, Fragen>();

    private static init() {
        KeywordMappings.keywordMappings.set('Titel', Fragen.TITEL);
        KeywordMappings.keywordMappings.set('Alter', Fragen.ALTER);
        KeywordMappings.keywordMappings.set('picture-href', Fragen.PICTURE_HREF);
        KeywordMappings.initWohnort();
        KeywordMappings.initBeruf();
        KeywordMappings.initSternzeichen();
        KeywordMappings.initGroesse();
        KeywordMappings.initKontakt();
        KeywordMappings.initHobby();
        KeywordMappings.initBeruhigung();
        KeywordMappings.initHoeren();
        KeywordMappings.initVerzeihen();
        KeywordMappings.initRegentag();
        KeywordMappings.initWunschWohnort();
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
        KeywordMappings.initSchwach();
        KeywordMappings.initSpeziell();
        KeywordMappings.initVerfuehrtWerden();
        KeywordMappings.initGluecklich();
        KeywordMappings.initZukunft();
        KeywordMappings.initLiebe();
        KeywordMappings.initTick();
        KeywordMappings.initVerfuehren();
        KeywordMappings.keywordMappings.set('Das mag ich an mir', Fragen.DAS_MAG_ICH_AN_MIR);
        KeywordMappings.keywordMappings.set('Das gefällt mir an der Schweiz', Fragen.MAG_SCHWEIZ);
    }

    private static initWohnort() {
        KeywordMappings.keywordMappings.set('Wohnort', Fragen.WOHNORT);
        KeywordMappings.keywordMappings.set('Wohnorte', Fragen.WOHNORT);
    }

    private static initBeruf() {
        KeywordMappings.keywordMappings.set('Beruf', Fragen.BERUF);
        KeywordMappings.keywordMappings.set('Bruef', Fragen.BERUF);
    }

    private static initSternzeichen() {
        KeywordMappings.keywordMappings.set('Sternzeichen', Fragen.STERNZEICHEN);
        KeywordMappings.keywordMappings.set('Sternzeiche', Fragen.STERNZEICHEN);
    }

    private static initGroesse() {
        KeywordMappings.keywordMappings.set('Grösse', Fragen.GRÖSSE);
        KeywordMappings.keywordMappings.set('Grössi', Fragen.GRÖSSE);
    }

    private static initKontakt() {
        KeywordMappings.keywordMappings.set('Kontakt', Fragen.KONTAKT);
        KeywordMappings.keywordMappings.set('kontakt', Fragen.KONTAKT);
        KeywordMappings.keywordMappings.set('Mail', Fragen.KONTAKT);
    }

    private static initHobby() {
        KeywordMappings.keywordMappings.set('Mein Hobby', Fragen.HOBBY);
        KeywordMappings.keywordMappings.set('Meine Hobbys', Fragen.HOBBY);
        KeywordMappings.keywordMappings.set('Meine Hobbies', Fragen.HOBBY);
        KeywordMappings.keywordMappings.set('Mein Hobbys', Fragen.HOBBY);
        KeywordMappings.keywordMappings.set('Mis Hobby', Fragen.HOBBY);
        KeywordMappings.keywordMappings.set('Mini Hobbys', Fragen.HOBBY);
        KeywordMappings.keywordMappings.set('Mein Hobby ist', Fragen.HOBBY);
        KeywordMappings.keywordMappings.set('Meine Hobbys sind', Fragen.HOBBY);
    }

    private static initBeruhigung() {
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht bin, beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht/wütend bin, beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich, indem', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich mit', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend/enttäuscht bin, beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht bin', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht bin, beruhigt mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich enttäuscht bin, beruhige ich mich mit', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin beruhige ich mich mit', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhigt mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend/enttäuscht bin, beruhigt mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mit', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Um Stress abzubauen', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Das beruhigt mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend oder enttäuscht bin, beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('beruhige ich mich mit', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend/enttäuscht bin', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, versuche ich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wüten bin, beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin,beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin beruhigt mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend oder enttäuscht bin', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Bin ich enttäuscht, beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend/enttäuscht bin, beruhige ich mich mit', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich hässig bi, beruhig ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich hässig oder enttüscht bin', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich enttäusch bin, beruhige ich mich', Fragen.BERUHIGUNG);
        KeywordMappings.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich, indem ich', Fragen.BERUHIGUNG);

    }

    private static initHoeren() {
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten diese Band', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Diese Musik höre ich im Moment am liebsten', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Im Moment höre ich', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Diese Band höre ich momentan am liebsten', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten diese Musikerin', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Mein Lieblingsmusiker', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Ich höre am liebsten', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten die Band', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Momentan höre ich am liebsten', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Im Moment höre ich am liebsten den Musiker', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Ich höre gerade am liebsten die Musik von', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Im Moment höre ich am Liebsten', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Das höre ich am liebsten', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Mein Lieblingssänger ist', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Ich Moment höre ich am liebsten', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Momentane Lieblingsband', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Momentan ist meine Lieblingsband', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Meine Lieblingsmusiker', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Im Moment los i am liebschte', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Im Moment los ich am liebschte', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Ich höre gerade', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Am liebsten höre ich', Fragen.MUSIK);
        KeywordMappings.keywordMappings.set('Mein Lieblingssound', Fragen.MUSIK);
    }

    private static initVerzeihen() {
        KeywordMappings.keywordMappings.set('Ich kann alles verzeihen ausser', Fragen.VERZEIHEN);
        KeywordMappings.keywordMappings.set('Ich kann alles verzeihen, ausser', Fragen.VERZEIHEN);
        KeywordMappings.keywordMappings.set('Ich kann alles verzeihen', Fragen.VERZEIHEN);
        KeywordMappings.keywordMappings.set('Ich kann alles vergeben ausser', Fragen.VERZEIHEN);
        KeywordMappings.keywordMappings.set('Ich kann alles verziehen ausser', Fragen.VERZEIHEN);
        KeywordMappings.keywordMappings.set('Ich verzeihe alles, aber', Fragen.VERZEIHEN);
        KeywordMappings.keywordMappings.set('Ich chan alles verzeihe usser', Fragen.VERZEIHEN);
        KeywordMappings.keywordMappings.set('Ich cha alles verzeihe usser', Fragen.VERZEIHEN);
    }

    private static initRegentag() {
        KeywordMappings.keywordMappings.set('An einem regnerischen Tag mache ich', Fragen.REGEN_TAG);
        KeywordMappings.keywordMappings.set('An einem regnerischen Tag', Fragen.REGEN_TAG);
        KeywordMappings.keywordMappings.set('An einem regnerischen Nachmittag mache ich', Fragen.REGEN_TAG);
        KeywordMappings.keywordMappings.set('Mein Schlechtwetter-Programm', Fragen.REGEN_TAG);
        KeywordMappings.keywordMappings.set('An einem Regen-Tag mache ich', Fragen.REGEN_TAG);
        KeywordMappings.keywordMappings.set('Einen regnerischen Tag', Fragen.REGEN_TAG);
        KeywordMappings.keywordMappings.set('An einem Regentag', Fragen.REGEN_TAG);
        KeywordMappings.keywordMappings.set('An einem Regentag mache ich', Fragen.REGEN_TAG);
        KeywordMappings.keywordMappings.set('A eme rägnerische Tag mach i', Fragen.REGEN_TAG);
    }

    private static initWunschWohnort() {
        KeywordMappings.keywordMappings.set('In diesem Land möchte ich am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Dort würde ich am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('In diesem Land lebe ich am liebsten', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('In diesem Land würden wir am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('In diesem Land würde ich am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Da lebe ich am liebsten', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('An diesem Ort würde ich am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('In dieser Stadt würde ich am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Hier würde ich am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('In dieser Stadt möchte ich leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Hier lebe ich am liebsten', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Ich wohne am liebsten', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Hier würde ich gerne leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Hier möchte ich am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('In diesem Land würde ich gerne leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('In diesem Land möchte ich leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('In diesem Land würde ich am liebsten Leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('In diesen Ländern würde ich am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Dort will ich am liebsten leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Hier möchte ich leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Hier will ich leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Do würd i am liebschte läbe', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Döt wür ich am liebschte läbe', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Dort würde ich gerne leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Dort würde ich am liebsten Leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Da möchte ich leben', Fragen.WOHN_LAND);
        KeywordMappings.keywordMappings.set('Da würde ich am liebsten leben', Fragen.WOHN_LAND);
    }

    private static initReiseZiele() {
        KeywordMappings.keywordMappings.set('Mein Lieblingsreiseziel', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Meine Lieblingsreiseziele', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Meine Traumferien', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Lieblingsreiseziel', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Meine Lieblingsdestination', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Mein Lieblingsreiseziel ist', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Mein Traumreiseziel', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Mein Lieblingreisesziel', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Mein Lieblinsgreiseziel', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Mein Lieblingsziel', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Mis Lieblingsreiseziel', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Meine Lieblingsreiseziele sind', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Mein Lieblinsreiseziel', Fragen.REISE_ZIEL);
        KeywordMappings.keywordMappings.set('Mein Lieblinsreiseziel', Fragen.REISE_ZIEL);
    }

    private static initFollows() {
        KeywordMappings.keywordMappings.set('Diesem Star folge ich auf Instagram', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Diesen Stars folge ich auf Instagram', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Diesem Star folge ich auf Social Media', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Auf Instagram/Twitter folge ich', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Diesem Star folge ich auf Instagram/Twitter', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Auf Twitter/Instagram folge ich', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Diesen Stars folge ich auf Instagram/Twitter', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Diesen Stars folge ich auf Social Media', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Diesem Star folge ich auf Twitter', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Dem Promi folg ich uf Instagram', Fragen.STAR);
        KeywordMappings.keywordMappings.set('Diesen Stars folge ich auf Twitter/Instagram', Fragen.STAR);
    }

    private static initNichtLebenOhne() {
        KeywordMappings.keywordMappings.set('Ich kann nicht leben ohne', Fragen.NICHT_LEBEN_OHNE);
        KeywordMappings.keywordMappings.set('Ich kann nicht leben', Fragen.NICHT_LEBEN_OHNE);
        KeywordMappings.keywordMappings.set('Ich kan nicht leben ohne', Fragen.NICHT_LEBEN_OHNE);
        KeywordMappings.keywordMappings.set('Ohne das kann ich nicht leben', Fragen.NICHT_LEBEN_OHNE);
        KeywordMappings.keywordMappings.set('Wir können nicht leben ohne', Fragen.NICHT_LEBEN_OHNE);
        KeywordMappings.keywordMappings.set('I cha nit läbe ohni', Fragen.NICHT_LEBEN_OHNE);
        KeywordMappings.keywordMappings.set('Ich chan nöd läbe ohni', Fragen.NICHT_LEBEN_OHNE);
        KeywordMappings.keywordMappings.set('Ich cha nüd läbe ohni', Fragen.NICHT_LEBEN_OHNE);
        KeywordMappings.keywordMappings.set('Ich cha nöd läbe ohni', Fragen.NICHT_LEBEN_OHNE);

    }

    private static initBeziehung() {
        KeywordMappings.keywordMappings.set('Wichtig in einer Beziehung ist', Fragen.WICHTIG_IN_BEZIEHUNG);
        KeywordMappings.keywordMappings.set('Wichtig in einer Beziehung sind', Fragen.WICHTIG_IN_BEZIEHUNG);
        KeywordMappings.keywordMappings.set('Wichtig in einer Beziehung', Fragen.WICHTIG_IN_BEZIEHUNG);
        KeywordMappings.keywordMappings.set('Wichtig in einer Beziehung ist mir', Fragen.WICHTIG_IN_BEZIEHUNG);
        KeywordMappings.keywordMappings.set('Wichtig an einer Beziehung ist', Fragen.WICHTIG_IN_BEZIEHUNG);
        KeywordMappings.keywordMappings.set('Wichtig inere Beziehig isch', Fragen.WICHTIG_IN_BEZIEHUNG);
    }

    private static initDate() {
        KeywordMappings.keywordMappings.set('Mein erstes Date sieht so aus', Fragen.ERSTES_DATE);
        KeywordMappings.keywordMappings.set('Mein erstes Date ist', Fragen.ERSTES_DATE);
        KeywordMappings.keywordMappings.set('So sieht mein erstes Date au', Fragen.ERSTES_DATE);
        KeywordMappings.keywordMappings.set('Mein erstes Date', Fragen.ERSTES_DATE);
        KeywordMappings.keywordMappings.set('So würde mein erstes Date aussehen', Fragen.ERSTES_DATE);
        KeywordMappings.keywordMappings.set('Mein erstes Date wird', Fragen.ERSTES_DATE);
        KeywordMappings.keywordMappings.set('Das perfekte Date sieht so aus', Fragen.ERSTES_DATE);
        KeywordMappings.keywordMappings.set('Mein erstes Date besteht aus', Fragen.ERSTES_DATE);
        KeywordMappings.keywordMappings.set('So gseht mis erste Date us', Fragen.ERSTES_DATE);
        KeywordMappings.keywordMappings.set('Mein erstes Date wäre', Fragen.ERSTES_DATE);
    }

    private static initWut() {
        KeywordMappings.keywordMappings.set('Das macht mich wütend', Fragen.MACHT_WUETEND);
        KeywordMappings.keywordMappings.set('Das macht mit wütend', Fragen.MACHT_WUETEND);
        KeywordMappings.keywordMappings.set('Das macht uns wütend', Fragen.MACHT_WUETEND);
        KeywordMappings.keywordMappings.set('Das macht mich hässig', Fragen.MACHT_WUETEND);
    }

    private static initZehnJahre() {
        KeywordMappings.keywordMappings.set('In zehn Jahren bin ich', Fragen.IN_ZEHN_JAHREN);
        KeywordMappings.keywordMappings.set('In zehn Jahre bin ich', Fragen.IN_ZEHN_JAHREN);
        KeywordMappings.keywordMappings.set('In Zehn Jahren bin ich', Fragen.IN_ZEHN_JAHREN);
        KeywordMappings.keywordMappings.set('In zehn Jahren', Fragen.IN_ZEHN_JAHREN);
        KeywordMappings.keywordMappings.set('Ich zehn Jahren bin ich', Fragen.IN_ZEHN_JAHREN);
        KeywordMappings.keywordMappings.set('In 10 Jahren bin ich', Fragen.IN_ZEHN_JAHREN);
        KeywordMappings.keywordMappings.set('I zäh Johr bin ich', Fragen.IN_ZEHN_JAHREN);
    }

    private static initMagIchNicht() {
        KeywordMappings.keywordMappings.set('Das mag ich nicht an mir', Fragen.MAG_ICH_NICHT_AN_MIR);
        KeywordMappings.keywordMappings.set('Das mag ich nicht am mir', Fragen.MAG_ICH_NICHT_AN_MIR);
        KeywordMappings.keywordMappings.set('Das mag ich an mir nicht', Fragen.MAG_ICH_NICHT_AN_MIR);
        KeywordMappings.keywordMappings.set('Das han i nöd gern a mir', Fragen.MAG_ICH_NICHT_AN_MIR);
    }

    private static initZaubern() {
        KeywordMappings.keywordMappings.set('Wenn ich zaubern könnte, wäre ich', Fragen.ZAUBERN);
        KeywordMappings.keywordMappings.set('Wenn ich zaubern könnte', Fragen.ZAUBERN);
        KeywordMappings.keywordMappings.set('Wenn ich zaubern könnte würde ich', Fragen.ZAUBERN);
        KeywordMappings.keywordMappings.set('Wenn ich eine Superkraft hätte', Fragen.ZAUBERN);
        KeywordMappings.keywordMappings.set('Wenn ich zaubern könnte, würde ich', Fragen.ZAUBERN);
    }

    private static initAbschaffen() {
        KeywordMappings.keywordMappings.set('Das möchte ich abschaffen', Fragen.ABSCHAFFEN);
        KeywordMappings.keywordMappings.set('Das würde ich gerne abschaffen', Fragen.ABSCHAFFEN);
        KeywordMappings.keywordMappings.set('Das möchte ich gerne abschaffen', Fragen.ABSCHAFFEN);
        KeywordMappings.keywordMappings.set('Den möchte ich abschaffen', Fragen.ABSCHAFFEN);
        KeywordMappings.keywordMappings.set('Das würde ich abschaffen', Fragen.ABSCHAFFEN);
        KeywordMappings.keywordMappings.set('Das möcht ich abschaffe', Fragen.ABSCHAFFEN);
        KeywordMappings.keywordMappings.set('Das wür i abschaffe', Fragen.ABSCHAFFEN);
        KeywordMappings.keywordMappings.set('Das würde ich verbieten', Fragen.ABSCHAFFEN);
    }

    private static initBereuen() {
        KeywordMappings.keywordMappings.set('Am meisten bereue ich', Fragen.BEREUEN);
        KeywordMappings.keywordMappings.set('Das bereue ich am meisten', Fragen.BEREUEN);
        KeywordMappings.keywordMappings.set('Am meisten bedauere ich', Fragen.BEREUEN);
        KeywordMappings.keywordMappings.set('Ich bereue', Fragen.BEREUEN);
        KeywordMappings.keywordMappings.set('Ich bedaure am meisten', Fragen.BEREUEN);
        KeywordMappings.keywordMappings.set('Das bereue ich', Fragen.BEREUEN);
        KeywordMappings.keywordMappings.set('Am meistens bereue ich', Fragen.BEREUEN);
    }

    private static initFreunde() {
        KeywordMappings.keywordMappings.set('Das sagen meine Freunde über mich', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Meine Freunde sagen über mich', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Das sagen mein Freunde über mich', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Das sagen meine Freunde', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Das sagen meine Freude über mich', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Meine Freunde finden mich', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Dass sagen meine Freunde über mich', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Das sagen unsere Freunde über uns', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Meine Freunde sagen', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Das sagen meine Kollegen über mich', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Das säge mini Fründe über mich', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Das säged mini Fründe über mich', Fragen.FREUNDE_SAGEN);
        KeywordMappings.keywordMappings.set('Das säget mini Fründ  über m', Fragen.FREUNDE_SAGEN);
    }

    private static initSex() {
        KeywordMappings.keywordMappings.set('Sex ist', Fragen.SEX_IST);
        KeywordMappings.keywordMappings.set('Sex', Fragen.SEX_IST);
    }

    private static initErstesMal() {
        KeywordMappings.keywordMappings.set('Meine erste grosse Liebe', Fragen.ERSTE_LIEBE);
        KeywordMappings.keywordMappings.set('Mein erstes Mal', Fragen.ERSTE_LIEBE);
        KeywordMappings.keywordMappings.set('Mini erscht gross Liebi', Fragen.ERSTE_LIEBE);
    }

    private static initTraumberuf() {
        KeywordMappings.keywordMappings.set('Mein Traumberuf', Fragen.TRAUM_BERUF);
        KeywordMappings.keywordMappings.set('Mein Traumberuf ist', Fragen.TRAUM_BERUF);
        KeywordMappings.keywordMappings.set('Meinen Traumberuf', Fragen.TRAUM_BERUF);
        KeywordMappings.keywordMappings.set('Mein Traumjob', Fragen.TRAUM_BERUF);
        KeywordMappings.keywordMappings.set('Unser Traumberuf', Fragen.TRAUM_BERUF);
        KeywordMappings.keywordMappings.set('Mi Traumbruef', Fragen.TRAUM_BERUF);
        KeywordMappings.keywordMappings.set('Traumberuf', Fragen.TRAUM_BERUF);
    }

    private static initPersonenEinfluss() {
        KeywordMappings.keywordMappings.set('Diese Person hat mein Leben beeinflusst', Fragen.EINFLUSS);
        KeywordMappings.keywordMappings.set('Diese Personen haben mein Leben beeinflusst', Fragen.EINFLUSS);
        KeywordMappings.keywordMappings.set('Diese Person hat mein Leben verändert', Fragen.EINFLUSS);
        KeywordMappings.keywordMappings.set('Ein Star, der mich beeindruckt', Fragen.EINFLUSS);
    }

    private static initUnnoetig() {
        KeywordMappings.keywordMappings.set('Völlig unnötig auf dieser Welt', Fragen.UNNOETIG);
        KeywordMappings.keywordMappings.set('Völlig unnötig auf dieser Welt ist', Fragen.UNNOETIG);
        KeywordMappings.keywordMappings.set('Völlig unnötig auf dieser Welt sind', Fragen.UNNOETIG);
        KeywordMappings.keywordMappings.set('Völlig unnötig auf der Welt ist', Fragen.UNNOETIG);
        KeywordMappings.keywordMappings.set('Völlig unmöglich', Fragen.UNNOETIG);
        KeywordMappings.keywordMappings.set('Völlig unnnötig auf dieser Welt', Fragen.UNNOETIG);
        KeywordMappings.keywordMappings.set('Völlig unnötig', Fragen.UNNOETIG);
        KeywordMappings.keywordMappings.set('Völlig unnötig auf der Welt', Fragen.UNNOETIG);
        KeywordMappings.keywordMappings.set('Völlig unnötig uf dere Wält', Fragen.UNNOETIG);
    }

    private static initEinfluss() {
        KeywordMappings.keywordMappings.set('Dieser Film hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
        KeywordMappings.keywordMappings.set('Dieses Buch hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
        KeywordMappings.keywordMappings.set('Dieses Buch/dieser Film hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
        KeywordMappings.keywordMappings.set('Dieses Buch hat mein Leben verändert', Fragen.EINFLUSS_FILM);
        KeywordMappings.keywordMappings.set('Dieser Film hat mein Leben verändert', Fragen.EINFLUSS_FILM);
        KeywordMappings.keywordMappings.set('Diese Serie hat mein Leben verändert', Fragen.EINFLUSS_FILM);
        KeywordMappings.keywordMappings.set('Diese Serie hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
        KeywordMappings.keywordMappings.set('Diese Fernsehserie hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
    }

    private static initClubs() {
        KeywordMappings.keywordMappings.set('Mein Lieblingsclub', Fragen.LIEBLINGS_CLUB);
        KeywordMappings.keywordMappings.set('Meine Lieblingsclubs', Fragen.LIEBLINGS_CLUB);
        KeywordMappings.keywordMappings.set('Mein Lieblingsclub (Disco)', Fragen.LIEBLINGS_CLUB);
        KeywordMappings.keywordMappings.set('Meine Lieblingsbar', Fragen.LIEBLINGS_CLUB);
        KeywordMappings.keywordMappings.set('Lieblingsclub', Fragen.LIEBLINGS_CLUB);
        KeywordMappings.keywordMappings.set('Meine Lieblingsclub', Fragen.LIEBLINGS_CLUB);
        KeywordMappings.keywordMappings.set('Mein Leblingsclub', Fragen.LIEBLINGS_CLUB);
        KeywordMappings.keywordMappings.set('Min Lieblingsclub', Fragen.LIEBLINGS_CLUB);
    }

    private static initAnmachspruch() {
        KeywordMappings.keywordMappings.set('Der schlimmste Anmachspruch', Fragen.ANMACH_SPRUCH);
        KeywordMappings.keywordMappings.set('Der schlimmste Anmachspruch, den ich je gehört habe', Fragen.ANMACH_SPRUCH);
        KeywordMappings.keywordMappings.set('Den schlimmsten Anmachspruch, den ich je gehört habe', Fragen.ANMACH_SPRUCH);
        KeywordMappings.keywordMappings.set('Dümmster Anmachspruch, den ich je gehört habe', Fragen.ANMACH_SPRUCH);
        KeywordMappings.keywordMappings.set('Schlimmster Anmachspruch, den ich je gehört habe', Fragen.ANMACH_SPRUCH);
        KeywordMappings.keywordMappings.set('Der Schlimmste Anmachspruch', Fragen.ANMACH_SPRUCH);
        KeywordMappings.keywordMappings.set('Der schlimmste Anmachspruch, den ich je hörte', Fragen.ANMACH_SPRUCH);
    }

    private static initZiel() {
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch erreichen', Fragen.UNBEDINGT_ERREICHEN);
        KeywordMappings.keywordMappings.set('Das will ich noch erreichen', Fragen.UNBEDINGT_ERREICHEN);
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch tun', Fragen.UNBEDINGT_ERREICHEN);
        KeywordMappings.keywordMappings.set('Das will ich unbedingt erreichen', Fragen.UNBEDINGT_ERREICHEN);
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch  erreiche', Fragen.UNBEDINGT_ERREICHEN);
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch machen', Fragen.UNBEDINGT_ERREICHEN);
        KeywordMappings.keywordMappings.set('Das möchte ich noch erreichen', Fragen.UNBEDINGT_ERREICHEN);
        KeywordMappings.keywordMappings.set('Das will ich noch gemacht haben', Fragen.UNBEDINGT_ERREICHEN);
        KeywordMappings.keywordMappings.set('Das will ich noch machen', Fragen.UNBEDINGT_ERREICHEN);
        KeywordMappings.keywordMappings.set('Das will ich unbedingt no erreiche', Fragen.UNBEDINGT_ERREICHEN);
    }

    private static initErleben() {
        KeywordMappings.keywordMappings.set('Das will ich noch erleben', Fragen.UNBEDINGT_ERLEBEN);
        KeywordMappings.keywordMappings.set('Das will ich unbedingt noch erleben', Fragen.UNBEDINGT_ERLEBEN);
        KeywordMappings.keywordMappings.set('Das will ich mal erlebt haben', Fragen.UNBEDINGT_ERLEBEN);
    }

    private static initFreundeSind() {
        KeywordMappings.keywordMappings.set('Meine Freunde sind für mich', Fragen.FREUNDE_SIND);
        KeywordMappings.keywordMappings.set('Meine Freunde sind mir', Fragen.FREUNDE_SIND);
        KeywordMappings.keywordMappings.set('Mein Freunde sind für mich', Fragen.FREUNDE_SIND);
        KeywordMappings.keywordMappings.set('Meine Freund sind für mich', Fragen.FREUNDE_SIND);
        KeywordMappings.keywordMappings.set('Meine Freunde sind', Fragen.FREUNDE_SIND);
        KeywordMappings.keywordMappings.set('Meine Freunde', Fragen.FREUNDE_SIND);
        KeywordMappings.keywordMappings.set('Meine Freund sind', Fragen.FREUNDE_SIND);
    }

    private static initMotto() {
        KeywordMappings.keywordMappings.set('Mein Motto', Fragen.MOTTO);
    }

    private static initGlaube() {
        KeywordMappings.keywordMappings.set('Ich glaube an', Fragen.GLAUBE_AN);
        KeywordMappings.keywordMappings.set('Ich glaube', Fragen.GLAUBE_AN);
        KeywordMappings.keywordMappings.set('Ich glaub an', Fragen.GLAUBE_AN);
        KeywordMappings.keywordMappings.set('Ich glaube daran', Fragen.GLAUBE_AN);
    }

    private static initVerlieben() {
        KeywordMappings.keywordMappings.set('Ich verliebe mich, wenn', Fragen.VERLIEBEN_WENN);
        KeywordMappings.keywordMappings.set('Ich verliebe mich', Fragen.VERLIEBEN_WENN);
        KeywordMappings.keywordMappings.set('Ich verliebe mich, bei', Fragen.VERLIEBEN_WENN);
        KeywordMappings.keywordMappings.set('Ich verliebe mi, wenn', Fragen.VERLIEBEN_WENN);
    }

    private static initSchwach() {
        KeywordMappings.keywordMappings.set('Ich werde schwach bei', Fragen.SCHWACH_BEI);
        KeywordMappings.keywordMappings.set('Ich werde schwach', Fragen.SCHWACH_BEI);
        KeywordMappings.keywordMappings.set('Ich werde schwach, wenn', Fragen.SCHWACH_BEI);
        KeywordMappings.keywordMappings.set('Ich wird schwach bi', Fragen.SCHWACH_BEI);
        KeywordMappings.keywordMappings.set('Da werde ich schwach', Fragen.SCHWACH_BEI);
    }

    private static initSpeziell() {
        KeywordMappings.keywordMappings.set('Speziell an mir sind', Fragen.SPEZIELL_IST);
        KeywordMappings.keywordMappings.set('Speziell an mir ist', Fragen.SPEZIELL_IST);
        KeywordMappings.keywordMappings.set('Das ist speziell an mir', Fragen.SPEZIELL_IST);
        KeywordMappings.keywordMappings.set('Speziall an mir ist', Fragen.SPEZIELL_IST);
        KeywordMappings.keywordMappings.set('Speziell an mir finde ich', Fragen.SPEZIELL_IST);
        KeywordMappings.keywordMappings.set('Was ist speziell an mir', Fragen.SPEZIELL_IST);
        KeywordMappings.keywordMappings.set('Speziell a mir isch', Fragen.SPEZIELL_IST);
        KeywordMappings.keywordMappings.set('Speziell a mir sind', Fragen.SPEZIELL_IST);
    }

    private static initVerfuehrtWerden() {
        KeywordMappings.keywordMappings.set('So verführt man mich', Fragen.VERFUEHRT_WERDEN);
        KeywordMappings.keywordMappings.set('So verführt Mann mich', Fragen.VERFUEHRT_WERDEN);
        KeywordMappings.keywordMappings.set('So verführt Frau mich', Fragen.VERFUEHRT_WERDEN);
        KeywordMappings.keywordMappings.set('So verführt er mich', Fragen.VERFUEHRT_WERDEN);
        KeywordMappings.keywordMappings.set('So verführt frau mich', Fragen.VERFUEHRT_WERDEN);
        KeywordMappings.keywordMappings.set('So verführt man uns', Fragen.VERFUEHRT_WERDEN);
        KeywordMappings.keywordMappings.set('So verfüert me mi', Fragen.VERFUEHRT_WERDEN);
    }

    private static initGluecklich() {
        KeywordMappings.keywordMappings.set('Das macht mich glücklich', Fragen.MACHT_MICH_GLUECKLICH);
        KeywordMappings.keywordMappings.set('Glücklich macht mich', Fragen.MACHT_MICH_GLUECKLICH);
        KeywordMappings.keywordMappings.set('Ich mag', Fragen.MACHT_MICH_GLUECKLICH);
        KeywordMappings.keywordMappings.set('Ich geniesse', Fragen.MACHT_MICH_GLUECKLICH);
        KeywordMappings.keywordMappings.set('Das macht mi glücklich', Fragen.MACHT_MICH_GLUECKLICH);
        KeywordMappings.keywordMappings.set('Das macht mich glücklech', Fragen.MACHT_MICH_GLUECKLICH);
    }

    private static initZukunft() {
        KeywordMappings.keywordMappings.set('Mein grösster Traum', Fragen.TRAUM);
        KeywordMappings.keywordMappings.set('Für die Zukunft wünsche ich mir', Fragen.TRAUM);
        KeywordMappings.keywordMappings.set('Mein grösser Traum', Fragen.TRAUM);
        KeywordMappings.keywordMappings.set('Mein Traum', Fragen.TRAUM);
    }

    private static initLiebe() {
        KeywordMappings.keywordMappings.set('Liebe ist', Fragen.LIEBE_IST);
        KeywordMappings.keywordMappings.set('Liebe bedeutet für mich', Fragen.LIEBE_IST);
        KeywordMappings.keywordMappings.set('Liebe bedeutet', Fragen.LIEBE_IST);
        KeywordMappings.keywordMappings.set('Liebe', Fragen.LIEBE_IST);
        KeywordMappings.keywordMappings.set('Liäbi isch', Fragen.LIEBE_IST);
    }

    private static initTick() {
        KeywordMappings.keywordMappings.set('Mein Tick', Fragen.TICK);
        KeywordMappings.keywordMappings.set('Meine Macke', Fragen.TICK);
        KeywordMappings.keywordMappings.set('Unser Tick', Fragen.TICK);
        KeywordMappings.keywordMappings.set('Min Tigg', Fragen.TICK);
    }

    private static initVerfuehren() {
        KeywordMappings.keywordMappings.set('So verführe ich', Fragen.VERFUEHRE_ICH);
        KeywordMappings.keywordMappings.set('So verführen wir', Fragen.VERFUEHRE_ICH);
    }

    public getKeywordMappings(): Map<string, string> {
        return KeywordMappings.keywordMappings;
    }
}