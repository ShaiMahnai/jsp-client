export interface SearchTransportRequest extends HTMLFormElement{
    thbrInput: string;
}

export interface SearchTransportResponse {
    manufacturer: string;
    yearOfProduction: number;
    vin: string;
    commercialAlias: string;
}

