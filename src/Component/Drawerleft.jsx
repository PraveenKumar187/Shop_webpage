import { Drawer, IconButton, List, ListItemButton, ListItemIcon, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Drawerleft = () => {
    let list=["Home","Services",'ContactUs','About',]
    let[opendrawer,setopendrawer]=useState(false);
    return ( 
        <>
       <Drawer open={opendrawer} onClose={() => { setopendrawer(false) }}>
  <List>
    <ListItemButton onClick={() => { setopendrawer(false) }}>
      <ListItemIcon>
        <ListItemText><Link to={'/'}>Home</Link></ListItemText>
      </ListItemIcon>
    </ListItemButton>
    <ListItemButton onClick={() => { setopendrawer(false) }}>
      <ListItemIcon>
        <ListItemText><Link to={'/services'}>Services</Link></ListItemText>
      </ListItemIcon>
    </ListItemButton>
    <ListItemButton onClick={() => { setopendrawer(false) }}>
      <ListItemIcon>
        <ListItemText><Link to={'/contact'}>Contact</Link></ListItemText>
      </ListItemIcon>
    </ListItemButton>
    <ListItemButton onClick={() => { setopendrawer(false) }}>
      <ListItemIcon>
        <ListItemText><Link to={'/about'}>About</Link></ListItemText>
      </ListItemIcon>
    </ListItemButton>
  </List>
</Drawer>

        <IconButton sx={{marginLeft:'auto'}} onClick={()=>{setopendrawer(!opendrawer)}}>
<MenuIcon />
        </IconButton>
        </>
     );
}
 
export default Drawerleft;
