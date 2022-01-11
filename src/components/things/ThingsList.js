import ThingItem from './ThingItem';
import classes from './ThingsList.module.css';

const ThingsList = (props) => {
    console.log(`ThingsList ... `, props);

    if (!props.things || props.things.length < 1) {
        return <p>No things registered yet.</p>;
    }

    return (
        <ul className={classes.list}>
            {props.things.map((t) => {
                return <ThingItem key={t.id} thing={t} />;
            })}
        </ul>
    );
};

export default ThingsList;
