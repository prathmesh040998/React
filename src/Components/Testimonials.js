import React from 'react'

import {Paper,Box,Button} from '@material-ui/core';
import img1 from './aa.png'

const styles = {
    paperContainer: {
        height: 1356,
        backgroundImage: `url(${img1})`,
        backgroundSize: 'cover',
     backgroundPosition: 'center',
        
    }
};


function Testimonials() {
    return (
         <div style={styles.paperContainer}>


          <Button
            type="submit"
            
            variant="contained"
            color="primary"
            
             style={{backgroundColor: "#ffca28", borderRadius: "20px"}}
              color="#212121">
          
            Next
          </Button>
        

            </div>
    )
}

export default Testimonials;
