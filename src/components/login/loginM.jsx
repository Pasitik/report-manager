import React, {useCallback, useContext} from "react"; 
import Home from "../../App"; 
import {Link} from "react-router-dom" 
import history from "../../history";
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card'; 
import Button from '@material-ui/core/Button';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent'; 
import { Formik } from "formik";
import * as Yup from "yup";
import "../../style.scss";
import { stringify } from "querystring"; 




const LoginM = () => ( 
  

<Formik
    initialValues={{ department: "", userID: "", password: ""}}
    onSubmit={(values, { setSubmitting }) => {
      setTimeout(() => {
        console.log("Logging in", values);
        setSubmitting(false);
      }, 500);
    }} 
    //validation logic  
    validate={values => {
      let errors = {}; 
      if (!values.department) {
        errors.department= "department field required!";
      }  
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
            <div className="form"> 
              <div className="form-group">
                <label htmlFor="department">Department</label>
                <input type="text" 
                id="department" 
                name="department"  
                placeholder="Department" 
                value={values.department}
                onChange={handleChange}
                onBlur={handleBlur}
               className={errors.department && touched.department && "error"}
                /> 
                {errors.department && touched.department && (
                <div className="input-feedback">{errors.department}</div>
                  )}
              </div> 
              <div className="form-group">
                <label htmlFor="userID">UserID</label>
                <input type="text"
                id="userid"
                name="userID"
                placeholder="userID"  
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
               className={errors.userID && touched.userID && "error"} 
                /> 
                {errors.userID && touched.userID && (
                <div className="input-feedback">{errors.userID}</div>
                  )}
              </div>
              <div className="form-group">
                <label htmlFor="password">Password</label>
                <input type="password" 
                id="password" 
                name="password" 
                placeholder="password"
                value={values.email}
                onChange={handleChange}
                onBlur={handleBlur}
               className={errors.email && touched.email && "error"}
                 />
                 {errors.password && touched.password && (
                <div className="input-feedback">{errors.password}</div>
                  )}
              </div>
            </div> 
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
export default LoginM;

  
 