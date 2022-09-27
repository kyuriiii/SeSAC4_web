import './Practice64.css';
import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Practice64Student from './Practice64Student';
import Practice64Main from './Practice64Main';

const Practice64 = () => {
    return (
        <header>
            <BrowserRouter>
                <Routes>
					<Route path="/" element={<Practice64Main />}></Route>
					<Route path="/student/:name" element={<Practice64Student />}></Route>
                </Routes>
			</BrowserRouter>
           
        </header>
    )
}

export default Practice64;