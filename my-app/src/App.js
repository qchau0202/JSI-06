import React, { useState } from "react";
import { BrowserRouter } from "react-router-dom";
// import TodoComponent from "./components/TodoComponent";
// import Login from "./components/Login";
// import DemoNextUI from "./components/DemoNextUI";
// import Usercontainer from "./components/Usercontainer";
import StudentForm from "./components/StudentForm";
import {Routes, Route} from 'react-router-dom'
import Welcome from "./components/Welcome";
export default function App() {
  // const [isLogin, setIsLogin] = useState(false);

  // const onClickHandler = () => {
  //   // if (isLogin === true) {
  //   //   setIsLogin(false);
  //   // } else {
  //   //   setIsLogin(true);
  //   // }
  //   setIsLogin(!isLogin);
  // };

  return (
    
    <div className="app">
      {/* {isLogin === true ? <TodoComponent /> : <Login />}
      <button onClick={onClickHandler}>
        {isLogin === true ? "Logout Button" : "Login Button"}
      </button> */}
      {/* <DemoNextUI /> */}
      {/* <Usercontainer /> */}
      <StudentForm />
      <Routes>
        <Route path = '/Welcome' element={<Welcome/>}/>
      </Routes>
    </div>
  );
}
