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
import style from './MapGL.module.css';
import API_KEY from './api_key.json'

const MAPBOX_TOKEN = API_KEY.mapboxgl;

export default class RMapGL extends Component{
  constructor(props){
    super(props);

    const lat = props.center.lat, long=props.center.lang;
    this.geolocate = this.props.should_GeoLocate;
    this.PEOPLE = this.props.people;
    this.height = props.dimentions.height;
    this.width = props.dimentions.width;

    this.state = {
      viewport: {
        latitude: lat,
        longitude: long,
        zoom: 10
      },
      popupInfo: null
    };


    window.test = () => {
      this.setState({
        ...this.state,
        viewport: {
          ...this.state.viewport,
          zoom: this.state.viewport.zoom === 5 ? 1 : 10
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
          <Pin size={30} onClick={() => this.setState({ popupInfo: pin })} />
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

  popupPeople(people){
    if(people!= null)
      return(
        people.map(this._renderPin)
      );
  }

  shouldGeoLocate(permission){
    if(permission)
      return(<GeolocateControl
        className={style.geolocate}
        positionOptions={{enableHighAccuracy: false}}
        trackUserLocation={true}
        fitBoundsOptions={{maxZoom: 13, minZoom: 10}}
        auto
      />);
  }

  render() {
    const { viewport } = this.state;
    return (
      <div style={{height: this.height+'vh', width: this.width+'vw'}}>
        <ReactMapGL
            {...viewport}
            width="100%"
            height="100%"
            style={{position:'relative'}}
            mapStyle="mapbox://styles/mapbox/navigation-day-v1"
            onViewportChange={this._updateViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
          >
            {this.shouldGeoLocate(this.geolocate)}
            {this.popupPeople(this.PEOPLE)}
            {this._renderPopup()}

            <div className={style.fullscreen} >
              <FullscreenControl />
            </div>
            <div className={style.nav}>
              <NavigationControl />
            </div>
          </ReactMapGL>
        </div>
    );
  }
}