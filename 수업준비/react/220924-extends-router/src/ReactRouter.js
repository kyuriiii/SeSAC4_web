import { BrowserRouter, Routes, Route } from 'react-router-dom';
import RouteHeader from './RouteHeader';
import RouteMain from './RouteMain';
import RouteProduct from './RouteProduct';
import RouteNotFound from './RouteNotFound';

const ReactRouter = () => {
	return (
		<div>
			<BrowserRouter>
				<RouteHeader />
				<Routes>
					<Route path="/" element={<RouteMain />}></Route>
					<Route path="/product/:id" element={<RouteProduct />}></Route>
					<Route path="*" element={<RouteNotFound />}></Route>
				</Routes>
			</BrowserRouter>
		</div>
	);
};

export default ReactRouter;