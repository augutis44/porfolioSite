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
        <div>
            <div id='top' className="flex flex-col lg:flex-row bg-pink items-center justify-center py-10 lg:py-8">
                <div className="flex flex-col items-center text-center justify-center lg:pt-0">
                    <animated.div className="mb-5 drop-shadow shadow-white" style={{
                        ...springs3
                    }}>
                        <PiStarFourFill className='md:text-6xl text-3xl text-light-pink' />
                    </animated.div>
                    <animated.div className="text-red text-6xl md:text-7xl xl:text-8xl font-primary pl-3 mb-2 md:mb-5 drop-shadow shadow-red" style={{
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
                <div className="bg-pink lg:pl-8 xl:pl-10 2xl:pl-20 pt-10">
                    <div className="drop-shadow-lg">
                        <img src='2variantas.png' alt='a photo of me' className="" />
                    </div>
                </div>
            </div>
            <div className="bg-light-pink">
            <div className="bg-[url('/Untitled_Artwork.png')] bg-[length:100%] h-[9rem] md:h-[10rem] xl:h-[11rem] 2xl:h-[14rem] w-full bg-left-top bg-no-repeat"></div>
            </div>
        </div>
    );
};

export default Introduction;
