import { useEffect, useState } from 'react';
import PageTitle from '../components/layout/PageTitle';
import ThingsList from '../components/things/ThingsList';

const ListAllThings = (props) => {
    console.log(`ListAllThings ... `, props);

    const [isLoading, setIsLoading] = useState(true);
    const [loadedThings, setLoadedThings] = useState([]);

    useEffect(() => {
        console.log(`useEffect ... `);
        setIsLoading(true);

        fetch(`${process.env.REACT_APP_API_URL}things.json`)
            .then((res) => {
                return res.json();
            })
            .then((data) => {
                console.log(`result GET data:`, data);

                const things = [];
                for (const key in data) {
                    const thing = {
                        id: key,
                        ...data[key],
                    };
                    things.push(thing);
                }
                setIsLoading(false);
                setLoadedThings(things);
            });
    }, []);

    let content;
    if (isLoading) {
        content = <p>Loading...</p>;
    } else {
        content = <ThingsList things={loadedThings} />;
    }

    return (
        <section>
            <PageTitle>
                Things List <span>({loadedThings.length})</span>
            </PageTitle>
            {content}
        </section>
    );
};

export default ListAllThings;
