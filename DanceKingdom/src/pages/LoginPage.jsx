import { useState, useContext } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../context/auth.context";
import { login } from "../services/auth.service";
import "../styles/loginStyles.css";


const API_URL=import.meta.env.VITE_DEPLOYMENT_URL;
 
 
function LoginPage(props) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(undefined);

  const { storeToken, authenticateUser } = useContext(AuthContext);
  
  const navigate = useNavigate();
 
  const handleEmail = (e) => setEmail(e.target.value);
  const handlePassword = (e) => setPassword(e.target.value);
 
  
  const handleLoginSubmit = (e) => {
    e.preventDefault();
  //  const requestBody={email, password};
 
  //  axios.post(`${API_URL}/auth/login`, requestBody)
   login(email, password)
      .then((response) => {
    
      
        console.log('JWT token', response.authToken );
        storeToken(response.authToken) 
        localStorage.setItem('status', response.status); 
      })
      .then(()=> {
        authenticateUser() 
        navigate('/');                            
      })
      .catch((error) => {
        const errorDescription = error.response.data.message;
        
        setErrorMessage(errorDescription);
      })
  };

  
  return (
    <div className="background-color">
   <div className="LPbackground">
    <div className="LoginPage">
      <h1>Login</h1>
 
      <form onSubmit={handleLoginSubmit}>
        <label>Email:</label>
        <input 
          type="email"
          name="email"
          value={email}
          onChange={handleEmail}
        />
 
        <label>Password:</label>
        <input
          type="password"
          name="password"
          value={password}
          onChange={handlePassword}
        />
 
        <button type="submit">Login</button>
      </form>
      { errorMessage && <p className="error-message">{errorMessage}</p> }
 
      <p>Don't have an account yet?</p>
      <Link to={"/signup"}> Sign Up</Link>
    </div>
   </div>
   </div>
  )
}
 
export default LoginPage;
