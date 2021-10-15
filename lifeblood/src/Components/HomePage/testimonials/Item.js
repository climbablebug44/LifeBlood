import React from 'react'
import Styles from './Item.module.css'
const Item = () => {
  return (
    <div className={Styles.col}>
      <div className={Styles.testimonial}>
        <img src="https://media.istockphoto.com/photos/young-woman-portrait-in-the-city-picture-id1009749608?k=20&m=1009749608&s=612x612&w=0&h=3bnVp0Y1625uKkSwnp7Uh2_y_prWbgRBH6a_6jRew3g=" alt="" />
        <div className={Styles.name}>Apki Janu</div>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the.
        </p>
      </div>
    </div>
  )
}

export default Item