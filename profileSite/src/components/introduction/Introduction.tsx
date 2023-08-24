import LeftSide from "../helpers/LeftSide";
import RightSide from "../helpers/RightSide";
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
        <div className="flex flex-col md:flex-row">
            <div className="max-h-172">
                <div className="text-center bg-pink min-h-50 flex flex-col items-center justify-center h-full">
                    <animated.div className="mb-5" style={{
                        ...springs3
                    }}>
                        <PiStarFourFill color='#FDDCE6' size='5rem' />
                    </animated.div>
                    <animated.div className="text-red text-5xl md:text-8xl font-primary mb-5" style={{
                        ...springs1
                    }}>
                        HI I'M <br /> AUGUSTINA
                    </animated.div>
                    <animated.div className="text-light-pink text-4xl font-secondary" style={{
                        ...springs2
                    }}>
                        Wanna be front end web <br /> developer
                    </animated.div>
                </div>
            </div>
            <div className="max-h-172">
                <img src='IMG_09141.jpg' alt='a photo of me' />
            </div>
        </div>
    );
};

export default Introduction;
