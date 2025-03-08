import { Drawer, IconButton, List, ListItemButton, ListItemText } from "@mui/material";
import { useState } from "react";
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from "react-router-dom";

const Drawerleft = () => {
    const [opendrawer, setopendrawer] = useState(false);

    return ( 
        <>
            {/* Drawer */}
            <Drawer 
                open={opendrawer} 
                onClose={() => setopendrawer(false)}
                anchor="left"
                sx={{
                    "& .MuiDrawer-paper": { 
                        width: 250, 
                        backgroundColor: "#1E1E1E", 
                        color: "#FFF" 
                    }
                }}
            >
                <List sx={{ paddingTop: 2 }}>
                    {["Home", "Services", "Contact", "About"].map((text, index) => (
                        <ListItemButton 
                            key={text} 
                            onClick={() => setopendrawer(false)}
                            sx={{
                                padding: "12px 20px",
                                "&:hover": { backgroundColor: "#333" }
                            }}
                        >
                            <ListItemText>
                                <Link 
                                    to={text.toLowerCase() ==='home'? '/' :`/${text.toLowerCase()}`} 
                                    style={{ 
                                        textDecoration: "none", 
                                        color: "white", 
                                        fontSize: "1rem",
                                        fontWeight: "500"
                                    }}
                                >
                                    {text}
                                </Link>
                            </ListItemText>
                        </ListItemButton>
                    ))}
                </List>
            </Drawer>

            {/* Menu Button */}
            <IconButton 
                sx={{ 
                    marginLeft: 'auto', 
                    color: "white", 
                    backgroundColor: "#333", 
                    padding: "8px",
                    "&:hover": { backgroundColor: "#555" }
                }} 
                onClick={() => setopendrawer(!opendrawer)}
            >
                <MenuIcon />
            </IconButton>
        </>
    );
}

export default Drawerleft;
