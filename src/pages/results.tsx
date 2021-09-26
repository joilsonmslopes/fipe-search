import Head from "next/head";
import { Result } from "../components/Result";
import { Container } from "../styles/results";

export default function Results() {
    return (
        <Container>
            <Result />
        </Container>
    );
}