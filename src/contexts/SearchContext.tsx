import { createContext, ReactNode, useContext, useEffect, useState } from "react";
import { api } from "../services/api";

interface CarData {
    nome: string;
    codigo: string;
}

interface FipeResult {
    valor: string;
    modelo: string;
}

interface CarValueParsed {
    label: string;
    id: string;
}

interface SearchContextProvider {
    brands: CarData[];
    brandSelected: CarValueParsed | null;
    models: CarData[];
    modelSelected: CarValueParsed | null;
    years: CarData[];
    yearSelected: CarValueParsed | null;
    fipeResult: FipeResult;
    setModel: (model: CarData[]) => void;
    setYear: (year: CarData[]) => void;
    setFipeResult: (fipeValue: FipeResult) => void;
    handleClickBrand: (brandValue: CarValueParsed | null) => void;
    handleClickModel: (modelValue: CarValueParsed | null) => void;
    handleClickYear: (yearValue: CarValueParsed | null) => void;
    setBrandSelectedToBackSearch: (value: CarValueParsed | null) => void;
    setModelSelectedToBackSearch: (value: CarValueParsed | null) => void;
    setYearSelectedToBackSearch: (value: CarValueParsed | null) => void;
}

interface SearchProviderProps {
    children: ReactNode
}

export const SearchContext = createContext<SearchContextProvider>({} as SearchContextProvider);

export function SearchProvider({children}: SearchProviderProps) {
    const [ brands, setBrands ] = useState<CarData[]>([]);
    const [ brandSelected, setBrandSelected ] = useState<CarValueParsed | null>({} as CarValueParsed);
    const [ models, setModels ] = useState<CarData[]>([]);
    const [ modelSelected, setModelSelected ] = useState<CarValueParsed | null>({} as CarValueParsed);
    const [ years, setYears ] = useState<CarData[]>([]);
    const [ yearSelected, setYearSelected ] = useState<CarValueParsed | null>({} as CarValueParsed)
    const [ fipeResult, setFipeResults ] = useState<FipeResult>({} as FipeResult)

    useEffect(() => {
        setBrandSelected(null);
        setModelSelected(null);
        
        api.get("marcas")
            .then(({ data }) => {
                setBrands([...data])
                setModels([]);
            });
    }, [])

    function handleClickBrand(brandValue: CarValueParsed) {
        setModelSelected(null);
        setYearSelected(null)
        setBrandSelected(brandValue);
    }

    function handleClickModel(modelValue: CarValueParsed) {
        setYearSelected(null)
        setModelSelected(modelValue);
    }

    function handleClickYear(yearValue: CarValueParsed) {
        setYearSelected(yearValue);
    }

    function setModel(model: CarData[]) {
        setModels(model)
    }

    function setYear(year: CarData[]) {
        setYears(year)
    }

    function setFipeResult(fipeValue: FipeResult) {
        setFipeResults(fipeValue)
    }

    function setBrandSelectedToBackSearch(value: CarValueParsed) {
        setBrandSelected(value)
    }

    function setModelSelectedToBackSearch(value: CarValueParsed) {
        setModelSelected(value)
    }

    function setYearSelectedToBackSearch(value: CarValueParsed) {
        setYearSelected(value)
    }

    return (
        <SearchContext.Provider value={{
            brands,
            brandSelected,
            models,
            modelSelected,
            setModel,
            years,
            yearSelected,
            setYear,
            fipeResult,
            setFipeResult,
            handleClickBrand,
            handleClickModel,
            handleClickYear,
            setBrandSelectedToBackSearch,
            setModelSelectedToBackSearch,
            setYearSelectedToBackSearch
        }}>
            {children}
        </SearchContext.Provider>
    );
}