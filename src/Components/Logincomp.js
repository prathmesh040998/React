import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './Styles.css';
import img from "./Artwork.png"
import img4 from "./icon.svg"
import img1 from "./logo.png"
import icon from "./aa.png"
import {Hidden} from "@material-ui/core"
import {Link} from "react-router-dom"
import {makeStyles,createMuiTheme,ThemeProvider,withStyles} from '@material-ui/core/styles'


const theme = createMuiTheme({
  
  typography: {
    fontFamily: [
      'Lato', 'sans-serif'
    ].join(','),
},});



function Logincomp() {
    return (   
          <ThemeProvider theme={theme}>      
        <div className="row1">
                <div className="container-fluid  ml-4 mr-4 ">
                    

                <div className="row">
                    
                    <div className="col-md-7  col-lg-7 login1">

                        <div className="col-sm-2">
                          <Hidden xsDown="true" >
                            <img src={img1} className="img" alt="error" width="70"></img>
                            </Hidden>

                        </div>
                        <div className="row mt-5">
                            <div className="col-sm-2"></div>
                            <div className="col-lg-8 text-center">
                           
                                <h4 className="text-white font font-weight-bold mt-2">
                                    Login
                                    </h4>
                               
                                <form id="loginForm">
                                    <div className="form-row">

                                        <div className="form-group col-xs-3 col-sm-9 mx-auto text-left">
                                        <div class="row">
                                <div className="col-md-12">
                                     {/* <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#">
                                         <img src="https://img.icons8.com/color/16/000000/google-logo.png"></img>
                                              Signup Using Google</a> */}
                                               </div>
                                               </div>
                                                

                                            <label className="text-white font1 ml-2 mt-2">
                                                Username</label>
                                            <input id="username" class="form-control inp text-left" type="text"
                                                placeholder="Enter Username" required=""></input>
                                        </div>
                                    </div>
                                    <div className="form-row">
                                        <div className="form-group col-xs-3 col-sm-9 mx-auto text-left mt-2">
                                            <label className="text-white font1 ml-2 text-left" height="15px" width="110px">
                                                Password</label>
                                            <input id="Password" class="form-control inp text-left" type="password"
                                                placeholder="Enter Password " required=""></input>
                                        </div>
                                    </div>

                                    <div className="form-row">
                                        <div className="form-group col-xs-3 col-sm-9 mx-auto text-left">
                                        <label className="text-white font1 ">
                                            <input type="checkbox"></input> Keep me signed me
                                                        </label>
                                        </div>
                                        <div className="container">
                                        <Hidden mdUp="false" >
                                         <img src={img4}  ></img>
                                         </Hidden>
                                            </div>

                                                  </div>
                                                  
                                    <div className="mt-1 ">
                                  

                                                

                                        {/* <div className="row"> */}
                                            <div className="text-right d-flex justify-content-center">
                                                {/* <div className="col-lg-4"></div> */}
                                               
                                                <button id="loginbutton" class="btn1 font1 col-sm-9 rounded-corner nextButton font-weight-bold" >NEXT</button>
                                               
                                                {/* <div className="col-lg-4"></div> */}
                                              
                                            </div>
                                          

                                                            </div>

                                        
{/*                                         
                                    <div className="text-center container-fluid text-center">
                                        <p className="font1 text-white col-sm-10 text-middle mx=auto pt=5">Haven't signed up?
                                        <a className="LoginHere text-warning ml-7" href="Registration.html">Sign Up Here</a>
                                        {/* <Link to="./Courses"> Sign Up here </Link> */}
                                        {/* </p>
                                    </div>
                                         */}

                                          <div class="text-center font-weight-blod mt-2 font1">
                        <p class="text-white">
                           Haven't signed up?
                            <a href="/home/prathmesh/React1/hello-world/Registraion.html" class="Loginhere text-warning font1"> Sign Up Here </a>
                        </p>
                    </div>
                                </form>
                                                                
                    

                                </div>
                                    
                        </div>
                        
                        <div className="temp">

                        


                            </div>  
                            
                
                    </div>
                    
                      
                    <div className="col-lg-5 login2">
                 
                        <div className="mt-5">
                            <h4 className="font1 font-weight-bold first-txt text-center">Welcome Back!</h4>
                        </div>
                         
                        <div className="text-center mt-2">
                            <div className="col-12 mt-5">
                          
                                <img src={img4} className="img" alt="error"></img>
                               
                            </div>
                        </div>
                    



                    </div>
 





                </div>
            </div>
            
        </div>
          </ThemeProvider>
    )
}

export default Logincomp
