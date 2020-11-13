import Autocomplete from "@material-ui/lab/Autocomplete";
import {formStyles} from "../../styles/form";
import {TextField} from "@material-ui/core";
import {getString} from "../../Strings";
import React from "react";
import {makeStyles} from "@material-ui/core/styles";
import SearchIcon from '@material-ui/icons/Search';

const useStyles = makeStyles(theme => ({
        option: {
            textAlign: 'right',
            direction: "rtl"
        }
    }
));

interface FormElementProps {
    options: string[],
    name: string,
    multiple: boolean,
    resetKey: number,
    onChangeValues: (values: string[]) => void
}

export const AutoCompleteInput = (props: FormElementProps) => {
    const {options, name, multiple, resetKey,onChangeValues} = props;
    const classes = useStyles();

    const onSelectionChanged = (event: React.ChangeEvent<{}>, value: any) => {
        onChangeValues(value);
    };

    return <Autocomplete
        onChange={onSelectionChanged}
        key={resetKey}
        multiple={multiple}
        classes={classes}
        forcePopupIcon={false}
        id={name}
        options={options.sort((a, b) => ('' + a).localeCompare(b))}
        groupBy={(option) => option[0]}
        getOptionLabel={(option) => option}
        style={formStyles.input}
        renderInput={(params) =>
            <TextField {...params}
                       InputLabelProps={{
                           style: formStyles.inputLabelProps
                       }}
                       label={getString(name)}
                       variant="filled"
                       InputProps={{
                           ...params.InputProps,
                           endAdornment: <SearchIcon/>
                       }}
            />}
    />
}