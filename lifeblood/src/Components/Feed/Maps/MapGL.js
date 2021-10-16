import React, { Component } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl,
  GeolocateControl
} from "react-map-gl";
import Geocoder from 'react-map-gl-geocoder'
import PinInfo from "./mapPins/pinInfo";
import Pin from "./mapPins/Pin";
import style from './MapGL.module.css';
import API_KEY from './api_key.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';

const MAPBOX_TOKEN = API_KEY.mapboxgl;



export default class RMapGL extends Component{
  constructor(props){
    super(props);

    this.geolocate = this.props.should_GeoLocate;    
    this.height = props.dimentions.height;
    this.width = props.dimentions.width;
    this.mapRef = React.createRef();
    this.geoContainerRef = React.createRef();

    this.state = {
      viewport: {
        latitude: 0,
        longitude: 0,
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

  changeViewport = (newViewport) => {
    this.setState({viewport: newViewport});
  }

  onSelected(viewport, item){
    console.log('Selected: ', item);
}

  
  render() {
    const { viewport } = this.state;

    return (
      <div style={{height: this.height+'vh', width: this.width+'vw'}}>
        <div
          ref={this.geoContainerRef}
          style={{ position: "absolute", top: 100, right: 30, zIndex: 1 }}
        />
        <ReactMapGL
            {...viewport}
            ref={this.mapRef}
            width="100%"
            height="100%"
            style={{position:'relative'}}
            mapStyle="mapbox://styles/mapbox/navigation-day-v1"
            onViewportChange={this.changeViewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            
          >

        <Geocoder
          mapRef={this.mapRef}
          containerRef={this.geoContainerRef}
          mapboxApiAccessToken={MAPBOX_TOKEN}
          onViewportChange={this.changeViewport}
          position="top-right"
          transitionDuration={2}
        />
            
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