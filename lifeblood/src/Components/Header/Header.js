import { Fragment } from 'react';
import logo from '../../assets/logo.jpeg'
import styles from './Header.module.css'
import Button from '../UI/Button';
const Header = props => {
    return (
        <Fragment>
            <header className={styles.header}>
                <div className={styles['logo-part']}>
                    <div className={styles.logo}><img src={logo} alt='Logo for life blood' /></div>
                    <span className={styles.lifeblood}>LifeBlood</span>
                </div>
                <div>
                    <ul>
                        <li>Home</li>
                        <li>About</li>
                        <li>Find Blood</li>
                        <li>Donate</li>
                    </ul>
                </div>
                <div className={styles.buttons}>
                    <Button type='submit'>Register</Button>
                    <Button type='submit'>Login</Button>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;