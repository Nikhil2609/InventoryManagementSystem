"use client"
import { Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

interface TableProps {
    columns: string[];
    rows: any[]
}

const CustomTable: React.FC<TableProps> = ({
    columns,
    rows
}) => {
    return (
        <Paper elevation={3}>
            <TableContainer sx={{ maxHeight: "70vh" }}>
                <StyledTable stickyHeader>
                    <TableHead>
                        {columns.map((column) => {
                            return (
                                <TableCell className="theme-bg">
                                    {column}
                                </TableCell>
                            )
                        })
                        }
                    </TableHead>

                    <TableBody>
                        {rows?.length > 0 ?
                            rows.map((row: any) => {
                                return (
                                    <TableRow>
                                        {Object.keys(row).map((key) => {
                                            return (
                                                <>
                                                    <TableCell key={key}>
                                                        {row[key]}
                                                    </TableCell>
                                                </>
                                            )
                                        })
                                        }
                                    </TableRow>
                                )
                            })
                            :
                            <TableRow>
                                <TableCell colSpan={columns.length} align="center">
                                    No data available
                                </TableCell>
                            </TableRow>

                        }
                    </TableBody>
                </StyledTable>
            </TableContainer>
        </Paper>
    );
}

export default CustomTable;

const StyledTable = styled(Table)({
    "& .MuiTableHead-root": {
        "& .MuiTableCell-root:first-child": {
            borderTopLeftRadius: "4px"
        },
        "& .MuiTableCell-root:last-child": {
            borderTopRightRadius: "4px"
        }
    },
});