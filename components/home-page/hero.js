import React from 'react'
import Image from 'next/image'

import classes from './hero.module.css'

function Hero() {
  return (
    <section className={classes.hero}>
      <div className={classes.image}>
        <Image 
          src='/images/site/mahdi.JPG' 
          alt='An image showing Mahdi' 
          width={300} 
          height={300} 
        />
      </div>

      <h1>Hi, I&apos;m Mahdi</h1>

      <p>I blog about web development - especially frontend frameworks like Angular or React.</p>
    </section>
  )
}

export default Hero
