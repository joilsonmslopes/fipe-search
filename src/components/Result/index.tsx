import { useContext } from "react";
import { SearchContext } from "../../contexts/SearchContext";
import { ButtonBack } from "../Search/ButtonBack";
import { Content } from "./styles";
import { Container } from "./styles";

export function Result() {
    const { fipeResult } = useContext(SearchContext);

    return (
        <Container>

            <Content>
                <h1>Tabela Fipe: Preço {fipeResult.modelo}</h1>
                <h2>{fipeResult.valor}</h2>
                <p>Este é o preço de compra do veículo</p>
                <ButtonBack />
            </Content>

        </Container>
    );
}