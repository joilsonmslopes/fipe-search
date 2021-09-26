import Autocomplete from "@mui/material/Autocomplete";
import TextField from "@mui/material/TextField";
import Stack from "@mui/material/Stack";
import { useContext } from "react";
import { SearchContext } from "../../../contexts/SearchContext";

interface Brand {
    label: string;
    id: string;
}

export function SelectBrand() {
    const { brands, handleClickBrand } = useContext(SearchContext);

    const brandsParsed = brands.map(brand => {
        let newBrands = {
            label: brand.nome,
            id: brand.codigo
        }

        return newBrands;
    });

    return(
        <Stack spacing={2} sx={{ width: 400 }}>
            <Autocomplete
                id="brand"
                options={brandsParsed}
                onChange={(event, value: Brand) => handleClickBrand(value)}
                isOptionEqualToValue={(option, value) => option.label === value.label}
                sx={{ width: 400 }}
                renderInput={(params) => <TextField {...params} label="Marcas" />}
            />
        </Stack>
    );
}