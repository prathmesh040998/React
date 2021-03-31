
import './Apps.css';
import React,  { useState } from 'react';
import { Button, ButtonGroup,Card,CardGroup,CardText, CardBody,
  CardTitle, CardSubtitle,Row,CardHeader,Nav,Navbar,NavItem,NavLink, NavbarToggler, Collapse,Modal, ModalHeader, ModalBody, ModalFooter,Media} from 'reactstrap';
import {Box} from "@material-ui/core"
import img1 from "./image92.svg"
const App = (props) => {
  const [isOpen, setIsOpen] = useState(false);
  const toggle = () => setIsOpen(!isOpen);

  const {
    BuyNow,
    App
  } = props;

  const [modal, setModal] = useState(false);

  const toggle1 = () => setModal(!modal);
  const closeBtn = <button className="close" onClick={toggle1}>&times;</button>;

  const [cSelected, setCSelected] = useState([]);
  const [rSelected, setRSelected] = useState(null);
  const onCheckboxBtnClick = (selected) => {
    const index = cSelected.indexOf(selected);
    if (index < 0) {
      cSelected.push(selected);
    } else {
      cSelected.splice(index, 1);
    }
    setCSelected([...cSelected]);
  }

  return (  
   <Box >
<div >
       <div className="App"  style={{backgroundColor: "#ffebee"}}>
      <div className="col-sm-12">
      <div className="row">
        <div className="col-sm-4">
          <h2 className="font font-weight-bold mt-5">Courses And Pricing</h2>
        </div>
        <div className="container">
          <div className="col-sm-12 mr-3">
           <Row>The courses for each age group are divided into three modules with increasing complexity. Our packages
            offer 1:1</Row>
     
           <Row >live interactive sessions between the student and teacher, we do not assume any knowledge of coding so any child</Row>
           <Row>can learn to code. The packages are designed relative to ages of the children.</Row>
          </div>
        </div>  
        
        <div className="col-sm-12 mt-5">
          <h4 className="d-flex justify-content-center font1 font-weight-bold">Select age group</h4>
        </div>
      </div>
   
    
      <div className="row no-gutters">
      <ButtonGroup size="lg" className="mx-auto">
        <Button style={{width:350}} outline color="danger" onClick={() => setRSelected(1)} active={rSelected === 1}>Upto 9 years<div>Beginner</div></Button>
        <Button style={{width:350}} outline color="danger" onClick={() => setRSelected(2)} active={rSelected === 2}>9-12 years<div>Intermidiate</div></Button>
        <Button style={{width:350}} outline color="danger" onClick={() => setRSelected(3)} active={rSelected === 3}>13-14 years<div>Advanced</div></Button>
        {/* <p>Selected: {rSelected}</p> */}
      </ButtonGroup>
      </div>    
  </div>    
    
    <div className="col-sm-12 mt-5">
        <div className="row">
              <div className="col-sm-4">
                <h3 className="font-weight-bold text-lg font1 ml-6">Free Class!</h3>
              </div>
              <div className="col-sm-6">  
                <h6>Your first class is on us! Attend a trial class completly
                  free of cost! All you need is a laptop/ computer and
                  an internet connection!</h6>
                  <Box component="div" display="outline">inline</Box>
                  <Button className="col-sm-2"color="warning" size="lg">Book A FREE CLASS</Button>  
              </div> 
        </div>
    </div>
    
    <CardGroup>
      <Card className="col-sm-4 mt-5 mr-5 ml-5">
        <CardBody>
          <CardHeader tag="h5"    style={{backgroundColor : '#4caf50'}}>MODULE 1 <div>Classes08</div></CardHeader>
          <CardSubtitle tag="h7" className="mb-2 font-weight-bold" >CURRICULUM</CardSubtitle>
          <CardText className="card-text font1">
           <li>Block based programming</li>
                <li className="pt-2">Sequences and loops</li>
                <li className="pt-2">Events</li>
                <div className="pt-2"> Certification for Proficiency in basics
                of coding.
                </div>
              <h3  className="text-center font-weight-bold font1 pt=2">
                <span className="india-price">
                  &#8377; 3,000</span>
              </h3>
            </CardText>  
           
          <Button color="danger" className=" btn-lg col-sm-8 rounded-corner" onClick={toggle1}>{BuyNow}Buy Now</Button>
          <Modal isOpen={modal} toggle={toggle1} className={App}>
            <ModalHeader toggle={toggle1} close={closeBtn}>Contact Us To Unroll</ModalHeader>
            <ModalBody>
                <li> +91 9511841742</li>
                <li> +91 75062 62683</li>
                <li>+971 50 217 0872</li>
                <li>hr@code-gurukul.com</li>
                <li>support@code-gurukul.com</li>
            </ModalBody>
            <ModalFooter>
              <Button color="primary" onClick={toggle1}>Do Something</Button>{' '}
              <Button color="secondary" onClick={toggle1}>Cancel</Button>
            </ModalFooter>
          </Modal>
        </CardBody>  
      </Card>

      <Card className="col-sm-4 mt-5 mr-5 ml-5">
        <CardBody>
          <CardHeader tag="h5"  style={{backgroundColor : '#4caf50'}}>MODULE 2<div>Classes40</div></CardHeader>
          <CardSubtitle tag="h7" className="mb-4 font-weight-bold">CURRICULUM</CardSubtitle>
          <CardText class="card-text font1">
                <li>Algorithms, conditionals and variables</li>
                <li>Extended loops, functions</li>
                <li>Basics of app development,introduction to User Interface/User Experience</li>
                 Basic App Developer and Game Developer Certification                
                <h3 className="text-center font-weight-bold font1">
                <span className="india-price">
                  &#8377; 14,000</span>
              </h3>
            </CardText>  
            <Button color="danger" className=" btn-lg col-sm-8 rounded-corner" onClick={toggle1}>{BuyNow}Buy Now</Button>
              <Modal isOpen={modal} toggle={toggle1} className={App}>
                <ModalHeader toggle={toggle1} close={closeBtn}>Contact Us To Unroll</ModalHeader>
                <ModalBody>
                    <li> +91 9511841742</li>
                    <li> +91 75062 62683</li>
                    <li>+971 50 217 0872</li>
                    <li>hr@code-gurukul.com</li>
                    <li>support@code-gurukul.com</li>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle1}>Do Something</Button>{' '}
                  <Button color="secondary" onClick={toggle1}>Cancel</Button>
                </ModalFooter>
              </Modal>
        </CardBody>
      </Card>  
     
      <Card  className="col-sm-4 mt-5 mr-5 ml-5">
        <CardBody>
          <CardHeader tag="h5"  style={{backgroundColor : '#4caf50'}}>MODULE 3<div>Classes100</div></CardHeader>
          <CardSubtitle tag="h7" className="mb-4 font-weight-bold">CURRICULUM</CardSubtitle>
          <CardText className="card-text font1">  
                <li>Algorithms, conditionals and variables</li>
                <li>Extended loops, functions</li>
                <li>Basics of app development, introduction to User Interface/User Experience</li>
                 Course certification, Interaction with Industry Experts
              <h3 className="text-center font-weight-bold font1">
                <span className="india-price">
                  &#8377; 30,000 </span>
              </h3>
              </CardText>
              <Button color="danger" className=" btn-lg col-sm-8 rounded-corner" onClick={toggle1}>{BuyNow}Buy Now</Button>
              <Modal isOpen={modal} toggle={toggle1} className={App}>
                <ModalHeader toggle={toggle1} close={closeBtn}>Contact Us To Unroll</ModalHeader>
                <ModalBody>
                    <li> +91 9511841742</li>
                    <li> +91 75062 62683</li>
                    <li>+971 50 217 0872</li>
                    <li>hr@code-gurukul.com</li>
                    <li>support@code-gurukul.com</li>
                </ModalBody>
                <ModalFooter>
                  <Button color="primary" onClick={toggle1}>Okay</Button>{' '}
                  <Button color="secondary" onClick={toggle1}>Cancel</Button>
                </ModalFooter>
              </Modal>
        </CardBody>
      </Card>  
    </CardGroup>    
</div>   
   <div className=" mt-5">
     <h2 className="text-center">What our student's say</h2>
   <Media >
      <Media left top href="#">
        <Media object data-src="Ojas.svg/64*64" alt="Generic placeholder image" />
      </Media>
      <Media body>
        <Media heading>
          Ojas, 7 years
        </Media>
    
         <Row>“I had a lot of fun learning to code</Row><Row> with Code Gurukul. I had never</Row><Row> thought coding would be so much fun!!”</Row>
      </Media>
    </Media>
    <Media className="mt-5">
        <Media left middle href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
             Advika, 9 years
          </Media>
          <Row>“I loved the way my mentor inspired</Row><Row>me to look at problems as</Row><Row>opportunities. I have already started</Row><Row>attempting to apply my coding skills to my everyday activities.”</Row>
        </Media>
      </Media>
      <Media className="col-sm-6">
        <Media left top href="#">
          <Media object data-src="holder.js/64x64" alt="Generic placeholder image" />
        </Media>
        <Media body>
          <Media heading>
             Advika, 9 years
          </Media>
          <Row>“I loved the way my mentor inspired</Row><Row>me to look at problems as</Row><Row>opportunities. I have already started</Row><Row>attempting to apply my coding skills to my everyday activities.”</Row>
        </Media>
      </Media>  
   </div>
</div>
</Box>
  );
}
export default App;



