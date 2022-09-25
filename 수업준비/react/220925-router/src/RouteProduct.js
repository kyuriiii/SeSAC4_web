import React from 'react';
import { useParams } from 'react-router-dom';
import { useNavigate } from 'react-router-dom';
import { useSearchParams } from 'react-router-dom';

const RouteProduct = () => {
    const { id } = useParams();
    
    return (
        <div>
            <h5>{id} 번 상품 페이지입니다.</h5>

            <ul>
                <li>hash : {location.hash}</li>
                <li>pathname : {location.pathname}</li>
                <li>search : {location.search}</li>
                <li>state : {location.state}</li>
                <li>key : {location.key}</li>
            </ul>
            <ul>
                <li>keyWords : {keyWords}</li>
                <li>keyWord : {keyWord}</li>
            </ul>
            <ul>
                <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
                <li><button onClick={() => navigate(-1)}>Go back</button></li>
                <li><button onClick={() => navigate(1)}>Go forward</button></li>
                <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
                <li><button onClick={() => navigate('/')}>Go Root</button></li>
                <li><button onClick={() => navigate('/', {replace: true})}>Go Root</button></li>
            </ul>
        </div>
    );
};
  
export default RouteProduct;