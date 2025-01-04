import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring, useTransform} from "framer-motion";

const items = [
    {
        id:1,
        title:"Web App",
        img:"https://images.pexels.com/photos/39284/macbook-apple-imac-computer-39284.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id:2,
        title:"React App",
        img:"https://images.pexels.com/photos/29942709/pexels-photo-29942709/free-photo-of-smart-devices-and-streaming-apps-in-modern-home-setup.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id:3,
        title:"Mobile App",
        img:"https://images.pexels.com/photos/6474485/pexels-photo-6474485.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/4162583/pexels-photo-4162583.jpeg?auto=compress&cs=tinysrgb&w=600",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const Single  = ({item}) => {
    const ref = useRef();
    const {scrollYProgress} = useScroll({target:ref,
        //offset: ["start start", "end start"]
    });

    const y = useTransform(scrollYProgress,[0,1],[-300,300]);

    return(
        <section>
            <div className="container">
                <div className="wrapper">
                    <div className="imageContainer" ref={ref}>
                        <img src={item.img} alt="" />
                    </div>
                    <motion.div className="textContainer" style={{y}}>
                    <h2>{item.title}</h2>
                    <p>{item.desc}</p>
                    <button>See Demo</button>
                </motion.div>
                </div>
            </div>
        </section>
    )
}

const Portfolio = () => {

   const ref = useRef(); 
   const {scrollYProgress} = useScroll({target:ref,
    offset:["end end", "start start"]
    });

   const scaleX= useSpring(scrollYProgress,{
    stiffness:100,
    damping: 30,
   }) 
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div className="progressBar" style={{scaleX:scaleX}} >

            </motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id} />
        ))}
    </div>
  )
}

export default Portfolio