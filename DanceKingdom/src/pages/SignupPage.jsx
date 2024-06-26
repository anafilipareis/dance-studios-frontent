import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { register } from "../services/auth.service";
const API_URL = import.meta.env.VITE_DEPLOYMENT_URL;
import "../styles/signupStyles.css"

function SignUpPage() {
  const [userData, setUserData] = useState({
    firstName: "",
    lastName: "",
    username: "",
    email: "",
    password: "",
    status: "student",  // Default status is student
  });
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  const handleSignUpSubmit = async (e) => {
    e.preventDefault();
    try {
      await register(userData);
      navigate("/login");
    } catch (error) {
      setErrorMessage(error.message);
    }
  };

  return (
    <div className="background-color">
   <div className="subackground">
    <div className="SignupPage">
      <h1>Signup Page</h1>
      <form onSubmit={handleSignUpSubmit}>
        <p>
        <input
          type="text"
          name="firstName"
          placeholder="First Name"
          value={userData.firstName}
          onChange={handleInputChange}
          required
        /></p>
        <p>
        <input
          type="text"
          name="lastName"
          placeholder="Last Name"
          value={userData.lastName}
          onChange={handleInputChange}
          required
        /></p>
        <p>
        <input
          type="text"
          name="username"
          placeholder="Username"
          value={userData.username}
          onChange={handleInputChange}
          required
        /></p>
        <p>
        <input
          type="email"
          name="email"
          placeholder="Email"
          value={userData.email}
          onChange={handleInputChange}
          required
        /></p>
        <input
          type="password"
          name="password"
          placeholder="Password"
          value={userData.password}
          onChange={handleInputChange}
          required
        /><p>
        <label>
          Status:
          <select
            name="status"
            value={userData.status}
            onChange={handleInputChange}
          >
            <option value="student">Student</option>
            <option value="teacher">Teacher</option>
          </select>
        </label></p>
        <p>
        <button type="submit">Sign Up</button></p>
      </form>
      {errorMessage && <p>{errorMessage}</p>}
      <p>
        Already have an account? <Link to="/login">Login</Link>
      </p>
    </div>
   </div>
   </div>
  );
}

export default SignUpPage;










