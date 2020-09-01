import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import clsx from 'clsx';
import Chart from '../Chart';
import Deposits from '../Deposits';
import Comments from '../Comments';
import Dashboard from '../dashboard'

const useStyles = makeStyles((theme) => ({
    paper: {
        padding: theme.spacing(2),
        display: 'flex',
        overflow: 'auto',
        flexDirection: 'column',
    },
    fixedHeight: {
        height: 240,
    }
}))

export default function Main(props) {
    const classes = useStyles();
    const fixedHeightPaper = clsx(classes.paper, classes.fixedHeight);
    return (
        <Dashboard {...props.children}>
            <Grid container spacing={3}>
                {/* Chart */}
                <Grid item xs={12} md={8} lg={9}>
                    <Paper className={fixedHeightPaper}>
                        {/* <ToastContainer /> */}
                        <Chart />
                    </Paper>
                </Grid>
                {/* Recent Deposits */}
                <Grid item xs={12} md={4} lg={3}>
                    <Paper className={fixedHeightPaper}>
                        <Deposits />
                    </Paper>
                </Grid>
                {/* Recent Orders */}
                <Grid item xs={12}>
                    <Paper className={classes.paper}>
                        <Comments />
                    </Paper>
                </Grid>
            </Grid>
        </Dashboard>
    );
}