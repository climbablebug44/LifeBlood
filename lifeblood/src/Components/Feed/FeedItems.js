import React from 'react';
import styles from './FeedItems.module.css';
import FeedItem from './FeedItem';

export default class FeedItems extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            data: null
        };
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
            //console.log("line",data);
        }).catch(error => {
            console.log("abcd", error);
        });
    }

    render() {
        
        console.log("data: ",this.state.data);
        if(this.state.data !== null)
        {    
            const data = this.state.data.features;
            return(data.map((person, index) => {
                const x = person.properties;
                console.log("xabc",x);
                    return <FeedItem center={{long: person.geometry.coordinates[0], lat: person.geometry.coordinates[1] }} id={x.id} key={x.id} name={x.name} reason={x.reason} age={x.age} blood={x.bloodGrp} unit={1} />
            }));
        }
         return(<React.Fragment/>);



    }
}