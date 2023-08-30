import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

import { NavBar } from './components/NavBar/NavBar';
import { Banner } from './components/Banner/Banner';


function App() {
    return (
        <>
            <header>
                <NavBar />
                <Banner />
            </header>
        </>
    )
} 

export default App
