import {Paper, Table as TableMaterial, TableBody, TableCell, TableContainer, TableHead, TableRow} from "@mui/material";


export const Table = (): JSX.Element => {


    return <TableContainer component={Paper}>
        <TableMaterial sx={{minWidth: 650}} aria-label="simple table">
            <TableHead>
                <TableRow>
                    <TableCell>Dessert (100g serving)</TableCell>
                    <TableCell align="right">Project</TableCell>
                    <TableCell align="right">Description</TableCell>
                    <TableCell align="right">Username</TableCell>
                </TableRow>
            </TableHead>
            <TableBody>
                <TableRow
                    sx={{'&:last-child td, &:last-child th': {border: 0}}}
                >
                    <TableCell component="th" scope="row">
                        andrzej
                    </TableCell>
                    <TableCell align="right">Kebab</TableCell>
                    <TableCell align="right">Bardzo dobry kebabikBardzo dobry kebabik Lorem*65Bardzo dobry kebabik Lorem*65Bardzo dobry kebabik Lorem*65Bardzo dobry kebabik Lorem*65Bardzo dobry kebabik Lorem*65</TableCell>
                    <TableCell align="right">Kebab majster</TableCell>
                </TableRow>
            </TableBody>
        </TableMaterial>
    </TableContainer>
}