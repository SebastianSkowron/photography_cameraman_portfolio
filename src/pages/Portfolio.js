import React from 'react'
import Image1 from '../images/portfolio/one.png'
import Image2 from '../images/portfolio/two.png'
import Image3 from '../images/portfolio/three.png'
import Image4 from '../images/portfolio/four.png'
import Image5 from '../images/portfolio/five.png'
import Image6 from '../images/portfolio/six.png'
import { Link } from 'react-router-dom'
import { motion } from 'framer-motion'
import { transition } from '../transitions'

const Portfolio = () => {
    return (
        <motion.section initial={{ opacity: 0, y: '100%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '100%' }} transition={transition} className='section'>
            <div className='container mx-auto h-full relative'>
                <div className='flex flex-col lg:flex-row h-full items-center justify-start gap-x-24 text-center lg:text-left pt-24 lg:pt-36 pb-8'>
                    <motion.div initial={{ opacity: 0, y: '-80%' }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: '-80%' }} transition={transition} className='flex flex-col lg:items-start'>
                        <h1 className='h1'>Portfolio</h1>
                        <p className='mb-12 max-w-sm'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. <b>Exercitationem, veritatis.</b> Veritatis illum aut, reprehenderit sed dolorem dolore.
                            <br />
                            <br />
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Recusandae, iure! Ullam, dolore? Eligendi, quam mollitia.
                        </p>
                        <Link to={'/portfolio'} className='btn mb-[30px] mx-auto lg:mx-0'>Hire me</Link>
                    </motion.div>
                    <div className='grid grid-cols-2 lg:gap-2'>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden '>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image1} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden '>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image4} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden '>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image5} alt=''/>
                        </div>
                        <div className='max-w-[250px] lg:max-w-[320px] h-[187px] lg:h-[220px] bg-accent overflow-hidden '>
                            <img className='object-cover h-full lg:h-[220px] hover:scale-110 transition-all duration-500' src={Image6} alt=''/>
                        </div>
                    </div>
                </div>
            </div>
        </motion.section>
    )
}

export default Portfolio