// import React from 'react'
// import {Box,Checkbox,FormControlLabel, Typography, TextField ,Grid,Container, Button,Paper,FormControl,FormControlLable,Input, InputLabel ,FormHelperText} from "@material-ui/core"
// import {makeStyles,createMuiTheme,ThemeProvider} from "@material-ui/core/styles"
// import img1 from './aa.png'
// import img2 from './icon.svg'
// import img3 from './wh.png'

// import CssBaseline from '@material-ui/core/CssBaseline';
// import Avatar from '@material-ui/core/Avatar';
// import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
// import Link from '@material-ui/core/Link';
// import Fab from "@material-ui/core/Fab";
// import WhatsAppIcon from '@material-ui/icons/WhatsApp';




// const styles = {
//     paperContainer: {
//         height: 1356,
//         width : 793,
//         backgroundImage: `url(${img1})`,
//         backgroundSize: 'cover',
//      backgroundPosition: 'center',
        
//     }
// };
// const styles1 = {
//     paperContainer: {
//         height: 1356,
//         width : 793,
//         backgroundImage: `url(${img2})`,
//         backgroundSize: 'cover',
//      backgroundPosition: 'center',
        
//     }
// };

// const theme = createMuiTheme({
  
//   typography: {
//     fontFamily: [
//       'Lato', 'sans-serif'
//     ].join(','),
// },});



