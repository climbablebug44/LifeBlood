import React, { Component } from "react";
import RMapGL from "./Maps/MapGL";
import styles from './mappage.module.css';
import Loader from "../LoadingPage/loader";

const drawerWidth = 300;
const subheadingMessage = "Available Donors nearby";

export default class MapPage extends Component {
	constructor(props) {
		super(props);
		this.selected = -1;
		this.state = {
			data: null
		}
	}

	componentDidMount() {
		fetch("http://localhost:4000/api/feed/").then(
			response => {
				if (response.status !== 200) {
					throw new Error("invalid response from server");
				}
				return response.json()
			}
		).then(data_ => {
			this.setState({
				data: data_
			})
		}).catch(error => {
			console.log("abcd", error);
		});
	}

	handleListItemClick = (index, event) => {
		this.selected = index;
		//this.forceUpdate();
		this
			.child
			.goTo(index);
	};


	render() {
		if (this.state.data !== null) {
			return (

				<div className={styles.container}>
					<div className={styles.list}>
						<p>Nearby Available Users</p>
						<ul>
							{this.state.data.features.map((person, index) => (
								<li onClick={(event) => this.handleListItemClick(index, event)} className={styles['list-item']} key={index}>
									<div className={styles.name}>
										{person.properties.name}
									</div>
									<div className={styles.group}>
										{person.properties.bloodGrp}
									</div>
								</li>
							))}
						</ul>
					</div>
					<div className={styles.map}>
						<RMapGL people={this.state.data} //{/* fetch from server */}
							should_GeoLocate={true}
							onRef={ref => (this.child = ref)}
							dimentions={{
								height: 100,
								width: 100
							}} //height width as vh and vw
							visibleGeocoder={true}
							geocoder={{ top: 20, right: 5 }}
						/>
					</div>

				</div>
			);


		}
		else {
			return (<React.Fragment>

			</React.Fragment>);
		}
	}
}