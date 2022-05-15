import React, {useState} from 'react';
import DemoNextUi from './components/DemoNextUi';
// import TodoComponent from './components/TodoComponent';
// import Login from './components/Login';
const App = () => {
  // const [isLogin, setIslogin] = useState(false)
  
  // const onClickHandler = () => {
  //    setIslogin(!isLogin)
  // }
  return (
    // <div className="App">
    //   {isLogin === true ? <TodoComponent/> : <Login/>}

    //   <button onClick={onClickHandler}>
    //     {isLogin === true ? 'Log out':'Login'}
    //   </button>
    // </div>
<DemoNextUi/>
  );
}

export default App;
