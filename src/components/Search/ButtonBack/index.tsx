import { useContext } from "react";
import Button from "@mui/material/Button";
import { useRouter } from "next/router"
import { SearchContext } from "../../../contexts/SearchContext";

export function ButtonBack () {
    const { 
        setBrandSelectedToBackSearch, 
        setModelSelectedToBackSearch, 
        setYearSelectedToBackSearch 
    } = useContext(SearchContext);

    const router = useRouter();

    function handleBackToSearch() {
        setBrandSelectedToBackSearch(null)
        setModelSelectedToBackSearch(null)
        setYearSelectedToBackSearch(null)
        router.push("/");
    }

    return (
        <Button
            variant="contained"
            onClick={handleBackToSearch}
            color="primary"
            sx={{ width: 400, padding: 2, borderRadius: 10}}
        >
            Nova Pesquisa
        </Button>
    );
}