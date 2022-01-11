import classes from './PageTitle.module.css';

const PageTitle = (props) => {
    return <h2 className={classes.pageTitle}>{props.children}</h2>;
};

export default PageTitle;
