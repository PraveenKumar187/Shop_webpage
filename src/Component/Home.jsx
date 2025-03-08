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
<AppBar sx={{backgroundColor:'transparent' ,marginTop:'10px', color:'white'}}>
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
    //     <Tabs sx={{marginLeft:'auto'}}textColor='inherit' onChange={(e,value)=>{setvalue(value)}}  value={value} indicatorColor='secondary'>
    //    <Link to={'/'}> <Button variant='contained' >Home</Button></Link> &nbsp &nbsp
    //    <Link to={'/services'}> <Button variant='contained' >services</Button></Link>
    //     <Link to={'/contact'}><Button variant='contained'>contact</Button></Link>
    //    <Link to={'/about'}> <Button variant='contained'>About</Button></Link>
    //     </Tabs>
    <Tabs
    sx={{
        marginLeft: "auto",
        display: "flex",
        gap: 2, 
        // background: "linear-gradient(to right, #4CAF50, #81C784)",
        padding: "8px 16px",
        borderRadius: "8px",
        boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.2)",
    }}
    textColor="inherit"
    onChange={(e, value) => setvalue(value)}
    value={value}
    indicatorColor="secondary"
>
    {["Home", "Services", "Contact", "About"].map((text, index) => (
        <Link 
            key={text} 
            to={text.toLowerCase() ==='home'? '/' :`/${text.toLowerCase()}`} 
            style={{ textDecoration: "none" }}
        >
            <Button
                variant="contained"
                sx={{
                    backgroundColor: "#fff",
                    color: "black",
                    fontWeight: "bold",
                    borderRadius: "8px",
                    marginLeft:'10px',
                    transition: "0.3s",
                    "&:hover": { 
                        backgroundColor: "#C8E6C9", 
                        transform: "scale(1.05)" 
                    }
                }}
            >
                {text}
            </Button>
        </Link>
    ))}
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