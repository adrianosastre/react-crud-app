import { Link } from 'react-router-dom';
import logo from './thing-logo.png';
import classes from './Navigation.module.css';

function Navigation() {
    return (
        <header className={classes.header}>
            <div>
                <Link to={'/'}>
                    <img className={classes.logo} src={logo} alt='Things' />
                </Link>
            </div>
            <nav>
                <ul>
                    <li>
                        <Link to={'/list-things'}>Things List</Link>
                    </li>
                    <li>
                        <Link to={'/add-thing'}>Add Thing</Link>
                    </li>
                </ul>
            </nav>
        </header>
    );
}

export default Navigation;
