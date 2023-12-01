import { Box, Card, CardContent, Divider, Grid, ImageList, ImageListItem, ListItem, Paper, Typography } from "@mui/material";
import ArrowCircleRightIcon from '@mui/icons-material/ArrowCircleRight';
import EmailIcon from '@mui/icons-material/Email';
import CallIcon from '@mui/icons-material/Call';
import FacebookIcon from '@mui/icons-material/Facebook';
import InstagramIcon from '@mui/icons-material/Instagram';
import LocationOnIcon from '@mui/icons-material/LocationOn';
const itemData = [
  {
    img: 'https://i.pinimg.com/736x/9d/49/ff/9d49ff8a6e7fa1706523543752a8a1d3.jpg',
    title: 'interior Design',
  },
  {
    img: 'https://t4.ftcdn.net/jpg/01/01/75/99/360_F_101759983_umTprjVtO6sJb8fn4lHPMnMi5WXjUoeE.jpg',
    title: 'caring stylist',
  },
  {
    img: 'https://png.pngtree.com/thumb_back/fh260/background/20221120/pngtree-set-of-makeup-brushes-in-light-case-capturing-the-essence-of-beauty-and-cosmetics-photo-image_40885092.jpg',
    title: 'make up sets',
  },
  {
    img: 'https://media.istockphoto.com/id/1384893182/photo/smiling-makeup-artist-doing-makeup-for-woman-in-beauty-salon.jpg?s=612x612&w=0&k=20&c=JqH74rnkp1YkdXbatfSqXYC7PmYnyxA4TuyaLf512Mk=',
    title: 'women',
  },
  {
    img: 'https://i.pinimg.com/736x/4a/76/0c/4a760c9f098e6ffbc502f32d34c0f20b.jpg',
    title: 'men',
  },
  {
    img: 'https://i.pinimg.com/1200x/ed/8b/aa/ed8baa22887d9567428bcf84cb2659b9.jpg',
    title: 'Mirror',
  },
  {
    img: 'https://i.pinimg.com/originals/25/99/97/25999734af291b3f659a4e4a6d0319f3.jpg',
    title: 'Wall',
  },
];
const Firstpg = () => {
let imageURL='https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&fit=crop&q=80&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8aGFpciUyMHNhbG9ufGVufDB8fDB8fHww&w=1000'

    return ( 
        <div>
            <Card sx={{background: 'linear-gradient(45deg,  #000 60%, #555E68 100%)',color:'white'}}>
                <CardContent>
                    <br></br><br></br><br></br><br></br>
                   <Grid > <Typography sx={{fontFamily:'revert-layer',fontSize:'70px',fontWeight:'700'}}> Great Hair For All</Typography></Grid>
                    <Typography sx={{fontFamily:'monospace'}}>" With good-looking hair, I can deal with anything " </Typography>
                    <Typography>for good-looking hair come to P N unisex salon</Typography>
                    <br></br><br></br>
                </CardContent>
            </Card>
            <Card sx={{ backgroundImage: `url(${imageURL})`,opacity:'0.9',height:'auto',color:'#876F25'}}>
                <CardContent>
                    <br></br><br></br><br></br><br></br><br></br><br></br><br></br>
                   <Grid ><Typography  sx={{fontFamily:'revert-layer',fontSize:'70px',textAlign:'left',fontWeight:'700'}}>Your Hair</Typography><Typography  sx={{fontFamily:'revert-layer',fontSize:'70px',textAlign:'left'}}>Is Your Crown</Typography></Grid>
                   <Box sx={{ flexGrow: 1,color:'white' }}>
      <Grid container spacing={2} direction={"column"}>
        <Grid ListItem xs={6}>

          <ListItem> <ArrowCircleRightIcon/>Your relationship with us is a personal one! From our relaxing and cozy atmosphere to our customer centric team that focuses on you, we know you will leave feeling pampered and refreshed.</ListItem>
        </Grid>
        <Grid ListItem xs={6}>
          <ListItem> <ArrowCircleRightIcon/> Our premiere unisex salon in R.S Puram, Coimbatore provides professional services from hair cutting, colouring and styling to texturizing and smoothening services. Our highly trained and talented stylists will make sure you look and feel your best.</ListItem>
        </Grid>
        
      </Grid>
    </Box>
                </CardContent>
            </Card>

            <Card>
                <CardContent sx={{backgroundColor:'#E0C77D'}}>

           <Box sx={{ flexGrow: 1 }}>
{/* --------------------------------- */}
<Grid container spacing={8}>
      <Grid item xs={12} md={4}>
      <Paper style={{ padding: '16px' }}>
          <Typography variant="h3">01</Typography>
           <Typography variant="h6"> We Offer</Typography>
          <Typography variant="body1">
          A wide range of services including haircuts, scrunching, color, keratin, blowouts and much more.
          </Typography>
          <img height={400} width={250}  src="https://www.behindwoods.com/telugu-actress/ritu-varma/ritu-varma-stills-photos-pictures-105.jpg"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h3"> 02</Typography>
          <Typography variant="h6"> Hair Styling</Typography>
          <Typography variant="body1">
        
  
Find the perfect hairstyle for you with our men and women advanced hair styling services.          </Typography>
          <img height={400} width={250}  src="https://haircutinspiration.com/wp-content/uploads/Thin-Pocky-Brush-Up-with-Low-Drop-fade.jpeg"></img>

        </Paper> 
      </Grid>
      <Grid item xs={12} md={4} >
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h3">03</Typography>
           <Typography variant="h6">Hair Spa</Typography>
          <Typography variant="body1">
Make your hair look a million bucks, with affordable spa services and the latest trends.     </Typography>
          <img height={400} width={350}  src="https://images.shaadisaga.com/shaadisaga_production/photos/pictures/002/141/206/new_medium/Simi_Makwana.jpg?1606815885"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h3"> 04</Typography>
          <Typography variant="h6"> Skin Care</Typography>
          <Typography variant="body1">
The best unisex salon around coimbatore with  skin care treatments like threading, waxingcure,and more.   </Typography>       <img height={400} width={250}  src="https://actressalbum.com/wp-content/uploads/2017/07/actressalbum.com_glamorous-telugu-girl-ritu-varma-in-pink-dress-at-movie-interview.2.jpg"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        {/* Paragraph */}
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h3"> 05</Typography>
          <Typography variant="h6"> Bridals</Typography>
          <Typography variant="body1">
We make our brides and grooms feel like the most beautiful people in the world. </Typography>         <img height={400} width={250}  src="https://www.weddingsutra.com/images/wedding-images/bride/types-bridal-makeup/types-bridal-makeup-pic5.jpg"></img>

        </Paper>
      </Grid>
      <Grid item xs={12} md={4}>
        
        <Paper style={{ padding: '16px' }}>
          <Typography variant="h3"> 06</Typography>
          <Typography variant="h6"> Facials</Typography>
          <Typography variant="body1">     
       The one-stop beauty destination for all your beauty needs for the best look based on your face structure.   </Typography>       <img height={400} width={250}  src="https://static.wixstatic.com/media/c508e3_751f9fb7b372450b84d532a7c5b5124e~mv2.jpg/v1/fill/w_420,h_630,al_c,lg_1,q_80,enc_auto/c508e3_751f9fb7b372450b84d532a7c5b5124e~mv2.jpg"></img>
        </Paper>
      </Grid>
    </Grid>
    </Box>

                </CardContent>
            </Card>
<Card sx={{backgroundColor:'ActiveBorder'}}>
<CardContent>
  <br></br>
<Typography  sx={{color:'white',fontSize:'100px',fontFamily:'serif', fontWeight:'800',textAlign:'left'}}>sallon design</Typography><br></br>
<Typography sx={{color:'white',textAlign:'left'}} variant="body1">Explore your potential with a state-of-the-art unisex salon </Typography>
<Typography sx={{color:'white',textAlign:'left'}} variant="body1">in Coimbatore that offers the best experience.</Typography><br></br>
<Box>

<ImageList variant="quilted" sx={{ gap:'70px'}} cols={4}  >

{
  itemData.map((image,index)=>{return(
    <ImageListItem key={index} >
  <img src={image.img} alt={image.title}  loading="lazy"></img>
</ImageListItem>
  )})
}

</ImageList>

</Box>
</CardContent>

</Card>
<Card sx={{backgroundColor:'#4E4B42 ',color:'white'}}>
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
        </div>
     );
}
 
export default Firstpg;