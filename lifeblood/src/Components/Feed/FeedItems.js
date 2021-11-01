import React from 'react';
import styles from './FeedItems.module.css';
import FeedItem from './FeedItem';

const FeedItems = () => {

    const feeds = [{ id: '1111', rName: 'Aman Sahu', pAge: 22, rAdd: 'Bhopal, Madhya Pradesh', rBloodGrp: 'A+', time: 'an hour before', reason: 'Heavy blood lost due to road accident', hospital: 'peoples hospital,bhopal', unitRequaired: 3, longitude: 55, latitude: 43 },
    { id: '1112', rName: 'Jeetesh Gavande', pAge: 22, rAdd: 'Dewas, Madhya Pradesh', rBloodGrp: 'B+', time: 'about 3 hour ago', reason: 'Heavy blood lost dring pregnancy', hospital: 'peoples hospital,bhopal', unitRequaired: 4, longitude: 35, latitude: 4 },
    { id: '1113', rName: 'Aman Sahu', pAge: 22, rAdd: 'Bhopal, Madhya Pradesh', rBloodGrp: 'A+', time: 'an hour before', reason: 'Heavy blood lost due to road accident', hospital: 'peoples hospital,bhopal', unitRequaired: 3, longitude: 45, latitude: 44 },
    { id: '1114', rName: 'Jeetesh Gavande', pAge: 22, rAdd: 'Dewas, Madhya Pradesh', rBloodGrp: 'B+', time: 'about 3 hour ago', reason: 'Heavy blood lost dring pregnancy', hospital: 'peoples hospital,bhopal', unitRequaired: 4, longitude: 45, latitude: 50 }];

    return (
        <div>
            <ul className={styles['request-list']}>
                {feeds.map(feed => {
                    return <FeedItem center={{long: feed.longitude, lat: feed.latitude }} id={feed.id} key={feed.id} name={feed.rName} reason={feed.reason} time={feed.time} age={feed.pAge} blood={feed.rBloodGrp} address={feed.rAdd} unit={feed.unitRequaired} />
                })}
            </ul>
        </div>
    )
}

export default FeedItems;