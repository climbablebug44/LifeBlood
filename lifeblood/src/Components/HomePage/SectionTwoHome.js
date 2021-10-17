import React from 'react';
import styles from './SectionTwoHome.module.css';
const SectionTwoHome = props => {
  return (
    <React.Fragment>
      <div className={styles.container}>
        <h2>Who Can Donate Blood?</h2>
        <div className={styles['container-text']}>
          <ul>
            <li>
              <span>Age:</span>
              You must be at least 17 years old to donate to the general blood supply. There
              is no upper age limit for blood donation as long as you are well with no
              restrictions or limitations to your activities.
            </li>
            <li>
              <span>High Blood Pressure:</span>
              High Blood Pressure: Acceptable as long as your blood pressure is below 180
              systolic (first number) and below 100 diastolic (second number) at the time of
              donation. Medications for high blood pressure do not disqualify you from
              donating.
            </li>
            <li>
              <span>Weight:</span>
              You must weigh at least 110 pounds to be eligible for blood donation for your
              own safety. Blood volume is in proportion to body weight. Donors who weigh less
              than 110 pounds may not tolerate the removal of the required volume of blood as
              well as those who weigh more than 110 pounds. There is no upper weight limit as
              long as your weight is not higher than the weight limit of the donor bed or
              lounge you are using.
            </li>
            <li>
              <span>Diabetes:</span>
              Diabetes: Acceptable as long as it is well controlled, whether medication is
              taken or not.
            </li>
            <li>
              <span>MSM:</span>
              Men who have had sex with other men, at any time since 1977 (the beginning of
              the AIDS epidemic in the United States) are currently deferred as blood donors.
              This is because MSM are, as a group, at increased risk for HIV, hepatitis B and
              certain other infections that can be transmitted by transfusion.
            </li>
            <li>
              <span>Body Piercing:</span>
              You must not donate if you have had a tongue, nose, belly button or genital
              piercing in the past 12 months. Donors with pierced ears are eligible.
            </li>
            <li>
              <span>Cold and Flu:
              </span>Wait if you have a fever or a productive cough (bringing up phlegm). Wait
              if you do not feel well on the day of donation. Wait until you have completed
              antibiotic treatment for sinus, throat or lung infection.
            </li>
            <li>
              <span>Diet:
              </span>A meal is recommended at least four hours prior to donation. Drink plenty
              of fluids.
            </li>
            <p>
              <span>*
              </span>Other criteria that will be assessed at the time of donation includes:
              Hemoglobin, Travel, Cancer, Medications, Hepatitis, and HIV Risk etc.</p>

          </ul>
        </div>

      </div>
    </React.Fragment>
  );
}
export default SectionTwoHome;