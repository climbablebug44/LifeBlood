import React, { Component } from "react";
import ReactMapGL, {
	Marker,
	NavigationControl,
	FullscreenControl,
	GeolocateControl,
	FlyToInterpolator,
	Source,
	Layer
} from "react-map-gl";
import Geocoder from 'react-map-gl-geocoder';
import style from './MapGL.module.css';
import API_KEY from './api_key.json';
import 'mapbox-gl/dist/mapbox-gl.css';
import 'react-map-gl-geocoder/dist/mapbox-gl-geocoder.css';
import { clusterLayer, clusterCountLayer, unclusteredPointLayer } from './layers';

const MAPBOX_TOKEN = API_KEY.mapboxgl;

export default class RMapGL extends Component {
	constructor(props) {
		super(props);
		this.PEOPLE = props.people;
		this.height = props.dimentions.height;
		this.width = props.dimentions.width;
		this.mapRef = React.createRef();
		this.geoContainerRef = React.createRef();

		this.state = {
			viewport: {
				latitude: 0,
				longitude: 0,
				zoom: 10
			}
		};

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

	onToggleLoop = (event) => {
		const feature = event.features[0];
		const clusterId = feature.properties.cluster_id;

		const mapboxsource = this
			.mapRef
			.current
			.getMap()
			.getSource('people');
		mapboxsource.getClusterExpansionZoom(clusterId, (err, zoom) => {
			if (err) {
				return;
			}

			this.changeViewport({
				...this.state.viewport,
				longitude: feature.geometry.coordinates[0],
				latitude: feature.geometry.coordinates[1],
				zoom,
				transitionDuration: 500
			});
		});
	}

	changeViewport = (newViewport) => {
		this.setState({ viewport: newViewport });
	}

	componentDidMount() {
		try {
			this
				.props
				.onRef(this)
		}
		catch (err) {
		}
	}
	componentWillUnmount() {
		try {
			this
				.props
				.onRef(undefined)
		}
		catch (err) {
		}
	}

	returnViewportLatLong()
	{
		//var x = this.state.viewport;
		return "hello";
//		return [x.latitude, x.longitude];
	}

	goTo(index) {
		this.changeViewport({
			...this.state.viewport,
			longitude: this.PEOPLE.features[index].geometry.coordinates[0],
			latitude: this.PEOPLE.features[index].geometry.coordinates[1],
			transitionDuration: 4000,
			zoom: 14,
			transitionInterpolator: new FlyToInterpolator()
		});
	};

	drawInformationLayer = () => {
		if (this.state.viewport.zoom >= 15)
			return (this.PEOPLE.features.map((person, index) => (
				<Marker
					latitude={person.geometry.coordinates[1]}
					longitude={person.geometry.coordinates[0]}
					key={`marker-${index}`}
				>
					<div className={style.person_name}>
						{person.properties.name}
					</div>
				</Marker>
			)));
	}

	render() {
		const { viewport } = this.state;
		return (
			<div
				style={{
					height: this.height + 'vh',
					width: this.width + 'vw'
				}}>
				<div
					ref={this.geoContainerRef}
					style={{
						position: "absolute",
						top: this.props.geocoder.top,
						right: this.props.geocoder.right,
						zIndex: 1
					}} />
				<ReactMapGL
					{...viewport}
					ref={this.mapRef}
					width="100%"
					height="100%"
					style={{
						position: 'relative'
					}}
					mapStyle="mapbox://styles/mapbox/navigation-day-v1"
					onViewportChange={this.changeViewport}
					mapboxApiAccessToken={MAPBOX_TOKEN}
					interactiveLayerIds={[clusterLayer.id]}
					onClick={this.onClickEvent}>

					<Geocoder
						mapRef={this.mapRef}
						containerRef={this.geoContainerRef}
						mapboxApiAccessToken={MAPBOX_TOKEN}
						onViewportChange={this.changeViewport}
						position="top-right"
						transitionDuration={2} />

					<GeolocateControl
						className={style.geolocate}
						positionOptions={{
							enableHighAccuracy: false
						}}
						trackUserLocation={true}
						fitBoundsOptions={{
							maxZoom: 13,
							minZoom: 10
						}}
						auto />

					<Source
						id="people"
						type="geojson"
						data={this.PEOPLE}
						cluster={true}
						clusterMaxZoom={14}
						clusterRadius={50}>
						<Layer {...clusterLayer} />
						<Layer {...clusterCountLayer} />
						<Layer {...unclusteredPointLayer} />
					</Source>

					{this.drawInformationLayer()}

					<div className={style.fullscreen}>
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
