import React, { Component } from "react";
import {
	ListItemText,
	Box,
	Drawer,
	AppBar,
	CssBaseline,
	Toolbar,
	List,
	ListSubheader,
	ListItemButton
} from "@mui/material";
import RMapGL from "./Maps/MapGL";
import Navbar from "../temp/jeetu";
import style from './mappage.module.css';
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
				<Box
					sx={{
						display: "flex",
						maxWidth: 360,
						bgcolor: 'background.paper'
					}}
					style={{ backgroundColor: "white" }}
				>
					<CssBaseline />
					<AppBar
						position="fixed"
						sx={{
							zIndex: (theme) => theme.zIndex.drawer + 1
						}}>
						<Navbar
							{...this.props.navbar}
						/>
					</AppBar>
					<Drawer
						variant="permanent"
						sx={{
							width: drawerWidth,
							flexShrink: 0,
							[`& .MuiDrawer-paper`]: {
								width: drawerWidth,
								boxSizing: 'border-box',
								overflowX: 'hidden',
								overflowY: 'hidden',
								'&:hover': {
									overflowY: 'auto'
								},
								'&::-webkit-scrollbar': {
									display: 'none'
								}
							}
						}}>
						<Toolbar />
						<Box
							sx={{
								width: '100%',
								maxWidth: 360,
								bgcolor: 'background.paper'
							}}
							style={{ backgroundColor: "white" }}
						>
							<List component="nav" aria-label="list"
								className={style.listitem}
							>
								<ListSubheader className={style.listitem}>{subheadingMessage}</ListSubheader>
								{this.state.data.features.map((person, index) => (
									<ListItemButton
										className={style.item}
										selected={this.selected === index}
										onClick={(event) => this.handleListItemClick(index, event)}>
										<ListItemText
											primary={`${person.properties.bloodGrp}  : ${person.properties.name}`}
											//secondary={person.properties.} />
											/>
									</ListItemButton>
								))}
							</List>
						</Box>
					</Drawer>

					<Box component="main" sx={{
						flexGrow: 1,
						p: 3
					}}
						style={{ backgroundColor: "white", marginLeft: "5px" }}
					>
						<Toolbar />
						<RMapGL people={this.state.data} //{/* fetch from server */}
							should_GeoLocate={true}
							onRef={ref => (this.child = ref)}
							dimentions={{
								height: 84,
								width: 77
							}} //height width as vh and vw
							visibleGeocoder={true}
							geocoder={{ top: 100, right: 30 }}
						/>
					</Box>
				</Box>
			);
		}
		else{
			return(<React.Fragment>
				<Loader/>
			</React.Fragment>);
		}
	}
}