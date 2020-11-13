import React, {FormEvent, useState} from "react"
import {getString, Strings} from "../../Strings";
import styles from '../../styles/form.module.css'
import {AutoCompleteInput} from "../autoCompleteInput/autoCompleteInput";
import {TextFieldInput} from "../textFieldInput/TextFieldInput";
import {SearchPartRequest, SearchPartResponse} from "../../models/searchPart";
import {SearchTransportRequest, SearchTransportResponse} from "../../models/searchTransport";

export enum InputFieldType {
    Text,
    AutoComplete
}

interface Field {
    key: string,
    type: InputFieldType
}

interface SearchTransportFormProps {
    title: string,
    lst: string[],
    fields: Field [],
    onSubmit: (values: SearchTransportRequest | SearchPartRequest) => Promise<boolean>
}


export const SearchForm = (props: SearchTransportFormProps) => {
    const {lst, onSubmit, fields, title} = props;
    const [resetKey, setResetKey] = useState<number>(0)
    const [autoCompleteValues, setAutoCompleteValues] = useState<{ key: string, values: string[] }[]>([])
    const [searchResults, setSearchResults] = useState<SearchTransportResponse | SearchPartResponse>()

    const formRef: React.RefObject<HTMLFormElement> = React.createRef();
    const validateForm = (): boolean => {
        return true;
    }


    const resetForm = (e?: { preventDefault: () => void; } | undefined) => {
        e?.preventDefault()
        formRef?.current?.reset();
        setResetKey(resetKey + 1);
        setAutoCompleteValues([]);
        setSearchResults(undefined);
    }


    const handleSubmit = async (event: FormEvent<SearchTransportRequest | SearchPartRequest>) => {
        event.preventDefault();
        const elements: SearchTransportRequest = (event.target as SearchTransportRequest); // OK

        const values: SearchTransportRequest = Object.assign({},
            ...Object.keys(elements).flatMap((key) => (
                elements[key].id ? {
                    [elements[key].id]:
                    autoCompleteValues.find(autoComplete => autoComplete.key === elements[key].id)?.values ||
                    elements[key].value
                } : [])));

        if (validateForm()) {
            const submitSuccess: boolean = await onSubmit(values);
            if (submitSuccess) {
                setSearchResults({
                    manufacturer: 'בדיקה',
                    yearOfProduction: 2222,
                    vin: 'בדיקה',
                    commercialAlias: 'בדיקה'
                });
            }
        }
    }


    const onAutoCompleteChangeValues = (key: string, values: string[]) => {
        const allValues = [...autoCompleteValues];
        const index = allValues.findIndex(autoComplete => autoComplete.key === key);
        if (index > -1) {
            allValues[index].values = values;
        } else {
            allValues.push({key: key, values: values})
        }
        setAutoCompleteValues(allValues);
    }


    return <div>
        <h3>{title}</h3>
        <form
            ref={formRef}
            className={styles.form} onSubmit={handleSubmit}>
            <div className={styles.elementsContainer}>
                {fields.map((field, index) =>
                    field.type === InputFieldType.AutoComplete ?
                        <AutoCompleteInput
                            key={index}
                            options={lst}
                            name={field.key}
                            multiple={true}
                            resetKey={resetKey}
                            onChangeValues={onAutoCompleteChangeValues.bind(this, field.key)}/> :
                        <TextFieldInput key={index} name={field.key}/>
                )}
            </div>
            <div className={styles.submitContainer}>
                <input type="submit" value={Strings.SUBMIT}/>
                <input type="reset" onClick={resetForm} value={Strings.RESET}/>
            </div>
        </form>
        {searchResults &&
        <div className={styles.searchResults}>
            <h4>תוצאות החיפוש</h4>
            {Object.keys(searchResults).map((k: any, index) => <div className={styles.resultItem} key={index}>
            <span>{getString(k)}</span>
            <span>{
                // @ts-ignore
                searchResults[k]
            }</span>
        </div>
            )}
        </div>


        }
    </div>
}
