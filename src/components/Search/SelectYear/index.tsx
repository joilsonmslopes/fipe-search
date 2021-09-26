import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Stack from "@mui/material/Stack";
import { useContext, useEffect } from 'react';
import { SearchContext } from '../../../contexts/SearchContext';
import { api } from '../../../services/api';

interface Year {
    id: string;
    label: string;
}

export function SelectYear() {
    const {
        brandSelected,
        modelSelected,
        years,
        setYear,
        yearSelected,
        handleClickYear
    } = useContext(SearchContext);

    useEffect(() => {
        if(!modelSelected || modelSelected.id === undefined) {
            return;
        }

        api.get(`marcas/${brandSelected.id}/modelos/${modelSelected.id}/anos`)
            .then(({ data }) => {
                handleClickYear(null)
                setYear([...data])
            })

    }, [modelSelected])

    const yearsParsed = years.map(year => {
        const newYears = {
            id: year.codigo,
            label: year.nome
        }

        return newYears;
    })

    return (
        <Stack sx={{ width: 400, paddingTop: 2 }}>
            <Autocomplete
                id="year"
                options={yearsParsed}
                onChange={(event, value: Year) => handleClickYear(value)}
                getOptionLabel={(option) => option.label || ""}
                isOptionEqualToValue={(option, value) => option.label === value.label}
                value={yearSelected ? yearSelected : null}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Ano" />}
            />
        </Stack>
        
    );
}