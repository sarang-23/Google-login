import { useEffect } from 'react';
import './App.css';
import Login from './components/login'
import jwt_decode from 'jwt-decode'

function App() {

  function handleCallbackResponse(response){
    console.log("Encoded JWT ID token: " + response.credential);
    var userObject = jwt_decode(response.credential);
    console.log('User Object: ', userObject);
  }

  useEffect(()=>{
    /* global google */
    google.accounts.id.initialize({
      client_id : '761235064527-7o1mqo0755ar9h6ko2rhadot8k4uv42i.apps.googleusercontent.com',
      callback : handleCallbackResponse
    });

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      { size : "large" } 
    );

    google.accounts.id.prompt();
  }, []);



  return (
    <div className="App">
     <Login/>
    </div>
  );
}

export default App;
