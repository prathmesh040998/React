import React from 'react'

import {makeStyles,createMuiTheme,ThemeProvider} from '@material-ui/core/styles'
import {Button,IconButton,Typography} from '';
import "typeface-cormorant";
const theme = createMuiTheme({

  typography: {
    fontFamily: [
      'Cormorant',
      'serif',
    ].join(','),
},});


function Courses() {
    return (
        <div>
        
        <ThemeProvider theme={theme}>
        <Typography>
           <h1 color="primary"> Courses</h1>
        </Typography>
  </ThemeProvider>


        </div>
    )
}

export default Courses;












                  
                
               
                 
          
  