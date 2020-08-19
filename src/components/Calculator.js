import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        alignContent: 'center',
    },
    paper: {
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary,
    },
    restricted: {
        maxWidth: '100px',
        padding: theme.spacing(4),
        textAlign: 'center',
        color: theme.palette.text.primary
    }
}));

export default function Calculator() {
    const classes = useStyles();
    return (
        <div className={classes.root}>
            <Grid container spacing={3} direction="row" justify="center" alignItems="flex-start" >
                <Grid item>
                    <Paper className={classes.paper}>A</Paper>
                    <input type="number" id="accrued" name="accrued" />
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>=</Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>P</Paper>
                    <input type="number" id="principal" name="accrued" />
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>(1+</Paper>
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>r</Paper>
                    <input type="number" id="rate" name="accrued" />
                </Grid>
                <Grid item>
                    <Paper className={classes.paper}>t)</Paper>
                    <input type="number" id="time" name="accrued" />
                </Grid>
            </Grid>
            <Grid container direction="row" justify="center" alignItems="flex-start">
                <Grid item xs={3}>
                    <Paper className={classes.paper}>Total Accrued Interest:</Paper>
                    <input type="number" id="accruedInterest"></input>
                </Grid>
            </Grid>
        </div>
    )
}