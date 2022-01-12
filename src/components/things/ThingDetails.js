import { Link, useNavigate } from 'react-router-dom';
import Card from '../ui/Card';
import classes from './ThingDetails.module.css';

const ThingDetails = (props) => {
    console.log(`ThingDetails ... `, props);
    const t = props.thing;

    const navigate = useNavigate();

    function deleteThingHandler() {
        console.log(`deleteThingHandler ...`, t);

        if (!window.confirm(`Sure delete thing '${t.title}'?`)) {
            return;
        }

        console.log('deleteThingHandler id DELETE:', t.id);

        fetch(`${process.env.REACT_APP_API_URL}things/${t.id}.json`, {
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            console.log('DELETE response:', res);
            navigate('/list-things');
        });
    }

    return (
        <Card backgroundImage={t.image}>
            <div className={classes.content}>
                <h2>{t.title}</h2>
                <h3>{t.subtitle}</h3>
                <p>{t.description}</p>
            </div>
            <div className={classes.actions}>
                <Link to={'/edit-thing'} state={t}>
                    <button>Edit</button>
                </Link>
                <button onClick={deleteThingHandler}>Delete</button>
            </div>
        </Card>
    );
};

export default ThingDetails;
