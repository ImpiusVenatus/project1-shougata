import { motion } from "framer-motion"
import "./hero.scss"


const textVariants={
    initial:{
        x: -500,
        opacity: 0
    },
    animate:{
        x: 0,
        opacity: 1,
        transition: {
            duration:1,
            staggerChildren: 0.1
        }
    }
}

const Hero = () => {
  return (
    <div className="hero">
        <div className="wrapper">
            <motion.div className="textContainer" variants={textVariants} 
            initial="initial" 
            animate="animate">
                <motion.h2 variants={textVariants}>SHOUGATA PAUL</motion.h2>
                <motion.h1 variants={textVariants}>Web Developer And UI Designer</motion.h1>
                <motion.div className="buttons" variants={textVariants}>
                    <motion.button variants={textVariants}>See the latest work</motion.button>
                    <motion.button variants={textVariants}>Contact Me</motion.button>
                </motion.div>
                <motion.img variants={textVariants} src="/scroll.png" alt=""></motion.img>
            </motion.div>
        </div>
        <div className="slidingTextContainer">
            Aspirant Web Developer
        </div>
        <div className="imageContainer">
            <img src="/hero.png" alt="" />
        </div>
    </div>
  )
}

export default Hero