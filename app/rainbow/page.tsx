'use client'
import {motion} from 'framer-motion';

export default function RainbowDemo(){
    return(
        <>
            <motion.div style={{left:'35%', top:'10%', position:'fixed', width:'20vw', height:'10vh'}}
                // initial={{}}
                animate={{color:['rgb(255,255,255)','rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)','rgb(255,255,255)']}}
                transition={{repeat:Infinity, duration:20}}
            >

                    <h1 style={{fontSize:'20rem', display:'flex', }} >G</h1>
                    <motion.div 
                    animate={{borderBottomColor:['rgb(255,255,255)','rgb(255,0,0)','rgb(0,255,0)','rgb(0,0,255)','rgb(255,255,255)'], borderBottom:'50px solid'}}
                    transition={{repeat:Infinity, duration:30}}
                    style={{
                        width: 0,
                        height: 0,
                        borderLeft: '25px solid transparent',
                        borderRight: '25px solid transparent',
                        borderBottom: '50px solid'}} 
                    >                            
                        </motion.div>
                        <h1 style={{paddingLeft:'25vw'}} >oogle</h1>

            </motion.div>
        </>
    )
}