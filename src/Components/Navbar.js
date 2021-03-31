import React, {Fragment, useState} from 'react'
import {Button,AppBar, Toolbar, Typography,flexbox,Box,Tab,Tabs,TabPanel,Menu,Grid, MenuItem,Hidden,flexGrow} from '@material-ui/core';
import { IconButton } from '@material-ui/core'
import { Link } from "react-router-dom";
import {makeStyles,createMuiTheme,ThemeProvider,withStyles} from '@material-ui/core/styles'
import MenuIcon from '@material-ui/icons/Menu';
import AddIcon from '@material-ui/icons/Add';
import { positions } from '@material-ui/system';
import Popover from '@material-ui/core/Popover';
import DehazeIcon from '@material-ui/icons/Dehaze';

import img1 from './logo.png'
import Fade from '@material-ui/core/Fade';
import Avatar from '@material-ui/core/Avatar';
import Collapse from '@material-ui/core/Collapse';



const BootstrapButton = withStyles({
  root: {
    boxShadow: 'none',
    textTransform: 'none',
    fontSize: 16,
   
   
    lineHeight: 1.5,
   
    '&:active': {
      boxShadow: 'none',
    
    },
    '&:focus': {
    
    },
  },
})(Button);

const styles = {
    paperContainer: {
        height: 13,
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
     backgroundPosition: 'center',
        
    }
};


const theme = createMuiTheme({
  
  typography: {
    fontFamily: [
      'Lato', 'sans-serif'
    ].join(','),
},});



const useStyles = makeStyles (theme => ({

  small: {
    width: theme.spacing(3),
    height: theme.spacing(3),
  },
  large: {
    width: theme.spacing(7),
    height: theme.spacing(7),
    maxWidth : 35
  },

 
sectionDesktop :{
  margin : theme.spacing(-0),

  display: "none",
  [theme.breakpoints.up("md")]: {
      display:"flex",
  },
  //  [theme.breakpoints.up("md")]: {
  //     display:"flex", 
  // },
   
},

 }))

function Navbar() {


  const classes =useStyles()

  const [mobileMenuAnchorEl, setMobileAnchorEl]= useState(null)

  const isMobileMenuOpen = Boolean(mobileMenuAnchorEl);
const openMobileMenu= (event) => {
setMobileAnchorEl(event.currentTarget);

}
const closeMobileMenu= () => {
  setMobileAnchorEl()
}
  const mobileMenu=(
    <Menu color="inherite"
     anchorEl={mobileMenuAnchorEl}
      id="mobile-menu" keepMounted 
    
     open= {isMobileMenuOpen}
      width="200%"
      
       >
      
       {/* <Collapse collapsedHeight= "120px" collapsedWidth= "190px"  > */}
       <ThemeProvider theme={theme}>
    <MenuItem  style={{backgroundColor : "default"}} onClick={closeMobileMenu}component={Link} to="/Courses" color="default">
    Courses
    </MenuItem>

    <MenuItem style={{backgroundColor : "default"}} onClick={closeMobileMenu} component={Link} to="/Testimonials" color="default">
    Testimonials
    </MenuItem >
    <MenuItem  onClick={closeMobileMenu}component={Link} to="/Courses">
       <Button   variant="contained"  size="medium"style={{backgroundColor: "#ffca28",borderRadius: "40px"}} onClick={clickHandler}>Book a free course</Button>
    </MenuItem>
    </ThemeProvider>
    {/* </Collapse> */}
    </Menu>
  )

  function clickHandler (){

      alert("Class Booked")
  }
   
    return (
       <>
    
      <AppBar position="static" color="default"   title={<img src={img1}/>}  >
         <Toolbar color="inherit" fullwidth  >
         <Hidden  smUp="false"> 
           <Avatar  variant="square" alt="Remy Sharp" src={img1} className={classes.large} />
          {/* <Box  className={classes.sectionDesktop} > */}
          </Hidden>
        <Box 
         style={{ flexGrow :1}} 
         display="flex" 
         justifyContent="flex-start"
          // className={classes.sectionDesktop}
            >   
            <BootstrapButton variant= "text"color="inherit" className={classes.sectionDesktop} component={Link} to="/Courses"> Courses and prices </BootstrapButton>
            <BootstrapButton variant="text" color="inherit" className={classes.sectionDesktop} component={Link} to="/Testimonials">Testimonials</BootstrapButton>
              <BootstrapButton variant="text" color="inherit" className={classes.sectionDesktop} component={Link} to="/Logincomp" >Login</BootstrapButton>
             
              </Box> 
      
                   <Box className={classes.sectionDesktop}>
                    <ThemeProvider theme={theme}>            
                       <BootstrapButton  fullwidth  variant="contained"   style={{backgroundColor: "#ffca28", borderRadius: "40px"}} onClick={clickHandler}>Book a free course</BootstrapButton>
                       
                    </ThemeProvider> 
                  </Box>
     
     
     <Hidden  mdUp="false"> 
    <IconButton color="default" onClick={openMobileMenu} edge="end"  >
      <Box 

     position = "static"
        //   style={{ flexGrow :1}} 
        //  display="flex" 
        //   justifyContent="flex-end"
     
       
          // minWidth="195%"
      size="large"
     
        >
         <MenuIcon color="inherit" position="felx-end"  />
         </Box>
  </IconButton>
  </Hidden> 
  
   {/* </Box> */}
  
    </Toolbar>
  
 </AppBar>
 
 {mobileMenu} 

  

     </>   
    )
}

export default Navbar
  
   
    
   
    
       
     
   


 



