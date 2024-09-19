import { Box, Container, Grid, Typography } from "@mui/material";
import { Poppins } from "next/font/google";
import { colors } from "../../constant/Colors";
import Image from "next/image";
const poppins = Poppins({
    subsets: ["latin"],
    weight: ["300","400","600", "700"],
  });
export default function AboutBroadway() {
    const spanStyle = {fontWeight:700}
    const data = [ 
        "Quality Ingredients",
        "Friendly Service",
        "Customer Satisfaction"
    ]
    return(
        <>
        <Box sx={style.main} >
            <Container sx={style.container} >
        <Grid container columnSpacing={4} >
            <Grid item md={6} xs={12}>
                <Box sx={style.aboutBroadwaybox} >
                    <Typography sx={style.aboutBroadwayHeading} className={poppins.className} >About <span style={spanStyle} >Broadway Pizza</span></Typography>

                    <Typography sx={style.para} className={poppins.className} >An Award-Winning International Pizza Chain with 50+ outlets Nationwide in Pakistan.</Typography>
                    <Typography sx={style.para} className={poppins.className} >Broadway’s magical flavors with the secrets in crust, toppings and the sauces cheers you up when you’re down. The Pizza, bigger in size with the perfect combination of scrumptious toppings along with cheese and the golden stuffed crust marks our endless performance.  <strong> Every Bite is a Performance!</strong></Typography>
               <Box sx={style.missonBox} >
                <Typography sx={style.missonHeading}  className={poppins.className}>Our Mission</Typography>
                <Typography sx={style.para} className={poppins.className} >We aim to serve the highest quality products and provide uncompromising heartfelt services to our valued customers across Pakistan.</Typography>
              <ul className="checkLists" >
                {data.map((data,index)=>{
                    return (
                        <li key={index} >{data}</li>
                    )
                })}
              </ul>
              
               </Box>
                </Box>
            </Grid>
            <Grid item md={6} xs={12}>
                <Box sx={style.imgBox} >
                    <Image style={{borderRadius:"10px",width:"70%",height:"70%"}} alt='oops' src={'/p-img.png'} width={600} height={450} />
                </Box>
            </Grid>
        </Grid>
        </Container>
        </Box>
        </>
    )
};

const style = {
    main:{
        width:"100%",
        height:"100%",
        paddingY:"50px",
        
    },
    container:{
        maxWidth:{xl:"1400px",lg:"1100px"}
    },
    aboutBroadwaybox:{
       width:"100%",
       height:"100%"
    },
    aboutBroadwayHeading:{
        fontSize: "32px",
        fontWeight: 300,
        marginLeft: "0px",
        color:colors.broadwayAboutHeadingColor,
    },
    para:{
        marginTop:"1em",
        fontSize:"14px"
    },
    missonBox:{
        marginTop:"20px",
        background: colors.broadwayMissonBoxColor,
    borderRadius: "15px",
    padding: "30px",
    },
    missonHeading:{
        fontSize:" 32px",
    fontWeight: 300,
    marginLeft: 0,

    color: colors.broadwayAboutHeadingColor,
    },
    imgBox:{
width:"100%",
height:"auto",
        marginTop:"50px",
        borderRadius:"20px",
        display:"flex",
        justifyContent:"center",
        alignItems:"start"
    }
}