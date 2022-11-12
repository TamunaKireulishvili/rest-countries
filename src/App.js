import{ Routes, Route } from 'react-router-dom';
import { Main } from './main/Main';
import {IndividualPage} from './individual-pages/IndividualPage'
import './App.css';

function App() {
  return (
    
    <div className="App">
    <Routes> 
     <Route path="/" element={<Main />}> </Route>
      <Route path="/:alpha3Code" element={<IndividualPage/>}></Route>
   </Routes> 
    </div>
  );
}

export default App;
