// import './styles/UserForm.css';
import UserForm from './components/UserForm';
import { useState, useEffect } from 'react';
import SavedCities from './components/SavedCities';
import Cities from './components/Cities';
import { Routes, Route } from 'react-router-dom'
import NavigationBar from './components/NavigationBar';
import './styles/NavigationBar.css'
import './styles/App.css'

function App() {

  const [message, setMessage] = useState("");

  useEffect(() => {
    fetch(`https://travel-explorer-backend-t29a.onrender.com`)
      .then((res) => res.json())
      .then((data) => setMessage(data.message));
  }, []);


  return (
    <main>
      <NavigationBar />

      <Routes>
        <Route path='/' element={<UserForm />}></Route>
        <Route path='/cities' element={<Cities />}></Route>
        <Route path='/save' element={<SavedCities />}></Route>
      </Routes>

    </main >



  );
}

export default App;
