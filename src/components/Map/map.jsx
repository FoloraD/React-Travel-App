import React from 'react';
import GoogleMapReact from "google-map-react";
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';
import { Paper, Typography, useMediaQuery } from '@mui/material';
import LocationOnOutlinedIcon from "@material-ui/icons/LocationOnOutlined"
import  Rating  from '@material-ui/lab/Rating';

import useStyles from './styles.js'
import mapStyles from './mapStyles.js';

const Map = ({setCoordinates, setBounds, coordinates, places, setChildClicked }) => {
    const classes = useStyles();
    const matches = useMediaQuery('(min-width:600px)');


    return (
        <div className={classes.mapContainer}>
            <GoogleMapReact
                bootstrapURLKeys={{ key: process.env.REACT_APP_MAP_API_KEY }}
                defaultCenter={coordinates}
                center={coordinates}
                defaultZoom={14}
                margin={[50, 50, 50, 50]}
                options={{ disableDefaulUI: true, zoomControl:true, styles: mapStyles }}
                onChange={(e) => {

                    setCoordinates({ lat: e.center.lat, lng: e.center.lng });
                    setBounds({ ne: e.marginBounds.ne, sw: e.marginBounds.sw });
                }}
                onChildClick={(child)=> setChildClicked(child) }
            >
                <h1>Map</h1>
            

            </GoogleMapReact>

        </div>
    );
}

export default Map;