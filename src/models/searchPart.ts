export interface SearchPartRequest extends HTMLFormElement {
    part_name: string[];
    vin: string;
    license_plate: string;
}


export interface SearchPartResponse {
    parts: Part[];
    license_plate: string;
    vin: string;
}

export interface Part {
    name: string;
    serial_number: string;
    image?: string;
}
