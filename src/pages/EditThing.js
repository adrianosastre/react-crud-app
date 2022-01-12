import ThingForm from '../components/things/ThingForm';
import { useNavigate, useLocation } from 'react-router-dom';
import PageTitle from '../components/layout/PageTitle';

const EditThing = (props) => {
    const t = useLocation().state;
    console.log(`EditThing ... `, t);

    let contents = <p>Not possible to show thing.</p>;
    if (t) {
        contents = <ThingForm thing={t} onSubmit={onEditThing} />;
    }

    const navigate = useNavigate();

    function onEditThing(thing) {
        console.log(`onEditThing ... `, thing);
        const id = thing.id;
        delete thing['id'];

        fetch(`${process.env.REACT_APP_API_URL}things/${id}.json`, {
            method: 'PUT',
            body: JSON.stringify(thing),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            console.log('PUT response:', res);
            thing.id = id;
            navigate('/thing', { state: thing });
        });
    }

    return (
        <section>
            <PageTitle>
                Edit Thing <span>({t.id})</span>
            </PageTitle>
            {contents}
        </section>
    );
};

export default EditThing;
