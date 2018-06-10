import {Fragen} from "./Fragen";

export class KeywordMappings {
    private keywordMappings: Map<string, Fragen> = new Map<string, Fragen>();

    public constructor() {
        this.init();
    }

    public getKeywordMappings(): Map<string, Fragen> {
        return this.keywordMappings;
    }

    public static main() {
        let mappings: Map<String, Fragen> = new KeywordMappings().getKeywordMappings();
        for (const frage in Fragen) {
            console.log(frage);
            for (const mapping of mappings.entries()) {
                if (Fragen[frage] === mapping[1]) {
                    console.log('    ' + mapping[0]);
                }
            }
        }
    }

    private init() {
        this.keywordMappings.set('Titel', Fragen.TITEL);
        this.keywordMappings.set('Alter', Fragen.ALTER);
        this.keywordMappings.set('picture-href', Fragen.PICTURE_HREF);
        this.initWohnort();
        this.initBeruf();
        this.initSternzeichen();
        this.initGroesse();
        this.initKontakt();
        this.initHobby();
        this.initBeruhigung();
        this.initHoeren();
        this.initVerzeihen();
        this.initRegentag();
        this.initWunschWohnort();
        this.initReiseZiele();
        this.initFollows();
        this.initNichtLebenOhne();
        this.initBeziehung();
        this.initDate();
        this.initWut();
        this.initZehnJahre();
        this.initMagIchNicht();
        this.initZaubern();
        this.initBereuen();
        this.initAbschaffen();
        this.initFreunde();
        this.initSex();
        this.initErstesMal();
        this.initTraumberuf();
        this.initPersonenEinfluss();
        this.initUnnoetig();
        this.initEinfluss();
        this.initClubs();
        this.initAnmachspruch();
        this.initZiel();
        this.initErleben();
        this.initFreundeSind();
        this.initMotto();
        this.initGlaube();
        this.initVerlieben();
        this.initSchwach();
        this.initSpeziell();
        this.initVerfuehrtWerden();
        this.initGluecklich();
        this.initZukunft();
        this.initLiebe();
        this.initTick();
        this.initVerfuehren();
        this.keywordMappings.set('Das mag ich an mir', Fragen.DAS_MAG_ICH_AN_MIR);
        this.keywordMappings.set('Das gefällt mir an der Schweiz', Fragen.MAG_SCHWEIZ);
    }

    private initWohnort() {
        this.keywordMappings.set('Wohnort', Fragen.WOHNORT);
        this.keywordMappings.set('Wohnorte', Fragen.WOHNORT);
    }

    private initBeruf() {
        this.keywordMappings.set('Beruf', Fragen.BERUF);
        this.keywordMappings.set('Bruef', Fragen.BERUF);
    }

    private initSternzeichen() {
        this.keywordMappings.set('Sternzeichen', Fragen.STERNZEICHEN);
        this.keywordMappings.set('Sternzeiche', Fragen.STERNZEICHEN);
    }

    private initGroesse() {
        this.keywordMappings.set('Grösse', Fragen.GRÖSSE);
        this.keywordMappings.set('Grössi', Fragen.GRÖSSE);
    }

    private initKontakt() {
        this.keywordMappings.set('Kontakt', Fragen.KONTAKT);
        this.keywordMappings.set('kontakt', Fragen.KONTAKT);
        this.keywordMappings.set('Mail', Fragen.KONTAKT);
    }

    private initHobby() {
        this.keywordMappings.set('Mein Hobby', Fragen.HOBBY);
        this.keywordMappings.set('Meine Hobbys', Fragen.HOBBY);
        this.keywordMappings.set('Meine Hobbies', Fragen.HOBBY);
        this.keywordMappings.set('Mein Hobbys', Fragen.HOBBY);
        this.keywordMappings.set('Mis Hobby', Fragen.HOBBY);
        this.keywordMappings.set('Mini Hobbys', Fragen.HOBBY);
        this.keywordMappings.set('Mein Hobby ist', Fragen.HOBBY);
        this.keywordMappings.set('Meine Hobbys sind', Fragen.HOBBY);
    }

