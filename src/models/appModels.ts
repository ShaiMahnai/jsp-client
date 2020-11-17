
export enum InputFieldType {
    Text,
    AutoComplete,
    AutoCompleteSingle
}

export interface Field {
    key: string,
    type: InputFieldType
}