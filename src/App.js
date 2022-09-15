import React from 'react';
import { CssBaseline, Grid } from '@material-ui/core';
import Header from './components/Header/Header';
import List from './components/List/List';
import Map from './components/Map/map';

const App = () => {
    return (
        <>
            <CssBaseline />
            <Header />

            <Grid container spacing={3} style={{ width: '100%'}}> 
                <Grid item xs={12} md={4}></Grid>
                    <Map />
            </Grid>
            <Grid item xs={12} md={8}>
                    <List />
            </Grid>
        
        </>
    );
}

export default App;