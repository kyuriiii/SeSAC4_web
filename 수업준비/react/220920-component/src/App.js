import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';

function App() {
  return (
    <div>
      
      <FunctionComponent />

      <FunctionComponent name="SeSAC">자식내용</FunctionComponent>

      <FunctionComponent name="SeSAC" />


      <ClassComponent name="SeSAC"/>
      <ClassComponent />
      <ClassComponent />

      
      <FunctionComponent> 자식 </FunctionComponent>
    </div>
  );
}

export default App;
