import React,{useState} from 'react';
import './App.css';

import 'bootstrap/dist/css/bootstrap.min.css'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.min.css'


import {Route,Switch,Link,BrowserRouter as Router} from 'react-router-dom'
import {UserContext} from './Context/UserContext';
import Home from './Pages/Home';
import SignIn from './Pages/Signin';
import SignUp from './Pages/SignUp';
import PageNotFound from './Pages/PageNotFound';
import Footer from './Layouts/Footer';
import Header from './Layouts/Header';

import firebase from 'firebase/app'
import Firebase from './Configuration/FirebaseConfig'

firebase.initializeApp(Firebase)

const App =()=>{
const [user,setUser]=useState(null)

return(
<Router>
  <ToastContainer/>
  <UserContext.Provider value={{user,setUser}}>
  <Header/>
  <Switch>
  <Route exact path='/' component={Home}/>
  <Route  path='/signin' component={SignIn}/>
  <Route  path='/signup' component={SignUp}/>
  <Route  path='*' component={PageNotFound}/>
  </Switch>
  <Footer/> 
  
  </UserContext.Provider>

</Router>

)

}




export default App;
