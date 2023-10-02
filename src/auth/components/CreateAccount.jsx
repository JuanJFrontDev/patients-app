import { useContext } from "react";
import "./CreateAccount.css";
import { Link } from 'react-router-dom';
import { AuthContext } from "../context/AuthContext";
import createAccount from "../../assets/img/Create_Account.svg";
import { Fade } from "react-awesome-reveal";
export const CreateAccount = () => {
  const {page,setPage} = useContext(AuthContext);
  console.log(page);
  return (
    <div className="createAccount__generalContainer">
      <div className="loginPage__left">
        <div className="createAccountPage__left__container">
          <div className="createAccount__container">
            <h2 className="createAccount__title">Create an account</h2>
            <p>Let's start to manage and save time.</p>
            <div className="createAccount__inputs">
              <input type="text" placeholder="Name"/>
              <input type="email" placeholder="Email"/>
              <input type="password" placeholder="Password"/>
            </div>
            <button>Create Account</button>
            <p>Already have an account? <Link to="/login" className="loginLink" onClick={() => setPage("login")}>Log in</Link></p>
          </div>
        </div>
      </div>
      <div className="createAccountPage__right">
        <img src={createAccount} alt="Create Account" />
      </div>
    </div>
  )
}
