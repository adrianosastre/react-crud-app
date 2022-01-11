import PageTitle from '../components/layout/PageTitle';

const Welcome = () => {
    return (
        <section>
            <PageTitle>Welcome to the Things app!</PageTitle>
            <p>
                This is a general CRUD app using React.js and the Google
                Firebase Realtime Database for testing API calls.
            </p>

            <p>It contains the basics for using React.js:</p>
            <ul>
                <li>Project organization (folders, names convention)</li>
                <li>Routing (react-router-dom)</li>
                <li>
                    Components (passing values to children and parents
                    components; wrapper components...)
                </li>
                <li>JSX</li>
                <li>Basic CSS styling, flex layout</li>
                <li>React states and other main hooks</li>
                <li>Fetching API data</li>
            </ul>
        </section>
    );
};

export default Welcome;
