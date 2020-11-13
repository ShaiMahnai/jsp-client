import {TextField} from "@material-ui/core";
import {formStyles} from "../../styles/form";
import {getString} from "../../Strings";
import SearchIcon from "@material-ui/icons/Search";
import React from "react";

interface TextFieldInputProps {
    name: string,
}


export const TextFieldInput = (props: TextFieldInputProps) => {
    const {name} = props;
    return <TextField
        style={formStyles.input}
        id={name}
        label={getString(name)}
        InputLabelProps={{
            style: formStyles.inputLabelProps
        }}
        variant="filled"
        InputProps={{
            endAdornment: <SearchIcon/>
        }}
    />
}