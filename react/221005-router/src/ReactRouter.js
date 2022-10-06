import { BrowserRouter, Routes, Route, Link } from 'react-router-dom';
import Main from './Main';
import Product from './Product';
const ReactRouter = () => {
    return (
        <div>
            <BrowserRouter> 
                <Link to="/">페이지</Link>
                <Routes>
                    <Route path="/" element={<Main />}></Route>
                    <Route path="/product/:id" element={<Product />}></Route>
                </Routes>
            </BrowserRouter>
        </div>
    )
}

export default ReactRouter;