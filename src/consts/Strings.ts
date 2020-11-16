export const Strings = {
    thbrInput: 'שם הפריט/ קיט',
    part_name: 'שם הפריט/ קיט',
    vin: 'מספר שלדה',
    license_plate: 'מספר רישוי',
    manufacturer: 'יצרן',
    yearOfProduction: 'שנת ייצור',
    commercialAlias: 'כינוי מסחרי',
    serial_number: 'מספר סידורי',
    name: 'שם',
    image: 'תמונה',
    parts: 'חלקים',
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
