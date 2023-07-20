"use client"
import Image from 'next/image'
import { GiHamburgerMenu } from 'react-icons/gi'
import { IoCloseSharp } from 'react-icons/io5'
import { motion, AnimatePresence } from 'framer-motion'
import style from '@/styles/Navbar.module.scss'
import { useState } from 'react'

const Navbar = () => {

    const [navOn, setNavOn] = useState(false)

    const item = {
        exit: {
            width: ["50%","100%","0%"],
            transition: {
                ease: "easeInOut",
                duration: 0.8,
                delay: 0,
            },
        },
    };

    return (
        <>
            <div className={style.container}>
                <div className={style.logo}>
                    <div className={style.picture}>
                        <Image src={'/logo.png'} alt='Saumitra Experiments Logo' fill />
                    </div>
                </div>
                <div 
                style={{
                    background: `${navOn ? "#fff" : "#353638"}`, color: `${navOn ? "#353638" : "#fff"}`,
                }}
                onClick={() => { setNavOn(!navOn) }} className={style.navButton}>
                    {navOn ? <span><IoCloseSharp /></span>  : <GiHamburgerMenu />}
                </div>
            </div>
            <AnimatePresence>
                {navOn && <motion.div
                    variants={item}
                    initial={{ width: "0%" }}
                    animate={{ width: ["0%","100%","50%"] }}
                    transition={{ duration: 1.5, ease: "easeOut" }}
                    exit="exit"
                    className={style.navMenu}>
                </motion.div>
                }
            </AnimatePresence>
        </>
    )
}

export default Navbar