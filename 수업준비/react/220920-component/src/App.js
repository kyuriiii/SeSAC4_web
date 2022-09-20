import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div>
      <FunctionComponent />
      <ClassComponent name="SeSAC"/>
      <ClassComponent />
      <ClassComponent />

      
      <FunctionComponent> 자식 </FunctionComponent>
    </div>
  );
}

export default App;
