import React, { Component } from "react";
import RMapGL from "../../Feed/Maps/MapGL";
import PEOPLE from '../../Feed/Maps/mapPins/people.json'


export default class MapPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <RMapGL
                people={PEOPLE}                     // render these pins
                should_GeoLocate={true}            //should the person be geolocated
                lat={0}
                long={0}
                height={100}                        //put size of react-map-gl here
                width={100}                         //put size of react-map-gl here
            />
        );

    }
}