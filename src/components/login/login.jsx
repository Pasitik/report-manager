import React, {useCallback, useContext} from "react"; 
import Home from "../../App"; 
import {Link} from "react-router-dom" 
import { withRouter, Redirect} from "react-router";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'; 
import { Formik } from "formik";
import * as Yup from "yup";
import "../../style.scss";
import { stringify } from "querystring"; 
import app from "../../base.js"; 
import { AuthContext } from "../../auth.js"



const Login = ({ history }) => { 
  const hanleLogin = useCallback( 
    async event => { 
      event.preventDefault(); 
      const {email, password} = event.target.elements; 
      try{ 
        await app
          .auth()
          .signInWithEmailAndPassword(email.value, password.value);
          history.push("/"); 
      } catch (error) { 
        alert(error);
      } 
    }, 
    [history]
  ); 

  const { currentUser } = useContext(AuthContext); 

  if(currentUser){ 
    return <Redirect to = "/" />
  }
  
return(
<Formik
    initialValues={{ email: "", password: ""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }} 
    //validation logic  
    validate={values => {
      let errors = {}; 
    
      if (!values.userID) {
        errors.userID = "user Id field equired!";
      } 
      if (!values.password) {
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
        handleChange,
        handleBlur,
        handleSubmit,
        history
      } = props; 
     // const{history}=props; 

      return(
        <div className="base-container"> 
        <Card className="myCard"> 
          <CardContent>
          <div className="header">Maintenance Login</div>
          <div className="content">
            <form className="form" onSubmit={hanleLogin}> 
            
              <div className="form-group">
                <label htmlFor="email">Email</label>
                <input type="text"
                id="email"
                name="email"
                placeholder="email"  
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
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
                value={values.password}
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
          <div className="footer"> 
            <Button as = {Link}  to="/home" type="submit">
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

  
 