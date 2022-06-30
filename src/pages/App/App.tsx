import {Form} from "./partials/Form";
import {Table} from "./partials/Table";
import {Pagination} from "./partials/Pagination";
import {useState} from "react";
import {SearchResponse} from "../../Api/api.types";
import {Container, createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";

export const App = (): JSX.Element => {

    const [searchResponse, setSearchResponse] = useState<SearchResponse | undefined>(undefined)
    const [elementsToShow, setElementsToShow] = useState<number>(10)
    const [pageNumber, setPageNumber] = useState<number>(1)

    const theme = createTheme();


    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container component="main" maxWidth="xs">
                <Form setSearchResponse={setSearchResponse}/>
            </Container>

            <Container maxWidth="xl">
                <Table searchResponse={searchResponse}/>
            </Container>

            <Container maxWidth="xs">
                <Pagination searchResponse={searchResponse}/>
            </Container>

        </ThemeProvider>
    )
}