import React, { Component } from "react";
import { ListItem, ListItemText, Box, Drawer, AppBar, CssBaseline, Toolbar, List, Typography, Divider } from "@mui/material";
import RMapGL from "../../Feed/Maps/MapGL";
import Header from "../../Header/Header";
import PEOPLE from '../../Feed/Maps/mapPins/people.json';
import style from './mappage.module.css'

const drawerWidth = 300;    

export default class MapPage extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(
            <Box sx={{ display: 'flex' }}>
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
                    <Box sx={{ overflow: 'auto' }}>
                        <List className={style.list}>
                            {PEOPLE.map((person, index) => (
                                <ListItem  className={style.li}>
                                    <ListItemText className={style.li_t} primary={`${person.id}: ${person.name}`} secondary={person.bloodG} />
                                </ListItem>
                            ))}
                        </List>
                        <Divider />
                    </Box>
                </Drawer>
                <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
                    <Toolbar />
                    <RMapGL
                    people={PEOPLE}                     // render these pins
                    should_GeoLocate={true}            //should the person be geolocated
                    center={{lat:0, long:0}}            // center of the map
                    dimentions={{height: 82, width: 77}}  //height width as vh and vw
                    />
                </Box>
            </Box>
        );
    }
}