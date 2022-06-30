import {Form} from "./partials/Form";
import {Table} from "./partials/Table";
import {Pagination} from "./partials/Pagination";
import {useState} from "react";
import {SearchResponse} from "../../Api/api.types";

export const App = (): JSX.Element => {

    const [searchResponse, setSearchResponse] = useState<SearchResponse | undefined>(undefined)
    const [elementsToShow, setElementsToShow] = useState<number>(10)
    const [pageNumber, setPageNumber] = useState<number>(1)

    return <>
        <Form setSearchResponse={setSearchResponse}/>
        <Table searchResponse={searchResponse}/>
        <Pagination searchResponse={searchResponse}/>
    </>
}