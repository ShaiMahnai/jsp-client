export const Strings = {
    thbrInput: 'שם הפריט/ קיט',
    vin: 'מספר שלדה',
    license_plate: 'מספר רישוי',
    manufacturer: 'יצרן',
    yearOfProduction: 'שנת ייצור',
    commercialAlias: 'כינוי מסחרי',
    searchTransportTitle: 'חפש לפי חלקים',
    searchPartTitle: 'חפש פריט',
    SUBMIT: 'שלח',
    RESET: 'אפס',
}
export const getString = (key: string): string => {
    // @ts-ignore
    const val =  Strings[key];
    return val? val :''
};