// const useStyles = makeStyles((theme) => ({

// submit: {
//     margin: theme.spacing(3, 0, 2),
//   },

//     paper: {
//     marginTop: theme.spacing(8),
//     display: 'flex',
//     flexDirection: 'column',
//     alignItems: 'center',
   
//   },
//   avatar: {
//     margin: theme.spacing(1),
//     backgroundColor: theme.palette.secondary.main,
//   },
//   form: {
//     width: '100%', // Fix IE 11 issue.
//     marginTop: theme.spacing(1),
//   },
//     root :{
//         width : "100hw",
//         height : "100vh",
//         backgroundColor : theme.palette.grey[300],
//         paddingTop: theme.spacing(5)
//     },
// }));


// function Courses() {
//     const classes=useStyles();

//     function whats () {
//       alert("Hello whatsapp")
//     }

//     return (
//         <>  
//        <ThemeProvider theme={theme}>
//         <Box >
//            <Grid  container   >
            
//              <Grid item lg={7} md={5} xs={12}

//              backgroundColor="primary" 
//              align-content="left" 
//              className={classes.root}
//            style={styles1.paperContainer}
//              >
            
         

//             <Container component="main" maxWidth="xs">
//                 <CssBaseline />
//                 <div className={classes.paper}>
       
//         <Typography component="h1" variant="h5">
//           Login
//         </Typography>
//         <form className={classes.form} noValidate>
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             id="email"
//             label="Email Address"
//             name="email"
//             autoComplete="email"
//             autoFocus
//           />
//           <TextField
//             variant="outlined"
//             margin="normal"
//             required
//             fullWidth
//             name="password"
//             label="Password"
//             type="password"
//             id="password"
//             autoComplete="current-password"
//           />
//           <Box mr={27} style1={styles.paperContainer}>
//           <FormControlLabel 
//             control={<Checkbox value="remember" color="primary" />}
//             label="Keep me signed in"
//           />
              
//           </Box>
       
//           <Button
//             type="submit"
//             fullWidth
//             variant="contained"
//             color="primary"
//             className={classes.submit}
//              style={{backgroundColor: "#ffca28", borderRadius: "15px"}}
//               color="#212121">
          
//             Next
//           </Button>

//           <Grid container>
//             <Grid item xs>
         
//                <Box mx="auto">
//                 Haven't signed up?
//                  <Link href="#" variant="body2">
//                 {" SIGN UP HERE"}
//               </Link>
//               </Box> 
              
//             </Grid>
          
           
//           </Grid>
                   
//         </form>
//       </div>
//       <Box mt={8}>
        
//       </Box>
//     </Container>
//      <Box onClick={whats}>
//                 <Avatar variant="outlined" alt="Remy Sharp" src={img3}  />
//                 </Box>
//            </Grid>
 
//  <div style={styles.paperContainer}>


        

//             </div>
                    
// </Grid>

// </Box>
// </ThemeProvider>
//         </>
       
//        )
// }

// export default Courses
