import ThingForm from '../components/things/ThingForm';
import { useNavigate } from 'react-router-dom';
import PageTitle from '../components/layout/PageTitle';

const AddThing = () => {
    console.log(`AddThing ... `);

    const navigate = useNavigate();

    function onAddThing(thing) {
        console.log(`onAddThing ... `, thing);

        fetch(`${process.env.REACT_APP_API_URL}things.json`, {
            method: 'POST',
            body: JSON.stringify(thing),
            headers: {
                'Content-Type': 'application/json',
            },
        }).then((res) => {
            console.log('POST response:', res);
            navigate('/list-things');
        });
    }

    return (
        <section>
            <PageTitle>Add New Thing</PageTitle>
            <ThingForm onSubmit={onAddThing} />
        </section>
    );
};

export default AddThing;
