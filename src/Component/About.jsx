import { Box, Card, CardContent, Grid, Paper, Typography } from "@mui/material";
import Footer from "./Footer";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';

const About = () => {
    return ( 
        <>
 <Card sx={{backgroundImage:''}}>
                <CardContent >
                <img  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/hero.jpg" alt="no photo" style={{height:'400px',width:'100%',opacity:'0.7'}} />

                </CardContent>
                <Typography variant="h1" style={{position:'relative',bottom:'300px',color:'white',fontFamily:'initial',fontWeight:'1000'}}>ABOUT</Typography>
            </Card>
            
{/* --------------------------------- */}
<Grid container spacing={14}>
      <Grid item xs={12} md={2.5}>
      <Paper style={{ padding: '16px' }}>
          <Typography variant="h4">Ganesan</Typography>
           <Typography variant="h6"> Founder & Creative Director</Typography>
          <Typography variant="body1" sx={{fontSize:'20px'}}>
          More than 15 years of experience working with top models and celebrities
          </Typography>
          <img height={150} width={100} style={{borderRadius:'50%'}} src="https://media.licdn.com/dms/image/D5603AQES3hgiyJ-nXw/profile-displayphoto-shrink_800_800/0/1688560032898?e=2147483647&v=beta&t=6Ar-z9Bigt_2Yv5LhDzYjhp0QG9yzvroyXgjcpVnZMg"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={2.5}>
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h4"> JumRaj</Typography>
          <Typography variant="h6">Creative Director</Typography>
          <Typography variant="body1">
          Unisex Hairdresser with 10+ years of experience in Haircut, Hair colour and chemical treatment, Jum Raj is one of our customer favourite.          </Typography>
          <img  height={150} width={100} style={{borderRadius:'50%'}} src="https://haircutinspiration.com/wp-content/uploads/Thin-Pocky-Brush-Up-with-Low-Drop-fade.jpeg"></img>

        </Paper> 
      </Grid>
      <Grid item xs={12} md={3} >
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h4">sathishkumar</Typography>
           <Typography variant="h6">senior stylist</Typography>
          <Typography variant="body1">
          Unisex Hair dresser with 10+ years of experience, Sathish has been a core part of our team from the start of our unisex hair salon franchise helping customers with specific hair styling, colouring and treatment requirements    </Typography>
          <img  height={150} width={100}   style={{borderRadius:'50%'}} src="https://i.pinimg.com/236x/2d/0a/f5/2d0af525815ed1c3c083e06d1f2d346e.jpg"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={2.5}>
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h4"> Namratha</Typography>
          <Typography variant="h6"> senior stylist</Typography>
          <Typography variant="body1">
With 8+ years of experience as a unisex hair stylist, Namratha specializes in unisex hair cut, hair coloring and chemical treatments
.   </Typography>       <img  height={150} width={100}   style={{borderRadius:'50%'}} src="https://actressalbum.com/wp-content/uploads/2017/07/actressalbum.com_glamorous-telugu-girl-ritu-varma-in-pink-dress-at-movie-interview.2.jpg"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h3"> Sri_Mathi</Typography>
          <Typography variant="h6"> stylist</Typography>
          <Typography variant="body1">
          With more than a decade of experience in Hair styling, coloring and treatment, Malar is one of our top creative director as an unisex hair stylist. </Typography>         <img  height={150} width={100}   style={{borderRadius:'50%'}} src="https://www.weddingsutra.com/images/wedding-images/bride/types-bridal-makeup/types-bridal-makeup-pic5.jpg"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={2.5}>
        
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h3"> Raju</Typography>
          <Typography variant="h6"> stylist</Typography>
          <Typography variant="body1">     
          15+ years experience in the field, Raju specializes in coloring treatment and cutting services   </Typography>       <img  height={150} width={100}   style={{borderRadius:'50%'}} src="https://i.pinimg.com/736x/2f/59/3d/2f593db5df2c4d0094ff81a045b746a4.jpg"></img>
        </Paper>
      </Grid>
      <Grid item xs={12} md={3}>
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h3">gayathri</Typography>
          <Typography variant="h6"> stylist</Typography>
          <Typography variant="body1">
          With more than a decade of experience in Hair styling, coloring and treatment, Malar is one of our top creative director as an unisex hair stylist. </Typography>         <img  height={150} width={100}   style={{borderRadius:'50%'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSDFgxyWjjxjYx8kcglNW67IO8HvTR8eEyIdP625iHM1OTg6hC139QFJPEdGqzzhcvF7hQ&usqp=CAU"></img>

        </Paper>
      </Grid> <Grid item xs={12} md={3}>
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h3"> mithin</Typography>
          <Typography variant="h6"> stylist</Typography>
          <Typography variant="body1">
          With more than a decade of experience in Hair styling, coloring and treatment, Malar is one of our top creative director as an unisex hair stylist. </Typography>         <img  height={150} width={100}   style={{borderRadius:'50%'}} src="https://i.pinimg.com/736x/d4/c9/07/d4c907274eebe6c4595eedf179951693.jpg"></img>

        </Paper>
      </Grid>
    </Grid>
  
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
 
export default About;