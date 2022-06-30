import {
    Alert,
    Paper,
    Table as TableMaterial,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow
} from "@mui/material";
import {SearchResponse} from "../../../Api/api.types";
import ghLogo from "../../../icons/ghLogo.svg"

interface OwnProps {
    searchResponse: SearchResponse | undefined | "error"
    elementsPerPage: number
    pageNumber: number
}

export const Table = ({searchResponse, elementsPerPage, pageNumber}: OwnProps): JSX.Element => {


    if(undefined === searchResponse){
       return  <Alert severity="info">Search for something</Alert>
    }

    if('error' === searchResponse){
        return <Alert severity="error">Something went wrong</Alert>
    }

    if(0 === searchResponse.total_count){
        return <Alert severity="warning">Nothing found</Alert>
    }

    const minIdx = pageNumber * elementsPerPage-elementsPerPage
    const maxIdx = pageNumber * elementsPerPage

    return <TableContainer component={Paper}>
        <TableMaterial sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Project</TableCell>
                    <TableCell>GitHub</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">User</TableCell>
                </TableRow>
            </TableHead>
            {searchResponse.items.map((item, idx) => {

                    if(minIdx <= idx && maxIdx > idx){
                        return <TableBody key={item.id + idx}>
                            <TableRow
                                sx={{'&:last-child td, &:last-child th': {border: 0}}}
                            >
                                <TableCell >{item.full_name}
                                </TableCell>
                                <TableCell >
                                    <a href={item.clone_url} target="_blank">
                                        <img src={ghLogo} alt="go to GitLab" />
                                    </a>
                                </TableCell>
                                <TableCell align="right">
                                    {item.description}
                                </TableCell>
                                <TableCell align="right">
                                    <a href={item.owner.avatar_url} target="_blank">{item.owner.login}</a>
                                </TableCell>
                            </TableRow>
                        </TableBody>
                    }
                })
            }
        </TableMaterial>
    </TableContainer>
}