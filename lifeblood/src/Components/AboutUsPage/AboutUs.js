import React from "react";
import styles from './AboutUs.module.css';

const AboutUs = props => {
    return <React.Fragment>
        <div className={styles.background}>
            <div className={styles['short-intro']}>
                <h3>
                    LifeBlood is a community of blood donors
                </h3>
                <p>
                    We work together with thousands of blood donors to help you get blood for           transfusion in time of emergency.
                </p>
            </div>
            <div className={styles['middle-section']}>
                <div className={styles.why}>
                    <h2>WHY?</h2>
                    <p>
                        India has world’s largest shortage of blood with demand of more than 15 million unit but only collects about 11 million units and the problem is that demand keeps rising. As per Government data 4 per 1,000 eligible people must donate blood once in a year to address the estimated clinical demand. Every day about 12K people in India die due to sheer lack of donated blood. According to WHO, blood donated by 1% population is generally taken as minimum need to meet a nation’s basic requirement for blood but it is clear that India is far from achieving self-sufficiency in safe blood.

                        However, our goal is much humble and direct. We wish to help people who are immediate need of blood and we do this by directly connecting donors to the patients in need by using a social network. We also wish to get rid of false stereotypes and myths around blood donation by making people aware about actual truth. It’s also our mission to raise awareness for need and benefits of blood donation to the society and to ourselves.
                    </p>
                </div>
                <div className={styles.story}>
                    <h2>Our story</h2>
                    <p>
                        Let us first introduce you to Abhimanyu, who is our fellow team member and a very compassionate man. Abhimanyu grew up in Mumbai and was unfortunate enough to witness a road accident. He rushed to help and found out that a speeding bike crashed in to the incoming car. Biker was badly injured, bleeding profusely, Abhimanyu rushed him to the hospital socked in bikers’ blood. Biker was taken to the Emergency room in the hospital as Abhimanyu sat there thinking that biker will probably survive now. But there was a problem, biker has already lost too much blood and was still losing it and there was not enough blood in the hospital. Biker was not the only unlucky guy, there were many who were in urgent need of blood for transfusion but blood was not available to them. Abhimanyu helplessly watched as life slipped through biker and saw many other suffering miserably. This event shook Abhimanyu to core, he couldn’t get a proper sleep always thinking about “was there something he could have done to help him?”. Abhimanyu researched on the subject and found that about 12,000 people die every day due to sheer lack of blood and he realized how much big of a problem this was. Abhimanyu couldn’t come up with a solution on his own and decided to take help from Jeetesh, who is also our fellow team member. Jeetesh is a bona fide engineer and realized that the India face terrible shortage of blood for transfusion and simply raising the awareness for blood donation was not going to help. He thought how wonderful that would be if a blood donor could come up and donate blood in time of emergency and that was it, He realized that creating an online community of blood donors who could donate blood in time of emergency was a plausible solution. Soon Abhimanyu and Jeetesh called out to rest of us to work on this wonderful project. We found out that there were already such system working successfully overseas and we thought to ourselves so can it do in India.
                    </p>
                </div>
            </div>

            <div className={styles.team}>
                <h2>Who We Are</h2>
                <div className={styles.members}>
                    <div className={styles['members-set1']}>
                        <div className={styles.member}>
                            <h4>Aman Sahu</h4>
                            <p>Phasellus eu nibh ligula. Sed in nisl velit. Sed non orci id purus consequat accumsan quis vel nunc. Vivamus et tristique augue. Integer quis mattis purus, non faucibus magna. Curabitur imperdiet arcu sit amet mi elementum rhoncus.</p>
                        </div>
                        <div className={styles.member}>
                            <h4>Nimit Gaur</h4>
                            <p>Phasellus eu nibh ligula. Sed in nisl velit. Sed non orci id purus consequat accumsan quis vel nunc. Vivamus et tristique augue. Integer quis mattis purus, non faucibus magna. Curabitur imperdiet arcu sit amet mi elementum rhoncus.</p>
                        </div>
                        <div className={styles.member}>
                            <h4>Rishabh Anand</h4>
                            <p>Phasellus eu nibh ligula. Sed in nisl velit. Sed non orci id purus consequat accumsan quis vel nunc. Vivamus et tristique augue. Integer quis mattis purus, non faucibus magna. Curabitur imperdiet arcu sit amet mi elementum rhoncus.</p>
                        </div>
                        <div className={styles.member}>
                            <h4>Abhimanyu Kumbhar</h4>
                            <p>Phasellus eu nibh ligula. Sed in nisl velit. Sed non orci id purus consequat accumsan quis vel nunc. Vivamus et tristique augue. Integer quis mattis purus, non faucibus magna. Curabitur imperdiet arcu sit amet mi elementum rhoncus.</p>
                        </div>
                    </div>
                    <div className={styles['members-set2']}>
                        <div className={styles.member}>
                            <h4>Ashwin Nair</h4>
                            <p>Phasellus eu nibh ligula. Sed in nisl velit. Sed non orci id purus consequat accumsan quis vel nunc. Vivamus et tristique augue. Integer quis mattis purus, non faucibus magna. Curabitur imperdiet arcu sit amet mi elementum rhoncus.</p>
                        </div>
                        <div className={styles.member}>
                            <h4>Aashish Sharma</h4>
                            <p>Phasellus eu nibh ligula. Sed in nisl velit. Sed non orci id purus consequat accumsan quis vel nunc. Vivamus et tristique augue. Integer quis mattis purus, non faucibus magna. Curabitur imperdiet arcu sit amet mi elementum rhoncus.</p>
                        </div>
                        <div className={styles.member}>
                            <h4>Jeetesh Gavande</h4>
                            <p>Phasellus eu nibh ligula. Sed in nisl velit. Sed non orci id purus consequat accumsan quis vel nunc. Vivamus et tristique augue. Integer quis mattis purus, non faucibus magna. Curabitur imperdiet arcu sit amet mi elementum rhoncus.</p>
                        </div>
                        <div className={styles.member}>
                            <h4>Aman Verma</h4>
                            <p>Phasellus eu nibh ligula. Sed in nisl velit. Sed non orci id purus consequat accumsan quis vel nunc. Vivamus et tristique augue. Integer quis mattis purus, non faucibus magna. Curabitur imperdiet arcu sit amet mi elementum rhoncus.</p>
                        </div>

                    </div>
                </div>
            </div>
        </div>

    </React.Fragment >
}

export default AboutUs;