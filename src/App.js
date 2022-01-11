import { Route, Routes, BrowserRouter } from 'react-router-dom';
import Layout from './components/layout/Layout';
import ListAllThings from './pages/ListAllThings';
import EditThing from './pages/EditThing';
import AddThing from './pages/AddThing';
import Thing from './pages/Thing';
import Welcome from './pages/Welcome';

function App() {
    return (
        <BrowserRouter>
            <Layout>
                <Routes>
                    <Route path='/' exact element={<Welcome />} />
                    <Route path='/list-things' element={<ListAllThings />} />
                    <Route path='/add-thing' element={<AddThing />} />
                    <Route path='/edit-thing' element={<EditThing />} />
                    <Route path='/thing' element={<Thing />} />
                </Routes>
            </Layout>
        </BrowserRouter>
    );
}

export default App;
