import {Field, InputFieldType} from "../models/appModels";

export const API_ADDRESS = 'http://127.0.0.1:5000'


export const SEARCH_PART_FIELDS :Field[]= [
    {key: 'part_name', type: InputFieldType.AutoComplete},
    {key: 'vin', type: InputFieldType.Text},
    {key: 'license_plate', type: InputFieldType.Text},
]
export const SEARCH_TRANSPORT_FIELDS :Field[]= [
    {key: 'thbrInput', type: InputFieldType.AutoCompleteSingle},
]

export const OPTIONS: string[] = [
    "בטנה קדמית",
    "מכסה מיכל עיבוי",
    "פס קישוט דלת קדמי ימין",
    "סט מגבים קדימה",
    "כנף קדמי ימין",
    "מחזיר שמן פולי",
    "מיכל עיבוי",
    "כונס אויר ימין",
    "פולי מנוע",
    "ציר מכסה מנוע",
    "מוט פיתול",
    "גומי משאבת דלק",
    "גריל מגן",
    "פנס ראשי ימין",
    "קרטר",
    "גומי קולר שמן",
    "דלת אחורי שמאל",
    "מיסב גלגל",
    "חישן קראנק",
    "יוניט לחץ שמן",
    "גרמו הגה",
    "צינור עודפים לאינג'קטורים",
    "אינטרקולר",
    "מחזיר שמן קאמשפט",
    "מכסה מילוי שמן",
    "פס קישוט אחורי דלת אחורי ימין",
    "משאבת מצמד עליונה",
    "משאבת מצמד תחתונה",
    "בסיס ידית חיצונית קידמית",
    "כבל הילוכים",
    "מדיד שמן",
    "תפוח ידית הילוכים 1",
    "מתג חלונות נהג",
    "צינורות טורבו",
    "משאבת הגה כוח",
    "ציר דלת אחורי ימין",
    "ציר דלת אחורי שמאל",
    "יוניט אור בלם",
    "מחשב כרית אויר",
    "מיכל פאפ",
    "שטנגות",
    "תומך מגן קדמי",
    "משולשים קדימה",
    "בית מסנן שמן",
    "תומך מגן אחורי",
    "כיסוי וו גרירה",
    "חיישני ABS",
    "כרית אויר נוסע",
    "ידית הילוכים",
    "יונק שמן",
    "חישן טמפרטורה MAP",
    "כנף קדמי שמאל",
    "תושבת בולם קדמי 1",
    "פקק בית תרמוסטט",
    "בטנה קדמי ימין",
    "פדל גז",
    "מזלג מצמד",
    "מנעול מכסה מנוע",
    "תושבת מנוע תחתונה ימין",
    "צינור מים אחורי",
    "גלגל תנופה",
    "רדיאטור מים",
    "כנף אחורי",
    "מחזיר שמן אחורי (גדול יותר)",
    "מנוע",
    "גשר תחתון",
    "מגב אחורי",
    "זרוע מגב אחורי",
    "מנעול דלת קדמי",
    "סטרייקר דלת מטען",
    "צינור מים עליון",
    "יוניט חום 2",
    "ידית דלת קדמי",
    "מסנן סולר",
    "משאבת דלק",
    "פדל מצמד",
    "גומי משאבת שמן",
    "מנגנון חלון קדמי ימין",
    "מסילת אינג'קטורים",
    "ציריה ימין",
    "סטרייקר מנעול דלת קדמית",
    "נאבה קדמית",
    "קרן אויר",
    "תושבת בולם קדמי 2",
    "מנגנון חלון קדמי שמאל",
    "גשר עליון",
    "טפט דלת קדמי שמאל",
    "מגן קדמי",
    "דלת קדמי שמאל",
    "מכסה מנוע",
    "גומי דלת מטען",
    "מנוע מגב אחורי",
    "כרית אויר נהג",
    "עוצר דלת קדמי",
    "גומי פדל ברקס",
    "חישן מסילה",
    "סמל אחורי דלת מטען",
    "תושבת מזלג \\ תחתונה ימין",
    "נקבה חגורת בטיחות קדמי נהג ",
    "משאבת לחץ 2",
    "כבל מכסה מנוע",
    "ידית פנימית קדמית",
    "גומי מיצב",
    "זרוע מגב קדמי ימין",
    "נאבה אחורית",
    "טפט דלת קדמי ימין",
    "מע מצמד",
    "בטנה קדמי שמאל",
    "בוקסה תושבת",
    "מכסה שסתומים",
    "מסנן חלקיקים",
    "חגורת בטיחות קדמי נוסע",
    "קיט טיימינג עם משאבת מים",
    "תושבת גיר",
    "תושבת מנוע עליונה ימין",
    "חישן קאמשאפט",
    "ידית תא מטען",
    "מאורר מנוע",
    "זרוע מגב קדמי שמאל",
    "בית מצערת",
    "דלת מטען",
    "משאבת לחץ",
    "ציר דלת קדמי שמאל תחתון",
    "קיט טיימינג",
    "יוניט חום",
    "גומי מכסה שסתומים",
    "נקבה חגורת בטיחות קדמי נוסע",
    "מכסה מסנן שמן",
    "בולם אחורי",
    "בית מסנן סולר",
    "כיסוי סף אחורי ימין",
    "פח חזית",
    "מזרק אוראה",
    "סמל גריל",
    "שסתום EGR",
    "פילטר אוויר",
    "צינור שימון טורבו",
    "אינג'קטור",
    "גומי פדל מצמד",
    "פס קישוט אחורי דלת אחורי שמאל",
    "צינור מים תחתון",
    "רפידות קדימה",
    "נגד מאורר",
    "מנעול תא מטען",
    "מגב קדמי שמאל",
    "צלחות קדימה",
    "ספוילר למגן אחורי",
    "ספוילר למגן קדמי",
    "מגן קרטר",
    "קישוט גריל מגן",
    "פנס אור מספר",
    "חישן מסילה 2",
    "קולר סולר",
    "ברך הגה",
    "מד כמות אויר",
    "מסנן שמן",
    "גריל רדיאטור",
    "תפוח מזלג",
    "מגב קדמי ימין",
    "בולם קדמי",
    "צלחות אחורה",
    "פלסטיק עליון למגן קדמי",
    "ציר דלת קדמי ימין עליון",
    "בולם דלת מטען",
    "משאבת מים",
    "סתם ראש",
    "ציריה שמאל",
    "משאבת בלם מרכזית",
    "בית מסנן אויר",
    "מוט מייצב",
    "פנס ראשי שמאל",
    "קורה מגן קדמי",
    "מגן אחורי",
    "בית תרמוסטט",
    "חגורת בטיחות קדמי נהג",
    "ידית אורות",
    "משאבת שמן",
    "וסת אויר",
    "יד סרן קדמי",
    "רפידות אחורה",
    "ממיר קטליטי",
    "בורר הילוכים",
    "צינורית עודפים",
    "קולר שמן",
    "דלת קדמי ימין",
    "ציר דלת קדמי ימין תחתון",
    "קורה מגן אחורי",
    "דוושת בלם",
    "כונס אויר שמאל",
    "מיכל משאבת בלם",
    "קאמשפט",
    "פס קישוט דלת קדמי שמאל",
    "בומבה",
    "כיסוי סף אחורי שמאל",
    "תפוח ידית הילוכים 2",
    "בטנה אחורי",
    "גומי משאבת וקום",
    "תפוח הגה ",
    "מתג הנעה",
    "מנוע מגב קדמי",
    "וסת דלק במשאבת לחץ",
    "ציר דלת קדמי שמאל עליון",
    "עוצר דלת אחורי ",
    "דלת אחורי ימין",
    "ניקל מגן קדמי",
    "פלסטיק תחתון",
    "תומך גשר מנוע",
    "כבל מצמד",
    "גומי בית מסנן שמן",
    "משאבת וקום",
    "גרמו בולם",
    "כיסוי ערפל",
    "מד גובה שמן"

];
