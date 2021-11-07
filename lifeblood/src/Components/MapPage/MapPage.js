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
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RMapGL from "./Maps/MapGL";
import Navbar from "../temp/jeetu";
import geojson from './Maps/people';

const drawerWidth = 300;
const subheadingMessage = "Available Donors nearby";
const Theme = createTheme({
	palette: {
		primary: {
			light: '#ff7961',
			main: '#f44336',
			dark: '#ba000d',
			contrastText: '#000'
		}
	}
});

export default class MapPage extends Component {
	constructor(props) {
		super(props);
		this.selected = -1;
	}

	handleListItemClick = (index, event) => {
		this.selected = index;
		//this.forceUpdate();
		this
			.child
			.goTo(index);
	};

	render() {
		return (
			<Box
				sx={{
					display: "flex",
					maxWidth: 360,
					bgcolor: 'background.paper'
				}}>
				<CssBaseline />
				<AppBar
					position="fixed"
					sx={{
						zIndex: (theme) => theme.zIndex.drawer + 1
					}}>
					<Navbar />
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
						}}>
						<ThemeProvider theme={Theme}>
							<List component="nav" aria-label="list" color="primary">
								<ListSubheader>{subheadingMessage}</ListSubheader>
								{geojson.features.map((person, index) => (
									<ListItemButton
										selected={this.selected === index}
										onClick={(event) => this.handleListItemClick(index, event)}>
										<ListItemText
											primary={`${person.properties.id}. ${person.properties.name}`}
											secondary={person.properties.bloodG} />
									</ListItemButton>
								))}
							</List>
						</ThemeProvider>
					</Box>
				</Drawer>

				<Box component="main" sx={{
					flexGrow: 1,
					p: 3
				}}>
					<Toolbar />
					<RMapGL people={geojson}
						should_GeoLocate={true}
						onRef={ref => (this.child = ref)}
						dimentions={{
							height: 82,
							width: 77
						}} //height width as vh and vw
						visibleGeocoder={true}
						geocoder={{top: 100, right: 30}}
					/>
				</Box>
			</Box>
		);
	}
}