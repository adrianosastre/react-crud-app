import classes from './Card.module.css';

const Card = (props) => {
    return (
        <div
            className={classes.card}
            style={{
                backgroundImage: `url("${props.backgroundImage}")`,
            }}
        >
            {props.children}
        </div>
    );
};

export default Card;
