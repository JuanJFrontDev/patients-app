import './LoginPage.css';
import { BsBoxArrowLeft } from "react-icons/bs";
import { Link } from 'react-router-dom';
import { Fade } from "react-awesome-reveal";
import logo from '../../assets/img/Patient_Care_Logo_Editado.png';
import { Login } from '../components/Login';
import { CreateAccount } from '../components/CreateAccount';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { ForgotPassword } from '../components/ForgotPassword';


export const LoginPage = () => {

  const {page} = useContext(AuthContext);
  console.log("Estoy en LoginPage, con valor= ",page);
  return (
    <Fade delay={50}>
      <div className="login">
        {/* <div className="loginPage__left">
          <div className="loginPage__left__container">
            <Link to="/">
              <img src={logo} alt="PatientCare" />
            </Link>
            
          </div>
        </div> */}
        {page=="login" && <Login/>}
        {page=="createAccount" && <CreateAccount/>}
        {page=="recoverPass" && <ForgotPassword/>}
      </div>
    </Fade>
    
  )
}
