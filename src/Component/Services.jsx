import { Box, Card, CardContent, Divider, Grid, Paper, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { useState } from "react";
import EmailIcon from '@mui/icons-material/Email';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import Footer from "./Footer";



const serviceitems=[
    {
       image:'https://ml0sepl1esgb.i.optimole.com/w:960/h:960/q:mauto/f:best/https://f2hairdressers.in/wp-content/uploads/2020/08/hair-salon-cta-bg.jpg',
       title:'Hair Cut, Care & Styling',
       detail:'From haircut to glaze and straightening to color. You’ll be amazed the full line of hair services we offer at your salon! A family salon with a wide range of hair care services for men, women & children',
       
    },
    {
        image:'https://haircutinspiration.com/wp-content/uploads/Thin-Pocky-Brush-Up-with-Low-Drop-fade.jpeg',
        titlt:'Beauty & Skincare',
        detail:'Relish the beauty of life with a refreshing facial regime, manicure, waxing and more.'
    },
    {
        image:'https://ml0sepl1esgb.i.optimole.com/w:960/h:960/q:mauto/f:best/https://f2hairdressers.in/wp-content/uploads/2023/03/f2-hairdressers-bridal-serivces-coimbatore.png',
        title:'Wedding & Modelling.',
        detail:'Beauty for all – Wedding and Modeling Make Up done by top bride and groom make up artists.'
    }
]

const Services = () => {
   
    const[Details,SetDetail]=useState(false);
const handleDetail=()=>{
    SetDetail(true)
}
console.log(Details);

    return ( 
        <div>
            {/* <Card sx={{height:'400px'}}>
                <CardContent>
<img src="https://www.mygreentrends.in/wp-content/uploads/2020/09/men-banner.jpg" alt="no photo" />

                </CardContent>
            </Card> */}


<Card sx={{backgroundImage:''}}>
                <CardContent >
                <img  src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3/hero.jpg" alt="no photo" style={{height:'400px',width:'100%',opacity:'0.7'}} />

                </CardContent>
                <Typography variant="h1" style={{position:'relative',bottom:'300px',color:'white',fontFamily:'initial',fontWeight:'1000'}}>SERVICES</Typography>
            </Card>

<Grid  sx={{backgroundColor:'GrayText'}}>
<Typography variant="h2" style={{fontWeight:'1000'}}>Styling, Beauty & Spa</Typography>
</Grid>
             <Card sx={{backgroundColor:'GrayText'}}>
                <CardContent>

                   <Stack 
                    direction="row" 
                    spacing={14} 
                    alignItems="center"
                     justifyContent="center" >
                   
                                          
                       <Grid container spacing={8} >

<Grid item xs={12} md={4}>

<Typography variant="h4">Hair Care</Typography>
<br></br><br></br>
                    <Typography variant="h6">We are one of the best unisex salon in Coimbatore that offers trendy haircuts and hair styling services like blowouts, keratin treatments, hair coloring and more. Experience the best haircut and hairstyle services for women, men and children</Typography>
                       </Grid>
<Grid item xs={12} md={4}>
    <Typography variant="h4">Facials & Skin Care</Typography>
    <br></br><br></br>
    <Typography variant="h6">Our skilled professionals are specialized in facials, waxing, pedicure, manicure and other skin care services for both men and women. With our beauty & skin care services, you’ll instantly feel beautiful again.</Typography>
</Grid>
<Grid item xs={12} md={4}>
    <Typography variant="h4">Bridals & Modelling</Typography>
    <br></br><br></br>
    <Typography variant="h6">We offer services for all your beauty needs including wedding makeup for men and women. A one stop unisex salon for wedding and modelling makeup services for all genders. Contact us today to book an appointment.</Typography>
</Grid>

                       </Grid>
</Stack>
                    <Paper sx={{ maxWidth: 750 ,alignItems:'center'}}>
                      
                       </Paper>
                </CardContent>
            </Card>
<Card>
    <CardContent>
        <Grid container spacing={2}>
            {
             serviceitems.map((item)=>{
                    <Grid item xs={12}>
<img src={item.image}/>
<Typography variant="h2">{item.title}</Typography>

            </Grid>
                })
            }
          
        </Grid>
    </CardContent>
</Card>

   <Card>
    <CardContent >
        <Typography variant="h3" sx={{fontWeight:'800'}} >Signature Services</Typography>
<Divider/>
        <Grid container spacing={8}>
      <Grid item xs={12} md={4}>
      <Paper style={{ padding: '16px' }}>
          <Typography variant="h3">01</Typography>
           <Typography variant="h6"> Detox Treatment</Typography>
          <Typography variant="body1">
          A detox can bring life back to dull, flat hair, adding more volume and shine, your hair will be ready to thrive
          </Typography>
          <img height={450} width={350}  src="https://www.stylecraze.com/wp-content/uploads/2015/06/10-Simple-Home-Remedies-To-Detox-Your-Hair-2.jpg"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
      <Paper style={{ padding: '16px' }}>
          <Typography variant="h3">02</Typography>
           <Typography variant="h6"> Ritual Hair Treatment</Typography>
          <Typography variant="body1">
          a personalized, quick & result oriented ritual that'll treat your hair and make it soft and shiny.
          </Typography>
          <img height={450} width={350}  src="https://i0.wp.com/jayashankarrakhi.in/wp-content/uploads/2023/08/Curlvana-1.jpg?fit=761%2C846&ssl=1"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
      <Paper style={{ padding: '16px' }}>
          <Typography variant="h3">03</Typography>
           <Typography variant="h6"> Perms and Relaxers.</Typography>
          <Typography variant="body1">
          A chemical perm and relaxer are two totally different directions. A relaxer is designed to straighten your curl pattern.
          </Typography>
          <img height={450} width={250}  src="https://img.freepik.com/premium-photo/woman-with-curly-hair-smiles-camera_777078-4000.jpg"></img>

        </Paper>
      </Grid>
     
      </Grid>
    </CardContent>
   </Card>
<Card>
    <CardContent>
        
    </CardContent>

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

        </div>
     );
}
 
export default Services;