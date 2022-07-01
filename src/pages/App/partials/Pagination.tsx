import {SearchResponse} from "../../../Api/api.types";
import {Grid, MenuItem, Pagination as PaginationComponent, Select} from "@mui/material";
import {Dispatch, useEffect, useState} from "react";


interface OwnProps {
    searchResponse: SearchResponse | undefined | "error"
    elementsPerPage: number
    pageNumber: number
    setElementsPerPage: Dispatch<number>
    setPageNumber: Dispatch<number>
}

export const Pagination = ({searchResponse, elementsPerPage, setElementsPerPage,setPageNumber, pageNumber}: OwnProps): JSX.Element => {

    const selectValuePerPages = [10, 20, 30, 50, 100]

    const [pages, setPages] = useState<number>( 1)

    useEffect(()=>{
        if("error" !== searchResponse && undefined !== searchResponse){
            setPages(Math.ceil(searchResponse.total_count/elementsPerPage))
        }
    },[elementsPerPage,searchResponse])

    if (undefined === searchResponse || "error" === searchResponse || 0 === searchResponse.total_count) {
        return <></>
    }

    const handleChange = (event: React.ChangeEvent<unknown>, value: number) => {
        setPageNumber(value);
    };

    return <>
        <Grid container
              direction="row"
              justifyContent="center"
              alignItems="center"
              sx={{mt: 3}}>
            <Grid item xs={8}>
                 Total found: {searchResponse.total_count}
            </Grid>
                <Grid item xs={2}>
                Per page:
                </Grid>
            <Grid item xs={2}>
                <Select
                    name="elPerPage"
                    id="elPerPage"
                    onChange={(e) => setElementsPerPage(e.target.value as unknown as number)}
                    value={elementsPerPage}
                >
                    {selectValuePerPages.map((value) => {
                        return <MenuItem key={value} value={value}>{value}</MenuItem>
                    })}
                </Select>
            </Grid>
            <PaginationComponent onChange={handleChange} sx={{mt: 3}} count={pages} page={pageNumber} color="primary"/>
        </Grid>
    </>
}
