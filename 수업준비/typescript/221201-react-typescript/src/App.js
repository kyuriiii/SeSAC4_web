import Date from "./component/Date";
import DateList from "./component/DateList";
import Header from "./component/Header";
import { BrowserRouter, Route, Routes  } from "react-router-dom";
import EmptyPage from "./component/EmptyPage";
import CreateDiary from "./component/CreateDiary";
import CreateDate from "./component/CreateDate";
import {createStore} from "redux";
import {Provider} from "react-redux"
import rootReducer from "./store/rootReducer";

function App() {
  const store = createStore(rootReducer);
  return (
    <BrowserRouter>
      <Provider store={store}>
        <div className="App">
          <Header />
          <Routes>
            <Route exact path="/" element={<DateList />} />
            <Route path="/date/:date" element={<Date />} />
            <Route path="/create_diary" element={<CreateDiary />} />
            <Route path="/create_date" element={<CreateDate />} />
            <Route element={<EmptyPage />} />
          </Routes>
        </div>
      </Provider>
    </BrowserRouter>
  );
}

export default App;
