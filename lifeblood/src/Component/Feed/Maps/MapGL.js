import React, { Component } from "react";
import ReactMapGL, {
  Marker,
  Popup,
  NavigationControl,
  FullscreenControl
} from "react-map-gl";
import PinInfo from "./mapPins/pinInfo";
import Pin from "./mapPins/Pin";
import PEOPLE from './mapPins/people.json'

// enter mapboxgl api key
const MAPBOX_TOKEN = '';


export default class RMapGL extends Component{
  constructor(props){
    super(props);
    this.state = {
      viewport: {
        latitude: 37.785164,
        longitude: -100,
        zoom: 3.5,
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
      <ReactMapGL
        {...viewport}
        width="100vw"
        height="100vh"
        mapStyle="mapbox://styles/mapbox/navigation-day-v1"
        onViewportChange={this._updateViewport}
        mapboxApiAccessToken={MAPBOX_TOKEN}
      >
        {PEOPLE.map(this._renderPin)}

        {this._renderPopup()}

        <div class="fullscreen" >
          <FullscreenControl />
        </div>
        <div className="nav">
          <NavigationControl />
        </div>
      </ReactMapGL>
    );
  }
}


  






/*const MapGL = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.8,
    longitude: -122.4,
    zoom: 14,
    bearing: 0,
    pitch: 0
  });


  return(
    <ReactMapGL
      {...viewport}
      width="100vw"
      height="100vh"
      mapStyle="mapbox://styles/mapbox/dark-v9"
      onViewportChange={setViewport}
      mapboxApiAccessToken={MAPBOX_TOKEN}
    />
  );
  
}

export default  MapGL;*/