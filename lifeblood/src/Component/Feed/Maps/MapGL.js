import React, { Component } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl
} from "react-map-gl";
import PinInfo from "./mapPins/pinInfo";
import Pin from "./mapPins/Pin";
import PEOPLE from './mapPins/people.json';
import './MapGL.css';

// enter mapboxgl api key
const MAPBOX_TOKEN = '';

export default class RMapGL extends Component{
  constructor(props){
    super(props);
    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
        zoom: 5,
        pitch: 20
      },
      popupInfo: null
    };

    window.test = () => {
      this.setState({
        ...this.state,
        viewport: {
          ...this.state.viewport,
          zoom: this.state.viewport.zoom === 5 ? 1 : 5
        }
      });
    };

  }

  _updateViewport = viewport =>{
    this.setState({viewport});
    //console.log(viewport.pitch, viewport.roll)
  };

  _renderPin = (pin, index) => {
    return(
      <Marker
        key={`marker-${index}`}
        longitude={pin.longitude}
        latitude={pin.latitude}>
          <Pin size={20} onClick={() => this.setState({ popupInfo: pin })} />
        </Marker>
    );
  };

  _renderPopup(){
    const { popupInfo } = this.state;

    return (
      popupInfo && (
        <Popup
          tipSize={5}
          anchor="top"
          longitude={popupInfo.longitude}
          latitude={popupInfo.latitude}
          closeOnClick={false}
          onClose={() => this.setState({ popupInfo: null })}
        >
          <PinInfo info={popupInfo} />
        </Popup>
      )
    );
  }

  render() {
    const { viewport } = this.state;

    return (
      <div className="map-container">
        <ReactMapGL
            {...viewport}
            width="100vw"
            height="90vh"
            mapStyle="mapbox://styles/mapbox/navigation-day-v1"
            onViewportChange={this._updateViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            <GeolocateControl
              className="geolocate"
              positionOptions={{enableHighAccuracy: false}}
              trackUserLocation={true}
              fitBoundsOptions={{maxZoom: 13, minZoom: 10}}
              auto
            />
            {PEOPLE.map(this._renderPin)}

            {this._renderPopup()}

            <div className="fullscreen" >
              <FullscreenControl />
            </div>
            <div className="nav">
              <NavigationControl />
            </div>
          </ReactMapGL>
        </div>
    );
  }
}