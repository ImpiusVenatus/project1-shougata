import { useRef } from "react"
import "./services.scss"
import { motion, useInView } from "framer-motion"

const variants = {
    initial:{
        x:-500,
        y:100,
        opacity:0
    },
    animate:{
        x:0,
        y:0,
        opacity:1,
        transition:{
            duration: 1,
            staggerChildren: 0.3
        }
    }
}

const Services = () => {

    const ref = useRef()
    const isInView = useInView(ref,{margin: "0px"})

  return (
    <motion.div className="services" 
                variants= {variants} 
                initial="initial" 
                whileInView={"animate"}
                ref={ref}
                animate={isInView && "animate"}>


        <motion.div className="textContainer" variants= {variants}>
            <p> I focus on helping your band grow 
                <br/>and move forward</p>
            <hr/>    
        </motion.div>
        <motion.div className="titleContainer" variants= {variants}>
            <motion.div className="title">
                <img src="/people.webp" alt="" />
                <h1><motion.b whileHover={{color:"orange"}}>Unique</motion.b> Ideas</h1> 
            </motion.div>
            <motion.div className="title">
                <h1><motion.b whileHover={{color:"orange"}}>For Your</motion.b> Business</h1> 
                <button>WHAT WE DO?</button>   
            </motion.div>
            
        </motion.div>
        <motion.div className="listContainer" variants= {variants}>
            <motion.div className="box" whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"  whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"  whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?</p>
                <button>Go</button>
            </motion.div>
            <motion.div className="box"  whileHover={{background:"lightgray", color:"black"}}>
                <h2>Branding</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nostrum libero enim nisi aliquam consectetur expedita magni eius ex corrupti animi! Ad nam pariatur assumenda quae mollitia libero repellat explicabo maiores?</p>
                <button>Go</button>
            </motion.div>
        </motion.div>
    </motion.div>
  )
}

export default Services