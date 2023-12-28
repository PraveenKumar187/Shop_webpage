import { Card, CardContent, Divider, Grid, Paper, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const Footer = () => {
    return ( 

       < Card sx={{backgroundColor:'#4E4B42 ',color:'white'}}>
  <CardContent>
    <Grid container spacing={8}>
  <Grid item xs={12} md={4}   >
        {/* Paragraph */}
        <Paper style={{ fontSize: '14px' }}>
        <Typography sx={{fontFamily:'fantasy'}}>
        P N &nbsp;<span style={{fontSize:'20px'}}>stylish hair  &copy;</span> 
    </Typography>
    <br></br>
    <Typography >
   "Book your appointment now for an unforgettable experience with our experienced stylists!"
    </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}  >
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
        <Typography style={{ fontSize: '14px' }} sx={{fontFamily:'fantasy'}}>
        <EmailIcon style={{ fontSize: '14px' }} />&nbsp;&nbsp;
       Praveen@gmail.com  
           
    </Typography>
   
    <Typography style={{ fontSize: '14px' }} sx={{fontSize:'20px'}} >
      <CallIcon style={{ fontSize: '14px' }}/>&nbsp;&nbsp;
         9994099086 
    </Typography>
   
    <Typography>
        <FacebookIcon/>
        <InstagramIcon/>
    </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} md={4}  >
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
        <Typography sx={{fontFamily:'fantasy'}}>
        ADDRESS
    </Typography>
    <Typography style={{ fontSize: '14px' }} >
    <LocationOnIcon/> No 103 Poonthottam Nagar, Near Kalapatti Pirivu, Behind ICICI Bank, Sathy Road, Saravanampatti, Coimbatore.
    </Typography>
    <Divider/>
        </Paper >
      </Grid>
      <Typography style={{ fontSize: '14px' }} sx={{textAlign:"left"}}>P N stylish &copy; 2023, All Right Reserved. </Typography>

      </Grid>
  </CardContent>
</Card>
     );
}
 
export default Footer;