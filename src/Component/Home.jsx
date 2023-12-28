import { Button, Drawer, Typography, useMediaQuery, useTheme } from '@mui/material';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Tabs from '@mui/material/Tabs';
import { useState } from 'react';
import Drawerleft from './Drawerleft';
import { Link } from 'react-router-dom';


const Home = () => {
    let[value,setvalue]=useState();
    let theme=useTheme();

    const ismatch=useMediaQuery(theme.breakpoints.down('md'))
    
    return ( 
<>
<AppBar sx={{backgroundColor:'transparent' , color:'white'}}>
<Toolbar>
    <Typography sx={{fontFamily:'fantasy'}}>
        P N
    </Typography>
    <Typography sx={{fontSize:'10px'}} >
        . stylish hair
    </Typography>

{ ismatch ? (
<Drawerleft/>
    ):(
        <Tabs sx={{marginLeft:'auto'}}textColor='inherit' onChange={(e,value)=>{setvalue(value)}}  value={value} indicatorColor='secondary'>
       <Link to={'/'}> <Button variant='outlined' >Home</Button></Link> &nbsp &nbsp
       <Link to={'/services'}> <Button variant='outlined' >services</Button></Link>
        <Link to={'/contact'}><Button variant='outlined'>contact</Button></Link>
       <Link to={'/about'}> <Button variant='outlined'>About</Button></Link>
        </Tabs>
    )
}

    
 </Toolbar>

 </AppBar>
 <div>
    
 </div>
 </>
     );
}
 
export default Home;