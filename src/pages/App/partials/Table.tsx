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
}

export const Table = ({searchResponse}: OwnProps): JSX.Element => {


    if (undefined === searchResponse) {
        return <Alert severity="info">Search for something</Alert>
    }

    if ('error' === searchResponse) {
        return <Alert severity="error">Something went wrong</Alert>
    }

    if (0 === searchResponse.total_count) {
        return <Alert severity="warning">Nothing found</Alert>
    }

    return <TableContainer component={Paper}>
        <TableMaterial sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>File</TableCell>
                    <TableCell>GitHub</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">User</TableCell>
                </TableRow>
            </TableHead>
            {searchResponse.items.map((item, idx) => {
                return <TableBody key={"id" + item.path + idx}>
                    <TableRow
                        sx={{'&:last-child td, &:last-child th': {border: 0}}}
                    >
                        <TableCell>{item.name}
                        </TableCell>
                        <TableCell>
                            <a href={item.html_url} target="_blank"  rel="noreferrer" >
                                <img src={ghLogo} alt="go to GitLab"/>
                            </a>
                        </TableCell>
                        <TableCell align="right">
                            {item.repository.description}
                        </TableCell>
                        <TableCell align="right">
                            <a href={item.repository.owner.avatar_url} target="_blank"  rel="noreferrer" >{item.repository.owner.login}</a>
                        </TableCell>
                    </TableRow>
                </TableBody>
            })
            }
        </TableMaterial>
    </TableContainer>
}