    private initBeruhigung() {
        this.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich enttäuscht bin, beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich enttäuscht/wütend bin, beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich, indem', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich mit', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend/enttäuscht bin, beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich enttäuscht bin', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich enttäuscht bin, beruhigt mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich enttäuscht bin, beruhige ich mich mit', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin beruhige ich mich mit', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin, beruhigt mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend/enttäuscht bin, beruhigt mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin, beruhige ich mit', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Um Stress abzubauen', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Das beruhigt mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend oder enttäuscht bin, beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('beruhige ich mich mit', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend/enttäuscht bin', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin, versuche ich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wüten bin, beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin,beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin beruhigt mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend oder enttäuscht bin', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Bin ich enttäuscht, beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend/enttäuscht bin, beruhige ich mich mit', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich hässig bi, beruhig ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich hässig oder enttüscht bin', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich enttäusch bin, beruhige ich mich', Fragen.BERUHIGUNG);
        this.keywordMappings.set('Wenn ich wütend bin, beruhige ich mich, indem ich', Fragen.BERUHIGUNG);

    }

    private initHoeren() {
        this.keywordMappings.set('Im Moment höre ich am liebsten', Fragen.MUSIK);
        this.keywordMappings.set('Im Moment höre ich am liebsten diese Band', Fragen.MUSIK);
        this.keywordMappings.set('Diese Musik höre ich im Moment am liebsten', Fragen.MUSIK);
        this.keywordMappings.set('Im Moment höre ich', Fragen.MUSIK);
        this.keywordMappings.set('Diese Band höre ich momentan am liebsten', Fragen.MUSIK);
        this.keywordMappings.set('Im Moment höre ich am liebsten diese Musikerin', Fragen.MUSIK);
        this.keywordMappings.set('Mein Lieblingsmusiker', Fragen.MUSIK);
        this.keywordMappings.set('Ich höre am liebsten', Fragen.MUSIK);
        this.keywordMappings.set('Im Moment höre ich am liebsten die Band', Fragen.MUSIK);
        this.keywordMappings.set('Momentan höre ich am liebsten', Fragen.MUSIK);
        this.keywordMappings.set('Im Moment höre ich am liebsten den Musiker', Fragen.MUSIK);
        this.keywordMappings.set('Ich höre gerade am liebsten die Musik von', Fragen.MUSIK);
        this.keywordMappings.set('Im Moment höre ich am Liebsten', Fragen.MUSIK);
        this.keywordMappings.set('Das höre ich am liebsten', Fragen.MUSIK);
        this.keywordMappings.set('Mein Lieblingssänger ist', Fragen.MUSIK);
        this.keywordMappings.set('Ich Moment höre ich am liebsten', Fragen.MUSIK);
        this.keywordMappings.set('Momentane Lieblingsband', Fragen.MUSIK);
        this.keywordMappings.set('Momentan ist meine Lieblingsband', Fragen.MUSIK);
        this.keywordMappings.set('Meine Lieblingsmusiker', Fragen.MUSIK);
        this.keywordMappings.set('Im Moment los i am liebschte', Fragen.MUSIK);
        this.keywordMappings.set('Im Moment los ich am liebschte', Fragen.MUSIK);
        this.keywordMappings.set('Ich höre gerade', Fragen.MUSIK);
        this.keywordMappings.set('Am liebsten höre ich', Fragen.MUSIK);
        this.keywordMappings.set('Mein Lieblingssound', Fragen.MUSIK);
    }

    private initVerzeihen() {
        this.keywordMappings.set('Ich kann alles verzeihen ausser', Fragen.VERZEIHEN);
        this.keywordMappings.set('Ich kann alles verzeihen, ausser', Fragen.VERZEIHEN);
        this.keywordMappings.set('Ich kann alles verzeihen', Fragen.VERZEIHEN);
        this.keywordMappings.set('Ich kann alles vergeben ausser', Fragen.VERZEIHEN);
        this.keywordMappings.set('Ich kann alles verziehen ausser', Fragen.VERZEIHEN);
        this.keywordMappings.set('Ich verzeihe alles, aber', Fragen.VERZEIHEN);
        this.keywordMappings.set('Ich chan alles verzeihe usser', Fragen.VERZEIHEN);
        this.keywordMappings.set('Ich cha alles verzeihe usser', Fragen.VERZEIHEN);
    }

    private initRegentag() {
        this.keywordMappings.set('An einem regnerischen Tag mache ich', Fragen.REGEN_TAG);
        this.keywordMappings.set('An einem regnerischen Tag', Fragen.REGEN_TAG);
        this.keywordMappings.set('An einem regnerischen Nachmittag mache ich', Fragen.REGEN_TAG);
        this.keywordMappings.set('Mein Schlechtwetter-Programm', Fragen.REGEN_TAG);
        this.keywordMappings.set('An einem Regen-Tag mache ich', Fragen.REGEN_TAG);
        this.keywordMappings.set('Einen regnerischen Tag', Fragen.REGEN_TAG);
        this.keywordMappings.set('An einem Regentag', Fragen.REGEN_TAG);
        this.keywordMappings.set('An einem Regentag mache ich', Fragen.REGEN_TAG);
        this.keywordMappings.set('A eme rägnerische Tag mach i', Fragen.REGEN_TAG);
    }

    private initWunschWohnort() {
        this.keywordMappings.set('In diesem Land möchte ich am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Dort würde ich am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('In diesem Land lebe ich am liebsten', Fragen.WOHN_LAND);
        this.keywordMappings.set('In diesem Land würden wir am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('In diesem Land würde ich am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Da lebe ich am liebsten', Fragen.WOHN_LAND);
        this.keywordMappings.set('An diesem Ort würde ich am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('In dieser Stadt würde ich am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Hier würde ich am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('In dieser Stadt möchte ich leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Hier lebe ich am liebsten', Fragen.WOHN_LAND);
        this.keywordMappings.set('Ich wohne am liebsten', Fragen.WOHN_LAND);
        this.keywordMappings.set('Hier würde ich gerne leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Hier möchte ich am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('In diesem Land würde ich gerne leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('In diesem Land möchte ich leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('In diesem Land würde ich am liebsten Leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('In diesen Ländern würde ich am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Dort will ich am liebsten leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Hier möchte ich leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Hier will ich leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Do würd i am liebschte läbe', Fragen.WOHN_LAND);
        this.keywordMappings.set('Döt wür ich am liebschte läbe', Fragen.WOHN_LAND);
        this.keywordMappings.set('Dort würde ich gerne leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Dort würde ich am liebsten Leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Da möchte ich leben', Fragen.WOHN_LAND);
        this.keywordMappings.set('Da würde ich am liebsten leben', Fragen.WOHN_LAND);
    }

    private initReiseZiele() {
        this.keywordMappings.set('Mein Lieblingsreiseziel', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Meine Lieblingsreiseziele', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Meine Traumferien', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Lieblingsreiseziel', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Meine Lieblingsdestination', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Mein Lieblingsreiseziel ist', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Mein Traumreiseziel', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Mein Lieblingreisesziel', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Mein Lieblinsgreiseziel', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Mein Lieblingsziel', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Mis Lieblingsreiseziel', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Meine Lieblingsreiseziele sind', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Mein Lieblinsreiseziel', Fragen.REISE_ZIEL);
        this.keywordMappings.set('Mein Lieblinsreiseziel', Fragen.REISE_ZIEL);
    }

    private initFollows() {
        this.keywordMappings.set('Diesem Star folge ich auf Instagram', Fragen.STAR);
        this.keywordMappings.set('Diesen Stars folge ich auf Instagram', Fragen.STAR);
        this.keywordMappings.set('Diesem Star folge ich auf Social Media', Fragen.STAR);
        this.keywordMappings.set('Auf Instagram/Twitter folge ich', Fragen.STAR);
        this.keywordMappings.set('Diesem Star folge ich auf Instagram/Twitter', Fragen.STAR);
        this.keywordMappings.set('Auf Twitter/Instagram folge ich', Fragen.STAR);
        this.keywordMappings.set('Diesen Stars folge ich auf Instagram/Twitter', Fragen.STAR);
        this.keywordMappings.set('Diesen Stars folge ich auf Social Media', Fragen.STAR);
        this.keywordMappings.set('Diesem Star folge ich auf Twitter', Fragen.STAR);
        this.keywordMappings.set('Dem Promi folg ich uf Instagram', Fragen.STAR);
        this.keywordMappings.set('Diesen Stars folge ich auf Twitter/Instagram', Fragen.STAR);
    }

    private initNichtLebenOhne() {
        this.keywordMappings.set('Ich kann nicht leben ohne', Fragen.NICHT_LEBEN_OHNE);
        this.keywordMappings.set('Ich kann nicht leben', Fragen.NICHT_LEBEN_OHNE);
        this.keywordMappings.set('Ich kan nicht leben ohne', Fragen.NICHT_LEBEN_OHNE);
        this.keywordMappings.set('Ohne das kann ich nicht leben', Fragen.NICHT_LEBEN_OHNE);
        this.keywordMappings.set('Wir können nicht leben ohne', Fragen.NICHT_LEBEN_OHNE);
        this.keywordMappings.set('I cha nit läbe ohni', Fragen.NICHT_LEBEN_OHNE);
        this.keywordMappings.set('Ich chan nöd läbe ohni', Fragen.NICHT_LEBEN_OHNE);
        this.keywordMappings.set('Ich cha nüd läbe ohni', Fragen.NICHT_LEBEN_OHNE);
        this.keywordMappings.set('Ich cha nöd läbe ohni', Fragen.NICHT_LEBEN_OHNE);

    }

    private initBeziehung() {
        this.keywordMappings.set('Wichtig in einer Beziehung ist', Fragen.WICHTIG_IN_BEZIEHUNG);
        this.keywordMappings.set('Wichtig in einer Beziehung sind', Fragen.WICHTIG_IN_BEZIEHUNG);
        this.keywordMappings.set('Wichtig in einer Beziehung', Fragen.WICHTIG_IN_BEZIEHUNG);
        this.keywordMappings.set('Wichtig in einer Beziehung ist mir', Fragen.WICHTIG_IN_BEZIEHUNG);
        this.keywordMappings.set('Wichtig an einer Beziehung ist', Fragen.WICHTIG_IN_BEZIEHUNG);
        this.keywordMappings.set('Wichtig inere Beziehig isch', Fragen.WICHTIG_IN_BEZIEHUNG);
    }

    private initDate() {
        this.keywordMappings.set('Mein erstes Date sieht so aus', Fragen.ERSTES_DATE);
        this.keywordMappings.set('Mein erstes Date ist', Fragen.ERSTES_DATE);
        this.keywordMappings.set('So sieht mein erstes Date au', Fragen.ERSTES_DATE);
        this.keywordMappings.set('Mein erstes Date', Fragen.ERSTES_DATE);
        this.keywordMappings.set('So würde mein erstes Date aussehen', Fragen.ERSTES_DATE);
        this.keywordMappings.set('Mein erstes Date wird', Fragen.ERSTES_DATE);
        this.keywordMappings.set('Das perfekte Date sieht so aus', Fragen.ERSTES_DATE);
        this.keywordMappings.set('Mein erstes Date besteht aus', Fragen.ERSTES_DATE);
        this.keywordMappings.set('So gseht mis erste Date us', Fragen.ERSTES_DATE);
        this.keywordMappings.set('Mein erstes Date wäre', Fragen.ERSTES_DATE);
        this.keywordMappings.set('So sieht mein erstes Date aus', Fragen.ERSTES_DATE);
    }

    private initWut() {
        this.keywordMappings.set('Das macht mich wütend', Fragen.MACHT_WUETEND);
        this.keywordMappings.set('Das macht mit wütend', Fragen.MACHT_WUETEND);
        this.keywordMappings.set('Das macht uns wütend', Fragen.MACHT_WUETEND);
        this.keywordMappings.set('Das macht mich hässig', Fragen.MACHT_WUETEND);
    }

    private initZehnJahre() {
        this.keywordMappings.set('In zehn Jahren bin ich', Fragen.IN_ZEHN_JAHREN);
        this.keywordMappings.set('In zehn Jahre bin ich', Fragen.IN_ZEHN_JAHREN);
        this.keywordMappings.set('In Zehn Jahren bin ich', Fragen.IN_ZEHN_JAHREN);
        this.keywordMappings.set('In zehn Jahren', Fragen.IN_ZEHN_JAHREN);
        this.keywordMappings.set('Ich zehn Jahren bin ich', Fragen.IN_ZEHN_JAHREN);
        this.keywordMappings.set('In 10 Jahren bin ich', Fragen.IN_ZEHN_JAHREN);
        this.keywordMappings.set('I zäh Johr bin ich', Fragen.IN_ZEHN_JAHREN);
    }

    private initMagIchNicht() {
        this.keywordMappings.set('Das mag ich nicht an mir', Fragen.MAG_ICH_NICHT_AN_MIR);
        this.keywordMappings.set('Das mag ich nicht am mir', Fragen.MAG_ICH_NICHT_AN_MIR);
        this.keywordMappings.set('Das mag ich an mir nicht', Fragen.MAG_ICH_NICHT_AN_MIR);
        this.keywordMappings.set('Das han i nöd gern a mir', Fragen.MAG_ICH_NICHT_AN_MIR);
    }

    private initZaubern() {
        this.keywordMappings.set('Wenn ich zaubern könnte, wäre ich', Fragen.ZAUBERN);
        this.keywordMappings.set('Wenn ich zaubern könnte', Fragen.ZAUBERN);
        this.keywordMappings.set('Wenn ich zaubern könnte würde ich', Fragen.ZAUBERN);
        this.keywordMappings.set('Wenn ich eine Superkraft hätte', Fragen.ZAUBERN);
        this.keywordMappings.set('Wenn ich zaubern könnte, würde ich', Fragen.ZAUBERN);
    }

    private initAbschaffen() {
        this.keywordMappings.set('Das möchte ich abschaffen', Fragen.ABSCHAFFEN);
        this.keywordMappings.set('Das würde ich gerne abschaffen', Fragen.ABSCHAFFEN);
        this.keywordMappings.set('Das möchte ich gerne abschaffen', Fragen.ABSCHAFFEN);
        this.keywordMappings.set('Den möchte ich abschaffen', Fragen.ABSCHAFFEN);
        this.keywordMappings.set('Das würde ich abschaffen', Fragen.ABSCHAFFEN);
        this.keywordMappings.set('Das möcht ich abschaffe', Fragen.ABSCHAFFEN);
        this.keywordMappings.set('Das wür i abschaffe', Fragen.ABSCHAFFEN);
        this.keywordMappings.set('Das würde ich verbieten', Fragen.ABSCHAFFEN);
    }

    private initBereuen() {
        this.keywordMappings.set('Am meisten bereue ich', Fragen.BEREUEN);
        this.keywordMappings.set('Das bereue ich am meisten', Fragen.BEREUEN);
        this.keywordMappings.set('Am meisten bedauere ich', Fragen.BEREUEN);
        this.keywordMappings.set('Ich bereue', Fragen.BEREUEN);
        this.keywordMappings.set('Ich bedaure am meisten', Fragen.BEREUEN);
        this.keywordMappings.set('Das bereue ich', Fragen.BEREUEN);
        this.keywordMappings.set('Am meistens bereue ich', Fragen.BEREUEN);
    }

    private initFreunde() {
        this.keywordMappings.set('Das sagen meine Freunde über mich', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Meine Freunde sagen über mich', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Das sagen mein Freunde über mich', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Das sagen meine Freunde', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Das sagen meine Freude über mich', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Meine Freunde finden mich', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Dass sagen meine Freunde über mich', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Das sagen unsere Freunde über uns', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Meine Freunde sagen', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Das sagen meine Kollegen über mich', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Das säge mini Fründe über mich', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Das säged mini Fründe über mich', Fragen.FREUNDE_SAGEN);
        this.keywordMappings.set('Das säget mini Fründ  über m', Fragen.FREUNDE_SAGEN);
    }

    private initSex() {
        this.keywordMappings.set('Sex ist', Fragen.SEX_IST);
        this.keywordMappings.set('Sex', Fragen.SEX_IST);
    }

    private initErstesMal() {
        this.keywordMappings.set('Meine erste grosse Liebe', Fragen.ERSTE_LIEBE);
        this.keywordMappings.set('Mein erstes Mal', Fragen.ERSTE_LIEBE);
        this.keywordMappings.set('Mini erscht gross Liebi', Fragen.ERSTE_LIEBE);
    }

    private initTraumberuf() {
        this.keywordMappings.set('Mein Traumberuf', Fragen.TRAUM_BERUF);
        this.keywordMappings.set('Mein Traumberuf ist', Fragen.TRAUM_BERUF);
        this.keywordMappings.set('Meinen Traumberuf', Fragen.TRAUM_BERUF);
        this.keywordMappings.set('Mein Traumjob', Fragen.TRAUM_BERUF);
        this.keywordMappings.set('Unser Traumberuf', Fragen.TRAUM_BERUF);
        this.keywordMappings.set('Mi Traumbruef', Fragen.TRAUM_BERUF);
        this.keywordMappings.set('Traumberuf', Fragen.TRAUM_BERUF);
    }

    private initPersonenEinfluss() {
        this.keywordMappings.set('Diese Person hat mein Leben beeinflusst', Fragen.EINFLUSS);
        this.keywordMappings.set('Diese Personen haben mein Leben beeinflusst', Fragen.EINFLUSS);
        this.keywordMappings.set('Diese Person hat mein Leben verändert', Fragen.EINFLUSS);
        this.keywordMappings.set('Ein Star, der mich beeindruckt', Fragen.EINFLUSS);
    }

    private initUnnoetig() {
        this.keywordMappings.set('Völlig unnötig auf dieser Welt', Fragen.UNNOETIG);
        this.keywordMappings.set('Völlig unnötig auf dieser Welt ist', Fragen.UNNOETIG);
        this.keywordMappings.set('Völlig unnötig auf dieser Welt sind', Fragen.UNNOETIG);
        this.keywordMappings.set('Völlig unnötig auf der Welt ist', Fragen.UNNOETIG);
        this.keywordMappings.set('Völlig unmöglich', Fragen.UNNOETIG);
        this.keywordMappings.set('Völlig unnnötig auf dieser Welt', Fragen.UNNOETIG);
        this.keywordMappings.set('Völlig unnötig', Fragen.UNNOETIG);
        this.keywordMappings.set('Völlig unnötig auf der Welt', Fragen.UNNOETIG);
        this.keywordMappings.set('Völlig unnötig uf dere Wält', Fragen.UNNOETIG);
    }

    private initEinfluss() {
        this.keywordMappings.set('Dieser Film hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
        this.keywordMappings.set('Dieses Buch hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
        this.keywordMappings.set('Dieses Buch/dieser Film hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
        this.keywordMappings.set('Dieses Buch hat mein Leben verändert', Fragen.EINFLUSS_FILM);
        this.keywordMappings.set('Dieser Film hat mein Leben verändert', Fragen.EINFLUSS_FILM);
        this.keywordMappings.set('Diese Serie hat mein Leben verändert', Fragen.EINFLUSS_FILM);
        this.keywordMappings.set('Diese Serie hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
        this.keywordMappings.set('Diese Fernsehserie hat mein Leben beeinflusst', Fragen.EINFLUSS_FILM);
    }

    private initClubs() {
        this.keywordMappings.set('Mein Lieblingsclub', Fragen.LIEBLINGS_CLUB);
        this.keywordMappings.set('Meine Lieblingsclubs', Fragen.LIEBLINGS_CLUB);
        this.keywordMappings.set('Mein Lieblingsclub (Disco)', Fragen.LIEBLINGS_CLUB);
        this.keywordMappings.set('Meine Lieblingsbar', Fragen.LIEBLINGS_CLUB);
        this.keywordMappings.set('Lieblingsclub', Fragen.LIEBLINGS_CLUB);
        this.keywordMappings.set('Meine Lieblingsclub', Fragen.LIEBLINGS_CLUB);
        this.keywordMappings.set('Mein Leblingsclub', Fragen.LIEBLINGS_CLUB);
        this.keywordMappings.set('Min Lieblingsclub', Fragen.LIEBLINGS_CLUB);
    }

    private initAnmachspruch() {
        this.keywordMappings.set('Der schlimmste Anmachspruch', Fragen.ANMACH_SPRUCH);
        this.keywordMappings.set('Der schlimmste Anmachspruch, den ich je gehört habe', Fragen.ANMACH_SPRUCH);
        this.keywordMappings.set('Den schlimmsten Anmachspruch, den ich je gehört habe', Fragen.ANMACH_SPRUCH);
        this.keywordMappings.set('Dümmster Anmachspruch, den ich je gehört habe', Fragen.ANMACH_SPRUCH);
        this.keywordMappings.set('Schlimmster Anmachspruch, den ich je gehört habe', Fragen.ANMACH_SPRUCH);
        this.keywordMappings.set('Der Schlimmste Anmachspruch', Fragen.ANMACH_SPRUCH);
        this.keywordMappings.set('Der schlimmste Anmachspruch, den ich je hörte', Fragen.ANMACH_SPRUCH);
    }

    private initZiel() {
        this.keywordMappings.set('Das will ich unbedingt noch erreichen', Fragen.UNBEDINGT_ERREICHEN);
        this.keywordMappings.set('Das will ich noch erreichen', Fragen.UNBEDINGT_ERREICHEN);
        this.keywordMappings.set('Das will ich unbedingt noch tun', Fragen.UNBEDINGT_ERREICHEN);
        this.keywordMappings.set('Das will ich unbedingt erreichen', Fragen.UNBEDINGT_ERREICHEN);
        this.keywordMappings.set('Das will ich unbedingt noch  erreiche', Fragen.UNBEDINGT_ERREICHEN);
        this.keywordMappings.set('Das will ich unbedingt noch machen', Fragen.UNBEDINGT_ERREICHEN);
        this.keywordMappings.set('Das möchte ich noch erreichen', Fragen.UNBEDINGT_ERREICHEN);
        this.keywordMappings.set('Das will ich noch gemacht haben', Fragen.UNBEDINGT_ERREICHEN);
        this.keywordMappings.set('Das will ich noch machen', Fragen.UNBEDINGT_ERREICHEN);
        this.keywordMappings.set('Das will ich unbedingt no erreiche', Fragen.UNBEDINGT_ERREICHEN);
    }

    private initErleben() {
        this.keywordMappings.set('Das will ich noch erleben', Fragen.UNBEDINGT_ERLEBEN);
        this.keywordMappings.set('Das will ich unbedingt noch erleben', Fragen.UNBEDINGT_ERLEBEN);
        this.keywordMappings.set('Das will ich mal erlebt haben', Fragen.UNBEDINGT_ERLEBEN);
    }

    private initFreundeSind() {
        this.keywordMappings.set('Meine Freunde sind für mich', Fragen.FREUNDE_SIND);
        this.keywordMappings.set('Meine Freunde sind mir', Fragen.FREUNDE_SIND);
        this.keywordMappings.set('Mein Freunde sind für mich', Fragen.FREUNDE_SIND);
        this.keywordMappings.set('Meine Freund sind für mich', Fragen.FREUNDE_SIND);
        this.keywordMappings.set('Meine Freunde sind', Fragen.FREUNDE_SIND);
        this.keywordMappings.set('Meine Freunde', Fragen.FREUNDE_SIND);
        this.keywordMappings.set('Meine Freund sind', Fragen.FREUNDE_SIND);
    }

    private initMotto() {
        this.keywordMappings.set('Mein Motto', Fragen.MOTTO);
    }

    private initGlaube() {
        this.keywordMappings.set('Ich glaube an', Fragen.GLAUBE_AN);
        this.keywordMappings.set('Ich glaube', Fragen.GLAUBE_AN);
        this.keywordMappings.set('Ich glaub an', Fragen.GLAUBE_AN);
        this.keywordMappings.set('Ich glaube daran', Fragen.GLAUBE_AN);
    }

    private initVerlieben() {
        this.keywordMappings.set('Ich verliebe mich, wenn', Fragen.VERLIEBEN_WENN);
        this.keywordMappings.set('Ich verliebe mich', Fragen.VERLIEBEN_WENN);
        this.keywordMappings.set('Ich verliebe mich, bei', Fragen.VERLIEBEN_WENN);
        this.keywordMappings.set('Ich verliebe mi, wenn', Fragen.VERLIEBEN_WENN);
    }

    private initSchwach() {
        this.keywordMappings.set('Ich werde schwach bei', Fragen.SCHWACH_BEI);
        this.keywordMappings.set('Ich werde schwach', Fragen.SCHWACH_BEI);
        this.keywordMappings.set('Ich werde schwach, wenn', Fragen.SCHWACH_BEI);
        this.keywordMappings.set('Ich wird schwach bi', Fragen.SCHWACH_BEI);
        this.keywordMappings.set('Da werde ich schwach', Fragen.SCHWACH_BEI);
    }

    private initSpeziell() {
        this.keywordMappings.set('Speziell an mir sind', Fragen.SPEZIELL_IST);
        this.keywordMappings.set('Speziell an mir ist', Fragen.SPEZIELL_IST);
        this.keywordMappings.set('Das ist speziell an mir', Fragen.SPEZIELL_IST);
        this.keywordMappings.set('Speziall an mir ist', Fragen.SPEZIELL_IST);
        this.keywordMappings.set('Speziell an mir finde ich', Fragen.SPEZIELL_IST);
        this.keywordMappings.set('Was ist speziell an mir', Fragen.SPEZIELL_IST);
        this.keywordMappings.set('Speziell a mir isch', Fragen.SPEZIELL_IST);
        this.keywordMappings.set('Speziell a mir sind', Fragen.SPEZIELL_IST);
    }

    private initVerfuehrtWerden() {
        this.keywordMappings.set('So verführt man mich', Fragen.VERFUEHRT_WERDEN);
        this.keywordMappings.set('So verführt Mann mich', Fragen.VERFUEHRT_WERDEN);
        this.keywordMappings.set('So verführt Frau mich', Fragen.VERFUEHRT_WERDEN);
        this.keywordMappings.set('So verführt er mich', Fragen.VERFUEHRT_WERDEN);
        this.keywordMappings.set('So verführt frau mich', Fragen.VERFUEHRT_WERDEN);
        this.keywordMappings.set('So verführt man uns', Fragen.VERFUEHRT_WERDEN);
        this.keywordMappings.set('So verfüert me mi', Fragen.VERFUEHRT_WERDEN);
    }

    private initGluecklich() {
        this.keywordMappings.set('Das macht mich glücklich', Fragen.MACHT_MICH_GLUECKLICH);
        this.keywordMappings.set('Glücklich macht mich', Fragen.MACHT_MICH_GLUECKLICH);
        this.keywordMappings.set('Ich mag', Fragen.MACHT_MICH_GLUECKLICH);
        this.keywordMappings.set('Ich geniesse', Fragen.MACHT_MICH_GLUECKLICH);
        this.keywordMappings.set('Das macht mi glücklich', Fragen.MACHT_MICH_GLUECKLICH);
        this.keywordMappings.set('Das macht mich glücklech', Fragen.MACHT_MICH_GLUECKLICH);
    }

    private initZukunft() {
        this.keywordMappings.set('Mein grösster Traum', Fragen.TRAUM);
        this.keywordMappings.set('Für die Zukunft wünsche ich mir', Fragen.TRAUM);
        this.keywordMappings.set('Mein grösser Traum', Fragen.TRAUM);
        this.keywordMappings.set('Mein Traum', Fragen.TRAUM);
    }

    private initLiebe() {
        this.keywordMappings.set('Liebe ist', Fragen.LIEBE_IST);
        this.keywordMappings.set('Liebe bedeutet für mich', Fragen.LIEBE_IST);
        this.keywordMappings.set('Liebe bedeutet', Fragen.LIEBE_IST);
        this.keywordMappings.set('Liebe', Fragen.LIEBE_IST);
        this.keywordMappings.set('Liäbi isch', Fragen.LIEBE_IST);
    }

    private initTick() {
        this.keywordMappings.set('Mein Tick', Fragen.TICK);
        this.keywordMappings.set('Meine Macke', Fragen.TICK);
        this.keywordMappings.set('Unser Tick', Fragen.TICK);
        this.keywordMappings.set('Min Tigg', Fragen.TICK);
    }

    private initVerfuehren() {
        this.keywordMappings.set('So verführe ich', Fragen.VERFUEHRE_ICH);
        this.keywordMappings.set('So verführen wir', Fragen.VERFUEHRE_ICH);
    }
}

KeywordMappings.main();
