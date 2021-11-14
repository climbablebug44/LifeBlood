import React from 'react';
import FeedItem from './FeedItem';

export default class FeedItems extends React.Component {
    constructor(props) {
        super(props);

        this.state = {
            data: null,
            canFetch: false,
        };

        this.prevReq = "A+";
        this.prevSortBy = "blood";
    }

    componentDidMount() {
        this.setState({
            ...this.state,
            canFetch: true
        })
    }

    componentWillUnmount() {
        this.setState({
            ...this.state,
            canFetch: false
        })
    }


    fetchData(sortBy) {
        var req = "http://localhost:4000/api/feed/";


        if (sortBy !== undefined && this.props.selectedOption === "blood") {
            var suffix = sortBy.substring(sortBy.length - 1);
            if (suffix === "+")
                suffix = "p";
            else
                suffix = "n";
            suffix = sortBy.substring(0, sortBy.length - 1) + suffix;
            req += suffix.toLowerCase() + "/";
        }


        console.log("[fetch from] : ", req);

        fetch(req).then(
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

    render() {

        const sortBy = this.props.bgReq;
        const prevSortBY = this.props.selectedOption;
        if (this.state.canFetch && (this.prevReq !== sortBy || this.prevSortBy !== prevSortBY)) {
            this.fetchData(sortBy);
            this.prevReq = sortBy;
            this.prevSortBy = prevSortBY;
        }

        if (this.state.data !== null) {
            const data = this.state.data.features;
            return (data.map((person, index) => {
                const x = person.properties;
                return <FeedItem center={{ long: person.geometry.coordinates[0], lat: person.geometry.coordinates[1] }} id={x.id} key={x.id} name={x.name} reason={x.reason} age={x.age} blood={x.bloodGrp} unit={1} />
            }));
        }
        return (<React.Fragment />);



    }
}