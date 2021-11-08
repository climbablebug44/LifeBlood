import React from 'react';
import styles from './FeedItems.module.css';
import FeedItem from './FeedItem';

const FeedItems = () => {
    // fetch
    const feed = [];
    fetch("http://localhost:4000/api/feed/").then(
        response => {
            if(response.status !== 200){
                throw new Error("invalid response from server");
            }
            return response.json()
        }
    ).then(data => {
        feed.push(data);
        //console.log("line",data);
    }).catch(error => {
        console.log("abcd",error);
    });

    console.log("data.f",feed);


    return (
        <div>
            <ul className={styles['request-list']}>
                {this.features.map((index, people) => {
                    const x = people.geometry;
                    return <FeedItem center={{long: x.longitude, lat: x.latitude }} id={x.id} key={x.id} name={x.rName} reason={x.reason} time={x.time} age={x.pAge} blood={x.rBloodGrp} address={x.rAdd} unit={x.unitRequaired} />
                })}
            </ul>
        </div>
    )
}

export default FeedItems;