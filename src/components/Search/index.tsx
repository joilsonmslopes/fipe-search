import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { ButtonSearch } from "./ButtonSearch";
import { SelectBrand } from "./SelectBrand";
import { SelectModel } from "./SelectModel";
import { SelectYear } from "./SelectYear";
import { Container, Content } from "./styles";

export function Search() {
    const { modelSelected } = useContext(SearchContext);
    return (
        <>
            <Container>
                <h2>Consulte o valor de um veículo de forma gratuita</h2>
                <Content>
                    <SelectBrand />
                    <SelectModel />
                    { modelSelected !== null &&
                        <SelectYear />
                    }
                    <ButtonSearch />
                </Content>
            </Container>
        </>
    );
}