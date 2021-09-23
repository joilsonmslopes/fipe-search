import { Container } from "./styles";
import { Typography } from "@mui/material";

export function Header () {
    return (
        <Container>
            <Typography
                variant="h4" 
                component="h1"
                align="center"
            >Tabela Fipe</Typography>
        </Container>
    );
}