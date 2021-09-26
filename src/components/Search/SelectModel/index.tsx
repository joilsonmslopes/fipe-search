import TextField from "@mui/material/TextField";
import Autocomplete from "@mui/material/Autocomplete";
import Stack from "@mui/material/Stack";
import { useContext, useEffect } from "react";
import { SearchContext } from "../../../contexts/SearchContext";
import { api } from "../../../services/api";

interface Model {
    label: string;
    id: string;
}

export function SelectModel() {
    const { 
        models, 
        modelSelected, 
        setModel, 
        brandSelected, 
        handleClickModel,
    } = useContext(SearchContext);

    useEffect(() => {
        if(!brandSelected || brandSelected.id === undefined) {
            return;
        }
        setModel([])
        
        api.get(`marcas/${brandSelected.id}/modelos`)
        .then(({data}) => {
            handleClickModel(null)
            setModel([...data.modelos])
        })
        
    }, [brandSelected])

    const modelsParsed = models.map(model => {
        const newModel = {
            label: model.nome,
            id: model.codigo
        }

        return newModel;
    })

    return (
        <Stack spacing={2} sx={{ width: 400, paddingTop: 2 }}>
            <Autocomplete
                id="model"
                options={modelsParsed}
                onChange={(event, value: Model) => handleClickModel(value)}
                getOptionLabel={(option) => option.label || ""}
                isOptionEqualToValue={(option, value) => option.label === value.label}
                value={modelSelected ? modelSelected : null}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Modelos" />}
            />
        </Stack>
    );
}