import {  useEffect, useState } from 'react';
import './App.css'
import { useDispatch } from 'react-redux';
import authService from './appwrite/auth';
import { login, logout } from './store/authSlice';
import { Footer, Header } from './components';
import { Outlet } from 'react-router-dom';

function App() {
 

const [loading,setLoading] = useState(true);
const dispatch = useDispatch();

useEffect(() => {
authService.getCurrentUser()
.then((userdata)=>{
  if(userdata){
    dispatch(login({userData:userdata}));
  }
  else{
    dispatch(logout());
  }
})
.finally(()=>{ setLoading(false) })



});

  return !loading?(<div className="App">
 <Header/>
 <main>
        <div className="container">
          
          <h1>Welcome to the App</h1>
          <p>This is a simple React application.</p>
          <p>Use the navigation bar to explore.</p>
          <p>Click on the links to see different pages.</p>
          <p>Enjoy your stay!</p>
          <p>Here is the content of the page:</p>

          <Outlet/>
</div>

 </main>
      
        <Footer/>
  </div>):null;

  
}

export default App
