import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";

import {
    getPendingSelector,
    getTodosSelector,
    getErrorSelector,
} from "../store/todo/selectors";
import { fetchTodoRequest } from "../store/todo/actions";
import { createStyles, makeStyles, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Theme, withStyles } from "@material-ui/core";

const StyledTableCell = withStyles(() =>
    createStyles({
        head: {
            backgroundColor: '#fff',
            color: '#000',
            fontWeight: 600,
        },
        body: {
            fontSize: 14,
            textTransform: 'capitalize',
        },
    }),
)(TableCell);

const StyledTableRow = withStyles((theme: Theme) =>
    createStyles({
        root: {
            '&:nth-of-type(odd)': {
                backgroundColor: theme.palette.action.hover,
            },
        },
    }),
)(TableRow);

const useStyles = makeStyles({
    table: {
        minWidth: 700,
    },
    container: {
        maxHeight: 440,
    },
});
const TodoList = () => {
    const classes = useStyles();
    const dispatch = useDispatch();
    const pending = useSelector(getPendingSelector);
    const todos = useSelector(getTodosSelector);
    const error = useSelector(getErrorSelector);

    useEffect(() => {
        dispatch(fetchTodoRequest());
    }, [dispatch]);

    return (
        <>
            <div style={{ padding: "15px" }}>
                {pending ? (
                    <div>Loading...</div>
                ) : error ? (
                    <div>Error</div>
                ) : (
                    <TableContainer component={Paper} className={classes.container}>
                        <Table className={classes.table} aria-label="customized table" stickyHeader>
                            <TableHead>
                                <TableRow>
                                    <StyledTableCell>Id</StyledTableCell>
                                    <StyledTableCell align="left">User Id</StyledTableCell>
                                    <StyledTableCell align="left">Title</StyledTableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {todos.map((rowItem: any, index: any) => (
                                    <StyledTableRow key={++index}>
                                        <StyledTableCell component="th" scope="row">
                                            {rowItem.id}
                                        </StyledTableCell>
                                        <StyledTableCell align="left">{rowItem.userId}</StyledTableCell>
                                        <StyledTableCell align="left">{rowItem.title}</StyledTableCell>
                                    </StyledTableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                )}
            </div>
        </>
    );
};

export default TodoList;