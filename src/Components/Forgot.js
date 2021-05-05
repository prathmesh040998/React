
import React from 'react'
import { Container, Row, Col } from 'reactstrap';
import './Styles.css';
import img from "./Artwork.png"
import img4 from "./icon.svg"
import img1 from "./logo.png"
import icon from "./aa.png"
import {Hidden,Box,Button} from "@material-ui/core"
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
        
        <div className="row1">
                <div className="container-fluid  ">
                    

                <div className="row">
                    
                    <div className=" col-xs-12 col-md-12  col-lg-7 login1">

                        <div className="col-sm-2">
                          <Hidden xsDown="true" >
                            <img src={img1} className="img" alt="error" width="80"></img>
                            </Hidden>

                        </div>
                        <div className="row mt-5 p1">
                            <div className="col-sm-2"></div>
                            <div className="col-lg-8 text-center">
                           
                                <h4 className="text-white font font-weight-bold mt-3 p2">
                                   Forgot Password
                                    </h4>
                               
                                <form id="loginForm mt-5">
                                <div className="text-tight d-flex justify-content-center">
                                    <div className="form-row  ">
                                   
                                        <div className="form-group col-xs-3 col-sm-9 mx-auto text-left">
                                        <div class="row">
                                <div className="col-md-12">
                                     {/* <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#">
                                         <img src="https://img.icons8.com/color/16/000000/google-logo.png"></img>
                                              Signup Using Google</a> */}
                                               </div>
                                               </div>
                                                
                                               <Box  mx="auto"   >
                                            <label className="text-white font1 p3 ml-2 mt-5">
                                                Username</label>
                                            <input id="username" class=" text-white p2 form-control inp text-left" type="text"
                                                placeholder="Enter Username " required=""></input>
                                                </Box>
                                        </div>
                                    </div>
                                    </div>
                                 <div className="text-tight d-flex justify-content-center">
                                    <div className="form-row ">
                                        <div className="form-group col-xs-3 col-sm-9 mx-auto text-left mt-1">
                                        <Box  mx="auto">
                                            <label className="text-white font1 ml-2 text-left" height="15px" width="110px">
                                                Email id</label>
                                            <input id="Password" class="form-control inp text-left " type="password"
                                                placeholder="example@example.com " required=""></input>
                                                </Box>
                                        </div>
                                    </div>
                                    
                                    </div>     
                        

                                    <div class="text-center font-weight-blod mt-2 font1 mx-auto">
                         <p class="text-white">
                         <Box  mx="auto">         
                            A link to resete your password will be sent 
                             {/* <a href="Registraion" class="Loginhere text-warning font1"> Sign Up Here </a> */}
                             </Box>
                             <Box style={{width: 300}}  mx="auto" >         
                                  on your registered email-id
                             {/* <a href="Registraion" class="Loginhere text-warning font1"> Sign Up Here </a> */}
                             </Box>
                         </p>
                     </div>
                                  <div className=" text-right d-flex justify-content-center mt-2 ">
                                  

                                                

                                        {/* <div className="row"> */}
                                            <div className="">
                                                <div className="form-row">
                                                {/* <div className="col-lg-4"></div> */}
                                                {/* <Box style={{width: 350}} mx="auto">
                                                <button id="loginbutton" className="btn1 font1 col-sm-9 rounded-corner nextButton font-weight-bold" >NEXT</button>
                                               </Box> */}
                                                 <Box pt="4">                                             
                                         
                                         <Button mt="4"  id="loginbutton" style={{width: 250, backgroundColor: "#ffca28",borderRadius: "10px"}} variant="contained" mx="auto"  >NEXT</Button>
                                         {/* <button id="loginbutton" class="btn font1 col-sm-9 rounded-corner nextButton font-weight-bold">NEXT</button> */}
                                       {/* <div className="col-lg-4"></div> */}
                                       </Box>
                                                {/* <div className="col-lg-4"></div> */}
                                              
                                            </div>
                                          

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

                  
                                </form>
                                                                
                    

                                </div>
                                    
                        </div>
                        
                        <div className="temp">

                        


                            </div>  
                            
                
                    </div>
                    
                      
                    <div className="col-lg-5 login2">
                 
                        <div className="mt-5">
                            <h4 className="font1 font-weight-bold first-txt text-center">Password recovery</h4>
                        </div>
                         
                        <div className="text-center mt-2">
                            <div className="col-12 mt-5">
                          
                                <img src={img4} style={{ width: 390 }} className="img" alt="error"></img>
                               
                            </div>
                        </div>
                      </div>



                  
 





                </div>
            </div>
            
        </div>
        
    )
}

export default Logincomp




// import React from 'react'
// import { Container, Row, Col } from 'reactstrap';
// import './Styles.css';
// import img from "./Artwork.png"
// import img4 from "./icon.svg"
// import img1 from "./logo.png"
// import icon from "./aa.png"
// import {Hidden,Box,Button} from "@material-ui/core"
// import {Link} from "react-router-dom"
// import {makeStyles,createMuiTheme,ThemeProvider,withStyles} from '@material-ui/core/styles'


// const theme = createMuiTheme({
  
//   typography: {
//     fontFamily: [
//       'Lato', 'sans-serif'
//     ].join(','),
// },});



