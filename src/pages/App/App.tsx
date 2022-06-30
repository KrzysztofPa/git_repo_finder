import {Form} from "./partials/Form";
import {Table} from "./partials/Table";
import {Pagination} from "./partials/Pagination";
import {useState} from "react";
import {SearchResponse} from "../../Api/api.types";
import {Container, createTheme, CssBaseline, Grid, ThemeProvider} from "@mui/material";

export const App = (): JSX.Element => {

    const [searchResponse, setSearchResponse] = useState<SearchResponse | undefined | 'error'>(undefined)
    const [elementsPerPage, setElementsPerPage] = useState<number>(10)
    const [pageNumber, setPageNumber] = useState<number>(1)

    const theme = createTheme();

    return (
        <ThemeProvider theme={theme}>
            <CssBaseline/>
            <Container component="main" maxWidth="xs">
                <Form setSearchResponse={setSearchResponse}/>
            </Container>

            <Container maxWidth="xl">
                <Table searchResponse={searchResponse} elementsPerPage={elementsPerPage} pageNumber={pageNumber}/>
            </Container>

            <Container maxWidth="xs">
                <Pagination searchResponse={searchResponse}
                            elementsPerPage={elementsPerPage}
                            pageNumber={pageNumber}
                            setElementsPerPage={setElementsPerPage}
                            setPageNumber={setPageNumber}/>
            </Container>

        </ThemeProvider>
    )
}