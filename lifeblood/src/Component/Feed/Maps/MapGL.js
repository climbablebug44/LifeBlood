import React, {useRef, useEffect, useState} from "react";
import mapboxgl from 'mapbox-gl';
import './MapGL.css'

mapboxgl.accessToken = '';
// enter mapboxgl api key

export default class MapGL extends React.PureComponent{
    constructor(props){
        super(props);

        this.state = {
            lng: -70.9,
            lat: 42.35,
            zoom: 9
        }

        this.mapContainer = React.createRef();
    }

    componentDidMount() {
        const { lng, lat, zoom } = this.state;
        const map = new mapboxgl.Map({
            container: this.mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v11',
            center: [lng, lat],
            zoom: zoom
        });
    }

    render(){
        return(
            <div>
                <div ref={this.mapContainer} className="map-container"/>
            </div>
        );
    }
}