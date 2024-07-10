import {BrowserRouter, Routes,Route } from 'react-router-dom'
import HomePage from "./Pages/HomePage"
import SignIn from './Pages/Sign-In';
import User from "./Pages/User"

function App() {
  return (
    <BrowserRouter>
    <Routes>
        <Route path= "/" element={<HomePage/>} />
        <Route path= "/login" element={<SignIn />} />
        <Route path='/profile' element={<User/>} />
    </Routes>
    </BrowserRouter>
  );
}

export default App;
