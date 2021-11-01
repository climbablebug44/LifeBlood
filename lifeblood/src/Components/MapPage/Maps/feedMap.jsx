import React from "react";
import ReactMapGL, {Marker, NavigationControl} from "react-map-gl";
import API_KEY from './api_key.json';

const ICON = `M20.2,15.7L20.2,15.7c1.1-1.6,1.8-3.6,1.8-5.7c0-5.6-4.5-10-10-10S2,4.5,2,10c0,2,0.6,3.9,1.6,5.4c0,0.1,0.1,0.2,0.2,0.3
  c0,0,0.1,0.1,0.1,0.2c0.2,0.3,0.4,0.6,0.7,0.9c2.6,3.1,7.4,7.6,7.4,7.6s4.8-4.5,7.4-7.5c0.2-0.3,0.5-0.6,0.7-0.9
  C20.1,15.8,20.2,15.8,20.2,15.7z`;
const pinStyle = {
cursor: "pointer",
fill: "#d00",
stroke: "none"
};

export default class FeedMap extends React.Component {
    constructor(props) {
        super(props);
        this.position = {latitude: props.lat, longitude: props.long}
        this.state = {
            viewport: {
                latitude: props.lat,
                longitude: props.long,
                zoom: 9
            }
        };

        this.height = props.dimentions.height;
        this.width = props.dimentions.width;

        window.test = () => {
            this.setState({
                ...this.state,
                viewport: {
                    ...this.state.viewport,
                    zoom: this.state.viewport.zoom === 5
                        ? 1
                        : 19
                }
            });
        };
    }

    changeViewport = (newViewport) => {
        this.setState({ viewport: newViewport });
    }

    render() {
        const { viewport } = this.state;

        return (
            <React.Fragment
                style={{
                    height: this.height + 'vh',
                    width: this.width + 'vw'
                }}>
                <ReactMapGL
                    {...viewport}
                    ref={this.mapRef}
                    width="100%"
                    height="100%"
                    style={{
                        position: 'relative'
                    }}
                    scrollZoom={false}
                    mapStyle="mapbox://styles/mapbox/navigation-day-v1"
                    onViewportChange={this.changeViewport}
                    mapboxApiAccessToken={API_KEY.mapboxgl}
                >
                <Marker {...this.position}>
                    <svg style={{...pinStyle}}><path d={ICON}/></svg>
                </Marker>
                <div>
                    <NavigationControl />
                </div>
                </ReactMapGL>
            </React.Fragment>
        );
    }
}