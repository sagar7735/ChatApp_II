import React from 'react';
import Left from './home/LeftPart/Left.jsx';
import Right from './home/RightPart/Right.jsx';
import Signup from './component/Signup.jsx';
import Login from './component/Login.jsx';
import { useAuth } from './context/AuthProvider.jsx';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';

const App = () => {
  const [authUser, setAuthUser] = useAuth();
console.log(authUser)
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            authUser ? (
              <Navigate to="/" />,
              <div className="flex h-screen">
                <Left />
                <Right />
              </div>
            ) : (
              <Navigate to={"/login"} />
            )
          }
        />
                <Route path="/login" element={ authUser ? <Navigate to="/" /> :<Login />} />

          <Route path="/signup" element={ authUser ? <Navigate to="/" /> :<Signup/>} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
