import { useRef } from 'react';
import classes from './ThingForm.module.css';

const ThingForm = (props) => {
    console.log(`ThingForm ... `, props);

    const t = props.thing;

    const titleInputRef = useRef();
    const subtitleInputRef = useRef();
    const imageInputRef = useRef();
    const descriptionInputRef = useRef();

    function submitHandler(event) {
        console.log(`submitHandler ... `);
        event.preventDefault(); // do not submit the form automatically

        const title = titleInputRef.current.value;
        const subtitle = subtitleInputRef.current.value;
        const image = imageInputRef.current.value;
        const description = descriptionInputRef.current.value;

        const thingData = {
            title,
            subtitle,
            image,
            description,
        };
        if (t) {
            thingData.id = t.id;
        }

        console.log('submitHandler thing data:', thingData);

        props.onSubmit(thingData);
    }

    return (
        <form className={classes.form} onSubmit={submitHandler}>
            <div className={classes.control}>
                <label htmlFor='title'>Title</label>
                <input
                    defaultValue={t ? t.title : ''}
                    type='text'
                    required
                    id='title'
                    ref={titleInputRef}
                />
            </div>
            <div className={classes.control}>
                <label htmlFor='subtitle'>Subtitle</label>
                <input
                    defaultValue={t ? t.subtitle : ''}
                    type='text'
                    required
                    id='subtitle'
                    ref={subtitleInputRef}
                />
            </div>
            <div className={classes.control}>
                <label htmlFor='image'>Image</label>
                <input
                    defaultValue={t ? t.image : ''}
                    type='url'
                    required
                    id='image'
                    ref={imageInputRef}
                />
            </div>
            <div className={classes.control}>
                <label htmlFor='description'>Description</label>
                <textarea
                    defaultValue={t ? t.subtitle : ''}
                    required
                    id='description'
                    rows='5'
                    ref={descriptionInputRef}
                />
            </div>
            <div className={classes.actions}>
                <button> {t ? 'Edit' : 'Add'} Thing</button>
            </div>
        </form>
    );
};

export default ThingForm;
