import React, { Component } from "react";
import { ListItemText, Box, Drawer, AppBar, CssBaseline, Toolbar, List, ListSubheader, Divider, ListItemButton } from "@mui/material";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import RMapGL from "../../Feed/Maps/MapGL";
import Header from "../../Header/Header";
import PEOPLE from '../../Feed/Maps/mapPins/people.json';
import style from './mappage.module.css';

const drawerWidth = 300;
const subheadingMessage="Available Donors nearby";

export default class MapPage extends Component{
    constructor(props){
        super(props);
        this.selectedIndex = -1;
        this.Theme = createTheme({
            palette:{
                primary:{
                    light: '#ff7961',
                    main: '#f44336',
                    dark: '#ba000d',
                    contrastText: '#000'
                }
            }
        });
    }

    setSelectedIndex(index){
        this.selectedIndex = index;
    }

    handleListItemClick = (event, index) => {
        this.setSelectedIndex(index);
      };

    render(){
        return(
            <ThemeProvider theme={this.Theme}>
                <Box sx={{ display: "flex", maxWidth: 360, bgcolor: 'background.paper' }}>
                    <CssBaseline />
                        <AppBar position="fixed" sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}>
                            <Header/>
                        </AppBar>
                    <Drawer
                        variant="permanent"
                        sx={{
                        width: drawerWidth,
                        flexShrink: 0,
                        [`& .MuiDrawer-paper`]: { width: drawerWidth, boxSizing: 'border-box' },
                        }}>
                        <Toolbar />

                        <Box sx={{ width: '100%', maxWidth: 360, bgcolor: 'background.paper' }}>
                    
                    <List component="nav" aria-label="list">

                        {PEOPLE.map((person, index) => (
                                    <ListItemButton
                                    selected={this.selectedIndex == index}
                                    onClick={(event) => this.handleListItemClick(event, index)}
                                    >
                                        <ListItemText 
                                        primary={`${person.id}: ${person.name}`} secondary={person.bloodG}/>
                                    </ListItemButton>
                                ))}
                    </List>
                    </Box>

                    </Drawer>
                    <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                        <Toolbar />
                        <RMapGL
                        people={PEOPLE}                    // render these pins
                        focus={this.selectedIndex}
                        should_GeoLocate={true}            //should the person be geolocated
                        dimentions={{height: 82, width: 77}}  //height width as vh and vw
                        />
                    </Box>
                </Box>
            </ThemeProvider>
        );
    }
}
