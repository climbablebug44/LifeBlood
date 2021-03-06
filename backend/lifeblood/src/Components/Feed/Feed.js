import React, { Component } from "react";
import styles from './Feed.module.css';
import FeedItems from "./FeedItems";
import ModalForShare from "../modalForShare/ModalForShare";

export default class Feed extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedOption: "blood",
            displayList: {
                display: true,
                selectedBG: "A+"
            },
            verified: false,
            geoCoord: {
                lat: null,
                long: null
            }
        };
    }

    componentDidMount() {
        const verified_ = localStorage.getItem("isVerified");
        if (verified_ === 'true') {
            this.setState({
                ...this.state,
                verified: true
            })
        }
        this.position();
    }

    position = async () => {
        await navigator.geolocation.getCurrentPosition(
            position => this.setState({
                ...this.state,
                geoCoord: {
                    lat: position.coords.latitude,
                    long: position.coords.longitude
                }
            }), err => console.log(err)
        );
    }

    closeHandler = () => {
        localStorage.removeItem("receiverId");
        localStorage.removeItem("isVerified")
        this.setState({
            ...this.state,
            verified: false
        })
    }

    onOptionChange = (event) => {
        this.setState({
            selectedOption: event.target.value,
            displayList: {
                ...this.state.displayList,
                display: (event.target.value === "blood")
            }
        });
    }

    onBGChange = (event) => {
        this.setState({
            ...this.state,
            displayList: {
                display: true,
                selectedBG: event.target.value
            }
        })
    }

    render() {
        const { selectedOption } = this.state;
        const { display, selectedBG } = this.state.displayList;
        return (
            <React.Fragment>
                <div className={styles['div-container']}>
                    <div className={styles['div-1']}></div>
                    <div className={styles['feed-container']}>
                        <FeedItems selectedOption={selectedOption} bgReq={selectedBG} location={this.state.geoCoord} />
                    </div>
                    <div className={styles['div-3']}>
                        <form className={styles['sort-by']}>
                            <label htmlFor='sort'>Sort by : </label>
                            <select name='sort' id='sort' onChange={this.onOptionChange} >
                                <option value='blood'>Blood Group</option>
                                <option value='location'>Nearest Request</option>
                            </select>
                        </form>
                        {display && <form className={styles['sort-by']}>
                            <select name='sort' id='sort' onChange={this.onBGChange} style={{ marginLeft: "50px" }}>
                                <option>A+</option>
                                <option>A-</option>
                                <option>B+</option>
                                <option>B-</option>
                                <option>AB+</option>
                                <option>AB-</option>
                                <option>O+</option>
                                <option>O-</option>
                            </select>
                        </form>}
                        <a href='/request' className={styles.request}>+</a>
                        <p>Post Blood Request</p>
                    </div>
                </div>
                {this.state.verified && <ModalForShare handleClose={this.closeHandler} />}
            </React.Fragment>
        );
    }
}