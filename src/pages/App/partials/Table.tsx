import {Paper, Table as TableMaterial, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";
import {SearchResponse} from "../../../Api/api.types";
import ghLogo from "../../../icons/GHLogo.png"

interface OwnProps {
    searchResponse: SearchResponse | undefined
}

export const Table = ({searchResponse}: OwnProps): JSX.Element => {


    if(undefined === searchResponse){
       return <p>Search something</p>
    }

    return <TableContainer component={Paper}>
        <TableMaterial sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Project</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">User</TableCell>
                </TableRow>
            </TableHead>
            {searchResponse.items.map((item) => {
                    return <TableBody key={item.id}>
                        <TableRow
                            sx={{'&:last-child td, &:last-child th': {border: 0}}}
                        >
                            <TableCell component="th" scope="row">{item.full_name}
                                <a href={item.clone_url} target="_blank">
                                    <img src={ghLogo}/>
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
                })
            }
        </TableMaterial>
    </TableContainer>
}