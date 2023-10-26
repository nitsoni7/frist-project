import { useState } from 'react';
import './App.css';
import Student from './components/Student';
import Teacher from './components/Teacher';
import Main from './components/Main';

function App() {


  // const [value, setValue] = useState(0);
  
  // function Add(){
  //   let NewValue = value++;
  //   setValue(NewValue);
  // }


  // let K = 1;

  // const Add = () => {
  //    K++;
  // }

  return (
    // <div className='App'>
    //   <div>
    //     <button onClick={Add}>Student</button>
    //     <button>Teacher</button>
    //   </div>
    //   <div>
    //     <h1>{value}</h1>
    //     <Student />
    //     <Teacher />
    //   </div>
    // </div>
    <div>
      <Main />
    </div>
  );
}

export default App;
