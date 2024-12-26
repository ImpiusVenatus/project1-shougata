import { useRef } from "react";
import "./portfolio.scss";
import {motion, useScroll, useSpring} from "framer-motion";

const items = [
    {
        id:1,
        title:"Web App",
        img:"https://images.pexels.com/photos/29879483/pexels-photo-29879483/free-photo-of-festive-christmas-ornament-on-pine-tree-branch.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id:2,
        title:"React App",
        img:"https://images.pexels.com/photos/28286561/pexels-photo-28286561/free-photo-of-manhattan-bridge-dumbo-view.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id:3,
        title:"NextJS App",
        img:"https://images.pexels.com/photos/28396375/pexels-photo-28396375/free-photo-of-curving-road-through-scenic-black-and-white-landscape.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },

    {
        id:4,
        title:"Music App",
        img:"https://images.pexels.com/photos/29864188/pexels-photo-29864188/free-photo-of-elegant-holiday-candle-decor-on-festive-table.jpeg?auto=compress&cs=tinysrgb&w=600&lazy=load",
        desc:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    },
];

const Single  = ({item}) => {
    return(
        <section>
            {item.title}
        </section>
    )
}

const Portfolio = () => {

   const ref = useRef(); 
   const {scrollYprogress} = useScroll({target:ref,
    offset:["end end", "start start"]
    })

   const scaleX= useSpring(scrollYprogress,{
    stiffness:100,
    damping: 30,
   }) 
  return (
    <div className="portfolio" ref={ref}>
        <div className="progress">
            <h1>Featured Works</h1>
            <motion.div style={{scaleX:scaleX}} className="progressBar" >

            </motion.div>
        </div>
        {items.map(item=>(
            <Single item={item} key={item.id}/>
        ))}
    </div>
  )
}

export default Portfolio