import { PiStarFourFill } from "react-icons/pi";
import { useSpring, animated } from '@react-spring/web'

const Introduction = () => {
    const springs1 = useSpring({
        from: {
            x: -200,
            opacity: 0
        },
        to: {
            x: 0,
            opacity: 1
        },
        config: { duration: 200 },
    })

    const springs2 = useSpring({
        from: {
            x: -200,
            opacity: 0
        },
        to: {
            x: 0,
            opacity: 1
        },
        config: { duration: 100 },
        delay: 400
    })

    const springs3 = useSpring({
        from: {
            opacity: 0
        },
        to: {
            opacity: 1
        },
        config: { duration: 200 },
        delay: 600
    })

    return (
        <div id='top' className="flex flex-col lg:flex-row">
            <div className="basis-1/2 bg-pink flex flex-col items-center text-center justify-center h-screen py-10 lg:pt-0">
                <animated.div className="mb-5 drop-shadow shadow-white" style={{
                    ...springs3
                }}>
                    <PiStarFourFill className='md:text-6xl text-3xl text-light-pink' />
                </animated.div>
                <animated.div className="text-red text-5xl md:text-7xl lg:text-8xl font-primary pl-3 mb-2 md:mb-5 drop-shadow shadow-red" style={{
                    ...springs1
                }}>
                    HI I'M <br /> AUGUSTINA
                </animated.div>
                <animated.div className="text-light-pink bold text-2xl md:text-4xl lg:text-5xl font-secondary drop-shadow shadow-white" style={{
                    ...springs2
                }}>
                    Beginner web developer
                </animated.div>
            </div>
            <div className="basis-1/2 bg-pink p-4">
                <div className="bg-light-pink p-4 md:h-full rounded drop-shadow-lg">
                    <img src='IMG_09141.jpg' alt='a photo of me' className="object-cover lg:h-full rounded" />
                </div>
            </div>
        </div>
    );
};

export default Introduction;
