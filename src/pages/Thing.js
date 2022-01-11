import { useLocation } from 'react-router-dom';
import ThingDetails from '../components/things/ThingDetails';
import PageTitle from '../components/layout/PageTitle';

const Thing = () => {
    const t = useLocation().state;
    console.log(`Thing ... `, t);

    let contents = <p>Not possible to show thing.</p>;

    if (t) {
        contents = <ThingDetails thing={t} />;
    }

    return (
        <section>
            <PageTitle>
                Things Details <span>({t.id})</span>
            </PageTitle>
            {contents}
        </section>
    );
};
export default Thing;
