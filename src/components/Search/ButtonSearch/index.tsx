import { useContext } from "react";
import { useRouter } from "next/router";
import Button from "@mui/material/Button";
import Stack from "@mui/material/Stack";
import { SearchContext } from "../../../contexts/SearchContext"
import { api } from "../../../services/api";

interface fipeResult {
    Valor: string;
    Modelo: string;
}

export function ButtonSearch () {
    const router = useRouter();
    const { 
        brandSelected, 
        modelSelected, 
        yearSelected,
        fipeResult,
        setFipeResult
    } = useContext(SearchContext)
    const isAble = brandSelected && modelSelected && yearSelected;

    const brandExists = !brandSelected || brandSelected.id === undefined
    const modelExists = !modelSelected || modelSelected.id === undefined
    const yearExists = !yearSelected || yearSelected.id === undefined

    function handleClickButtonSearch () {
        if(brandExists || modelExists || yearExists) {
            return;
        }

        api.get(`marcas/${brandSelected.id}/modelos/${modelSelected.id}/anos/${yearSelected.id}`)
            .then(({data}) => {
                const parsedData = {
                    valor: data.Valor,
                    modelo: data.Modelo
                }
                setFipeResult(parsedData)
            });
        
        if(fipeResult) {
            router.push("/results");
        }
    }

    return (
        <Stack sx={{ width: 400, paddingTop: 2}}>
            <Button
                sx={{ width: 400, padding: 2}}
                variant="contained"
                disabled={!isAble}
                onClick={handleClickButtonSearch}
            >
                Pesquisar
            </Button>
        </Stack>
    );
}