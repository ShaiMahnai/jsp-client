import React, {FormEvent, useState} from "react"
import {getString, Strings} from "../../consts/Strings";
import styles from '../../styles/form.module.css'
import {AutoCompleteInput} from "../autoCompleteInput/autoCompleteInput";
import {TextFieldInput} from "../textFieldInput/TextFieldInput";
import {SearchPartRequest} from "../../models/searchPart";
import {SearchTransportRequest} from "../../models/searchTransport";
import {API_ADDRESS} from "../../consts/consts";
import {Field, InputFieldType} from "../../models/appModels";


interface SearchTransportFormProps {
    title: string,
    options: string[],
    fields: Field [],
    results?: any,
    onSubmit: (values: any) => Promise<boolean>
    onReset: () => void
}


export const SearchForm = (props: SearchTransportFormProps) => {
    const {options, onSubmit, fields, title, results, onReset} = props;
    const [resetKey, setResetKey] = useState<number>(0)
    const [autoCompleteValues, setAutoCompleteValues] = useState<{ key: string, values: string[] }[]>([])


    const formRef: React.RefObject<HTMLFormElement> = React.createRef();
    const validateForm = (): boolean => {
        return true;
    }


    const resetForm = (e?: { preventDefault: () => void; } | undefined) => {
        e?.preventDefault()
        formRef?.current?.reset();
        setResetKey(resetKey + 1);
        setAutoCompleteValues([]);
        onReset();
    }


    const handleSubmit = async (event: FormEvent<SearchTransportRequest | SearchPartRequest>) => {
        event.preventDefault();
        const elements: SearchTransportRequest = (event.target as SearchTransportRequest); // OK

        const values = Object.assign({},
            ...Object.keys(elements).flatMap((key) => (
                elements[key].id ? {
                    [elements[key].id]:
                    autoCompleteValues.find(autoComplete => autoComplete.key === elements[key].id)?.values ||
                    elements[key].value
                } : [])));

        if (validateForm()) {
            await onSubmit(values);

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

    const renderResultItem = (element: any, index: number, key?: string) => {
        const isArray = Array.isArray(element);
        const isImage = key?.toLowerCase() === 'image';
        const isObject = !isArray && (typeof element === 'object');

        return <div className={isObject || isArray ? styles.resultArrayItem : styles.resultItem} key={index}>
            {isObject ? Object.keys(element).map((k, i) =>
                    renderResultItem(element[k], i, k)) :
                isImage ? element ? <img src={`${API_ADDRESS}/${element}`} alt="רכיב"/> : '' :
                    key && <span className={styles.keyName}>{getString(key)}</span>}
            {!isObject && !isImage && <span className={styles.value}>{
                isArray ? element.map((item: any, i: number) => renderResultItem(item, i)) :
                    <span>{element}</span>

            }</span>}
        </div>;
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
                            options={options}
                            name={field.key}
                            multiple={true}
                            resetKey={resetKey}
                            onChangeValues={onAutoCompleteChangeValues.bind(this, field.key)}/> :
                    field.type === InputFieldType.AutoCompleteSingle ?
                        <AutoCompleteInput
                            key={index}
                            options={options}
                            name={field.key}
                            multiple={false}
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
        {results &&
        <div className={styles.searchResults}>
            <h4>תוצאות החיפוש</h4>
            {Object.keys(results).map((k: any, index) =>
                renderResultItem(results[k], index, k)
            )}
        </div>


        }
    </div>
}
