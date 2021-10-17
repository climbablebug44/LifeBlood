import { Fragment } from 'react';
import logo from '../../assets/logo.jpeg'
import styles from './Header.module.css';
import { Link } from 'react-router-dom';
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
                        <Link to="/"><li>Home</li></Link>
                        <li>About</li>
                        <li>Find Blood</li>
                        <li>Donate</li>
                    </ul>
                </div>
                <div className={styles.buttons}>
                   <Button type='submit'> <Link to="/signup">Register</Link></Button>
                    <Link to="/login"><Button type='submit'>Login</Button></Link>
                </div>
            </header>
        </Fragment>
    );
}

export default Header;