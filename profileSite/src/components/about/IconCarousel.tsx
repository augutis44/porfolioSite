import { useState } from 'react';
import { FaRunning, FaHamburger, FaPlane, FaHome, FaCat } from 'react-icons/fa';
import { BsPaletteFill } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa6";
import { PiSneakerFill } from "react-icons/pi";
import { IconType } from 'react-icons';

// const indexIdentifier = (iconIndex) => {
//     let degr = 0;

//     switch (iconIndex) {
//         case 0:
//             degr = 0;
//             break;
//         case 1:
//             degr = 45;
//             break;
//         case 2:
//             degr = 90;
//             break;
//         case 3:
//             degr = 135;
//             break;
//         case 4:
//             degr = 180;
//             break;
//         case 5:
//             degr = 225;
//             break;
//         case 6:
//             degr = 270;
//             break;
//         case 7:
//             degr = 315;
//             break;
//     }
// }

const icons: { name: IconType; divDeg: number; }[] = [
    {
        name: FaRunning,
        divDeg: 0,
    },
    {
        name: FaHamburger,
        divDeg: 45,
    },
    {
        name: FaPlane,
        divDeg: 90,
    },
    {
        name: FaHome,
        divDeg: 135,
    },
    {
        name: FaCat,
        divDeg: 180,
    },
    {
        name: BsPaletteFill,
        divDeg: 225,
    },
    {
        name: FaCalculator,
        divDeg: 270,
    },
    {
        name: PiSneakerFill,
        divDeg: 315,
    }
]

const IconCarousel = () => {
    const [rotation, setRotation] = useState(0);

    const rotateCarousel = () => {
        const newRotation = rotation + 45;
        setRotation(newRotation);
    };

    const handleClick = (divDeg) => {
        let degr = 0;

        switch (iconIndex) {
            case 0:
                degr = 0;
                break;
            case 1:
                degr = 45;
                break;
            case 2:
                degr = 90;
                break;
            case 3:
                degr = 135;
                break;
            case 4:
                degr = 180;
                break;
            case 5:
                degr = 225;
                break;
            case 6:
                degr = 270;
                break;
            case 7:
                degr = 315;
                break;
        }
    }

    return (
        <div className="flex items-center justify-center h-screen">
            <div className="relative w-30r h-30r">
                {icons.map((icon, i) => (
                    <div key={i} className="absolute inset-0 transition-transform duration-500" style={{ transform: `rotate(${rotation + icon.divDeg}deg)` }}>
                        <button onClick={rotateCarousel} className='w-12 h-12'>
                            <icon.name className="text-6xl absolute w-32 h-32 transition-transform duration-500 fill-light-pink" style={{ transform: `rotate(${-rotation + (360 - icon.divDeg)}deg)` }} />
                        </button>
                    </div>
                ))}
            </div>
            <button onClick={rotateCarousel} className="p-2 bg-blue-500 text-white rounded m-10">Rotate</button>
        </div >
    )
}

export default IconCarousel;
