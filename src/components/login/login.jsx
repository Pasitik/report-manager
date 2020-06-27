import React, {useCallback, useContext, useState} from "react"; 
//import Home from "../../App"; 
import {Link} from "react-router-dom" 
import {Redirect} from "react-router";
//import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import Button from '@material-ui/core/Button';
//import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'; 
import { Formik } from "formik";
//import * as Yup from "yup";
import "../../style.scss";
//import { stringify } from "querystring"; 
// import app from "../../Firebase/base"; 
import firebase from 'firebase';
import { AuthContext } from "../../auth.js"



const Login = ({ history }) => { 
  const [user, setUser] = useState({});
  const hanleLogin = useCallback( 
    async event => { 
      event.preventDefault(); 
      const {email, password} = event.target.elements; 
      console.log(email)

      // try{ 
      //   await app
      //     .auth()
      //     .signInWithEmailAndPassword(email.value, password.value);
      //     history.push("/"); 
      // } catch (error) { 
      //   alert(error);
      // } 
    }, 
    [history]
  ); 

  function handleChange(event) {
    setUser({ ...user, [event.target.name]: event.target.value });
  }


  const { currentUser } = useContext(AuthContext); 

  if(currentUser){ 
    return <Redirect to = "/" />
  }

  function handleSubmit(){
    firebase.auth().signInWithEmailAndPassword(user.email, user.password).catch(function(error) {
    var errorCode = error.code;
    var errorMessage = error.message;
    console.log(`error code ${errorCode}  `)
    console.log(`error message ${errorMessage}  `)
    
  });
  
}

  
return(
<Formik
    initialValues={{ email: "", password: ""}}
    onSubmit={(values, { setSubmitting }) => {
      console.log("hello")
      // setTimeout(() => {
      //   console.log("Logging in", values);
      //   setSubmitting(false);
      // }, 500);
    }} 
    
    //validation logic  
    validate={values => {
      let errors = {}; 
    
      if (!user.email) {
        errors.userID = "user Id field equired!";
      } 
      if (!user.password) {
        errors.password = "password field required!";
      }  


      return errors;
    }} 
    
  >
    
    {props => {
      const { 
        values,
        touched,
        errors,
        isSubmitting,
        //handleChange,
        handleBlur,
        //handleSubmit,
        history
      } = props; 
     // const{history}=props; 

      return(
        <div className="base-container"> 
        <Card className="myCard"> 
          <CardContent>
          <div className="header" align="center">Login</div>
          <div className="content">
            <form className="form" onSubmit={hanleLogin}> 
            
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                id="email"
                name="email"
                placeholder="email"  
                //value={values.email}
                onChange={handleChange}
                // onBlur={handleBlur}
               className={errors.email && touched.email && "error"} 
                /> 
                {errors.email && touched.email && (
                <div className="input-feedback">{errors.email}</div>
                  )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password" 
                name="password" 
                placeholder="password"
                //value={values.password}
                onChange={handleChange}
                onBlur={handleBlur}
               className={errors.password && touched.password && "error"}
                 />
                 {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
                  )}
              </div>
            </form> 
          </div>
          <div className="footer" align="center"> 
            <Button as = {Link}  to="/home" onClick={handleSubmit}>
              Login
            </Button>  
          </div> 
          </CardContent>
          </Card>
        </div> 
    ); 
    }} 
    </Formik>
)
  }
export default Login;

  
 