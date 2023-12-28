import { Box, Card, CardContent, Grid, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from "./Footer";
const Contact = () => {
    return ( 
       <>
        <Card>
                <CardContent >
                <img  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/hero.jpg" alt="no photo" style={{height:'400px',width:'100%',opacity:'0.7'}} />

                </CardContent>
                <Typography variant="h1" style={{position:'relative',bottom:'300px',color:'white',fontFamily:'initial',fontWeight:'1000'}}>CONTACT</Typography>
            </Card>

<Card >

<Grid container spacing={2} direction={"row"} >
<Grid item  xs={6}>
    <Typography variant="h2">Make your Entrepreneurial dreams a reality</Typography>
    <Typography variant="h6">With an unmatched set up and support system, owning a green trends salon is the ideal choice to make your entrepreneurial dreams come true.</Typography>
  </Grid>
  <Grid item xs={4}  style={{position:'relative', left:'10%'}}>
    <img src="https://media.istockphoto.com/id/1345109800/photo/young-beautiful-woman-stock-photo.jpg?s=612x612&w=0&k=20&c=dB00lp8w1puL-F9AiGPg2DHoJI7ZzAbRCe_vGqQnZwI=" alt="no photo"/>
  </Grid>
 
</Grid>

</Card>


       <Footer/>

       <Card>
    <CardContent style={{ display: 'flex', justifyContent: 'space-between' }}>
        <Box style={{ textAlign: 'left' }}>
<EmailIcon style={{ fontSize: '20px' }}/>
<FacebookIcon style={{ fontSize: '20px' }}/>
<InstagramIcon style={{ fontSize: '20px' }}/>

        </Box>
        <Box style={{ textAlign: 'right' }}>
            <Typography style={{ fontSize: '14px' }}>2023 © style P N PRIVATE_LIMITED </Typography>
            <Typography style={{ fontSize: '14px' }}>WEBPAGE BY PNCODE</Typography>
        </Box>
    </CardContent>
   </Card>
       </>
     );
}
 
export default Contact;