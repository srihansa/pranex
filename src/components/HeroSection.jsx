"use client";
import { ArrowForwardOutlined } from "@mui/icons-material";
import { Button, Typography } from "@mui/material";
import  Box  from "@mui/material/Box";
import { usePathname } from "next/navigation";

export default function HeroSection() {
    const pathname = usePathname();
    const Title = (pathname) =>{
        switch(pathname){
            case('/aboutus'):
                return {
                    main:'Pioneering Industrial ',
                    colormain:'Digital Transformation',
                    subtitle:'We are building the centralized nervous system for modern industrial operations, bridging the gap between demand and fulfillment with transparency and trust.'
                }
            case('/services'):
                return {
                    main:'Comprehensive',
                    colormain:'Industrial Services',
                    subtitle:'Expert solutions ranging from high-voltage electrical installations to complex automation systems and predictive maintenance contracts.'
                }
            case('/procrument'):
                return {
                    main:'Industrial Procurement ',
                    colormain:'Simplified',
                    subtitle:'A unified marketplace for sourcing electrical components, automation parts, and industrial consumables with multi-vendor quotations and transparent tracking.'
                }
            case('/process'):
                return {
                    main:'From Request to Delivery ',
                    colormain:'In 8 Simple Steps',
                    subtitle:'Experience a completely digitized procurement and service management lifecycle designed for transparency, speed, and accountability.'
                }
            case('/contact'):
                return {
                    main:'Contact SantechElectra',
                    colormain:'',
                    subtitle:"We're here to help you optimize your industrial operations. Reach out for service requests, procurement needs, or partnership opportunities."
                }

            default:
                return {
                    main:'Pioneering Industrial ',
                    colormain:'Digital Transformation',
                    subtitle:'We are building the centralized nervous system for modern industrial operations, bridging the gap between demand and fulfillment with transparency and trust.'
                }
        }
    }
  return (
    <Box sx={{textAlign:'center',display:'flex',flexDirection:'column',alignItems:'center',justifyContent:'center',bgcolor:'#0F172B',height:pathname==='/procrument'?'90vh':'80vh',width:'100%',px:5,}}>
        <Typography sx={{fontFamily: "var(--font-aldrich)",fontWeight:400,fontSize:'60px',color:'#FFFFFF',lineHeight:1}}>
            {Title(pathname).main}
        </Typography>
        <Typography sx={{fontFamily: "var(--font-aldrich)",fontWeight:400,fontSize:'60px',color:'#51A7EA'}}>
            {Title(pathname).colormain}
        </Typography>
         <Typography sx={{fontWeight:300,fontSize:'20px',color:'#90A1B9',maxWidth:800,mt:1,textAlign:'center'}}>
            {Title(pathname).subtitle}
        </Typography>
        {pathname==='/procrument'&&
        <Button variant="contained" sx={{mt:2,bgcolor:'#F99E3C',boxShadow:'0px 10px 20px 0px #F99E3C4D'}}>
            Start Sourcing 
            <ArrowForwardOutlined sx={{color:'white',ml:2}}/>
        </Button>}
    </Box>
  )
}