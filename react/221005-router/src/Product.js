import { useParams, useLocation, useSearchParams, useNavigate } from 'react-router-dom';

function Product() {
  const { id } = useParams();
  const location = useLocation();
  const [searchParams, setSearchParams] = useSearchParams();
  // const id2 = useParams().id;

  const state = {result: 'a', a: 'c'};
  const navigate = useNavigate();
    return (
      <div>
        <h1>{id}번 Product</h1>
        
        <ul>
            <li>hash : {location.hash}</li>
            <li>pathname : {location.pathname}</li>
            <li>search : {location.search}</li>
            <li>state : {location.state}</li>
            <li>key : {location.key}</li>
        </ul>

        <ul>
          <li>keyWords : {searchParams}</li>
          <li>keyWord : {searchParams.get("q")}</li>
        </ul>

        
        <ul>
            <li><button onClick={() => navigate(-2)}>Go 2 pages back</button></li>
            <li><button onClick={() => navigate(-1)}>Go back</button></li>
            <li><button onClick={() => navigate(1)}>Go forward</button></li>
            <li><button onClick={() => navigate(2)}>Go 2 pages forward</button></li>
            <li><button onClick={() => navigate('/')}>Go Root</button></li>
            <li><button onClick={() => navigate('/', {state: state})}>Go Root2</button></li>
        </ul>
      </div>
    );
  }
  
  export default Product;
  