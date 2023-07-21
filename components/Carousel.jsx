"use client"
import Image from 'next/image'
import { useEffect, useRef, useState } from 'react'
import { motion, AnimatePresence, useInView } from 'framer-motion'
import style from '@/styles/Carousel.module.scss'

const Carousel = () => {

    const [index, setIndex] = useState(0)
    const ref = useRef(null)
    const isInView = useInView(ref)
    const ref2 = useRef(null)
    const isInView2 = useInView(ref)
    const ref3 = useRef(null)
    const isInView3 = useInView(ref)

    const data = [
        {
            src: "/pasta.jpg"
        },
        {
            src: "/noodles.jpg"
        },
        {
            src: "/chinese.jpg"
        },
    ]

    const nextSlide = () => {
        setIndex(index === 2 ? 0 : (prev) => prev + 1)
    }

    const prevSlide = () => {
        setIndex(index === 0 ? 2 : (prev) => prev - 1)
    }

    useEffect(() => {

        const timer = setTimeout(() => {
            nextSlide();
        }, 5000)

        return () => clearTimeout(timer);

    }, [index])

    const animationItem = {
        exit: {
            scale: 1,
            transition: {
                ease: "easeInOut",
                duration: 1,
                delay: 0.2,
            },
        }
    }

    return (
        <div className={style.container}>
            <div className={style.sliderDiv}>
                <AnimatePresence>
                    <motion.div
                        ref={ref}
                        variants={animationItem}
                        initial={{ scale: 1 }}
                        animate={{ scale: isInView ? 1.2 : 1 }}
                        transition={{ ease: "linear", duration: "5",repeat: Infinity }}
                        exit="exit"
                        className={style.slide}>
                        <Image src={data[index].src} alt='' fill />
                    </motion.div>
                </AnimatePresence>
            </div>
        </div>
    )
}

export default Carousel