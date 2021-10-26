import React from "react";
import ReactMapGL, {NavigationControl} from "react-map-gl";
import API_KEY from './api_key.json';

export default class FeedMap extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            viewport: {
                latitude: props.center.lat,
                longitude: props.center.long,
                zoom: 15
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
                        : 10
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
                <div>
                    <NavigationControl />
                </div>
                </ReactMapGL>
            </React.Fragment>
        );
    }
}