// function Forgot() {
//     return (   
        
//         <div className="row1">
//                 <div className="container-fluid  ">
                    

//                 <div className="row">
                    
//                     <div className="col-12 col-md-12  col-lg-7  login1">

//                         <div className="col-sm-2">
//                           <Hidden xsDown="true" >
//                             <img src={img1} className="img" alt="error" width="70"></img>
//                             </Hidden>

//                         </div>
//                         <div className="row mt-5 p1">
//                             <div className="col-sm-2"></div>
//                             <div className="col-lg-8 text-center">
                           
//                                 <h4 className="text-white font font-weight-bold mt-5">
//                                    Forgot Password
//                                     </h4>
                               
//                                 <form id="loginForm">
//                                     <div className=" text-right d-flex justify-content-center">
//                                     <div className="form-row">

//                                         <div className="form-group col-xs-3 col-sm-9 mx-auto text-left">
//                                         <div class="row">
//                                 <div className="col-md-12">
//                                      {/* <a class="btn btn-lg btn-google btn-block text-uppercase btn-outline" href="#">
//                                          <img src="https://img.icons8.com/color/16/000000/google-logo.png"></img>
//                                               Signup Using Google</a> */}
//                                                </div>
//                                                </div>
                                                
//                                             <Box style={{width: 350}} mx="auto">                        
//                                             <label className="text-white font1 ml-2 mt-5">
//                                                 Username</label>
//                                             <input id="username" class=" text-white p2 form-control inp text-left" type="text"
//                                                 placeholder="Username" required=""></input>
//                                                 </Box>
//                                                 </div> 
//                                         </div>
//                                     </div>
//                                     <div className=" text-right d-flex justify-content-center mt-2 ">
//                                      <div className="form-row">
//                                         <div className="form-group col-xs-3 col-sm-9 mx-auto text-left ">
//                                         <Box style={{width: 350}} mx="auto">                        
//                                             <label className="text-white font1 ml-2 mt-3">
//                                                 Email id</label>
//                                             <input id="username" class=" text-white p2 form-control inp text-left" type="text"
//                                                 placeholder="example@examle.com" required=""></input>
//                                                 </Box>
//                                         </div>
//                                     </div>
//                                     </div>
// {/*
//                                     <div className="form-row">
//                                       <ThemeProvider theme={theme}>      
//                                         <div className="form-group col-xs-3 col-sm-9 mx-auto text-left">
//                                         <label className="text-white font1 ">
//                                             <input type="checkbox"></input> Keep me signed me
//                                                         </label>
//                                         </div>
//                                           </ThemeProvider>
//                                         <div className="container">
//                                         <Hidden mdUp="false" >
//                                          <img src={img4} style={{width: 250}} ></img>
//                                          </Hidden>
//                                             </div>

//                                                   </div>
//                                                    */}
                                   

                                        
// {/*                                         
//                                     <div className="text-center container-fluid text-center">
//                                         <p className="font1 text-white col-sm-10 text-middle mx=auto pt=5">Haven't signed up?
//                                         <a className="LoginHere text-warning ml-7" href="Registration.html">Sign Up Here</a>
//                                         {/* <Link to="./Courses"> Sign Up here </Link> */}
//                                         {/* </p>
//                                     </div>
//                                          */}

//                                           <div class="text-center font-weight-blod mt-2 font1">
//                         <p class="text-white">
//                         <Box style={{width: 300}} mx="auto">         
//                            A link to resete your password will be sent 
//                             {/* <a href="Registraion" class="Loginhere text-warning font1"> Sign Up Here </a> */}
//                             </Box>
//                             <Box style={{width: 300}}  mx="auto" >         
//                                  on your registered email-id
//                             {/* <a href="Registraion" class="Loginhere text-warning font1"> Sign Up Here </a> */}
//                             </Box>
//                         </p>
//                     </div>
//                     <div className="mt-5 ">
                                  

                                                

//                                   {/* <div className="row"> */}
//                                       <div className="text-right d-flex justify-content-center mt-3">
                                       
//                                           {/* <div className="col-lg-4"></div> */}
//                                      <Box pt="4">                                             
                                         
//                                             <Button mt="4" id="loginbutton" style={{width: 200, backgroundColor: "#ffca28",borderRadius: "10px"}} variant="contained" mx="auto"  >NEXT</Button>
                                          
//                                           {/* <div className="col-lg-4"></div> */}
//                                           </Box>

//                                       </div>
                                   

//                                                       </div>
//                                 </form>
                                                                
                    

//                                 </div>
                                    
//                         </div>
                        
//                         <div className="temp">

                        


//                             </div>  
                            
                
//                     </div>
                    
                      
//                     <div className="col-lg-5 login2 ">
                 
//                         <div className="mt-5">
//                             <h4 className="font1 font-weight-bold first-txt text-center">Password Recovery</h4>
//                         </div>
                         
//                         <div className="text-center mt-">
//                             <div className="col-12 mt-5">
                          
//                                 <img src={img4} style={{ width: 400 }} className="img" alt="error"></img>
                               
//                             </div>
//                         </div>
//                       </div>



                  
 





//                 </div>
//             </div>
            
//         </div>
        
//     )
// }

// export default Forgot
