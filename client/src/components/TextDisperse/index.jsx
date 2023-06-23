import { useState } from 'react';
import { motion } from 'framer-motion';
import { disperse } from './anim';

export default function TextDipserse({children, setBackground}) {
  
    const [isAnimated, setIsAnimated] = useState(false);
  
    const getChars = (element) => {
      let chars = [];
      const word = element.props.children
      word.split("").forEach( (char, i) => {
        chars.push(<motion.span custom={i} variants={disperse} animate={isAnimated ? "open" : "closed"} key={char + i}>{char}</motion.span>)
      })
      return chars;
    }
  
    const manageMouseEnter = () => {
      setBackground(true)
      setIsAnimated(true);
    }
    const manageMouseLeave = () => {
      setBackground(false)
      setIsAnimated(false);
    }
  
    return (
      <div style={{cursor: "pointer"}} onMouseEnter={() => {manageMouseEnter()}} onMouseLeave={() => {manageMouseLeave(false)}} className='introLine'>
      { getChars(children) }
      </div>
    )
  }