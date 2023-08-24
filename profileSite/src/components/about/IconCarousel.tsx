import { useState } from 'react';
import { FaRunning, FaHamburger, FaPlane, FaHome, FaCat } from 'react-icons/fa';
import { BsPaletteFill } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa6";
import { PiSneakerFill } from "react-icons/pi";
import { IconType } from 'react-icons';
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";

const icons: { name: IconType; divDeg: number; id: number; title: string; text: string; }[] = [
    {
        name: FaRunning,
        divDeg: 0,
        id: 0,
        title: 'Sports',
        text: 'Trying to stay active all year round. In the summer I like outdoor activities like running and hiking. In the cold season I go to the gym and pole sport classes'
    },
    {
        name: FaHamburger,
        divDeg: 45,
        id: 1,
        title: 'Cooking',
        text: 'I am a FOODIE. Love cooking food at home, making home made pizza, burgers all from scrach, even the dogh. Also sometimes make cakes and buns.'
    },
    {
        name: FaPlane,
        divDeg: 90,
        id: 2,
        title: 'Travel',
        text: 'Trying to have at least one vacation in a year. Been to Italy, Spain, Portugal, Netherlands, Belgium, Poland, England, Ibiza and Capri islands. The most beautiful place Ive been to would be Capri island'
    },
    {
        name: FaHome,
        divDeg: 135,
        id: 3,
        title: 'My Home',
        text: 'Originaly from Utena, now after finishing university, still living in Vilnius'
    },
    {
        name: FaCat,
        divDeg: 180,
        id: 4,
        title: 'Love For Animals',
        text: 'Oh how i love animals. Dreaming about owning a big house and a lot of animals. For now i have a cat. Found her in the streets and now shes our home princess.'
    },
    {
        name: BsPaletteFill,
        divDeg: 225,
        id: 5,
        title: 'Arts and Crafts',
        text: 'Another inseparable part of my life is art. Finnished art school with a praise. Now i love painting on clothes like shoes and t-shirts. Also love to make some silly crafts like Nike box handbag.'
    },
    {
        name: FaCalculator,
        divDeg: 270,
        id: 6,
        title: 'Mathematics',
        text: 'My love for maths started in 6th grade. '
    },
    {
        name: PiSneakerFill,
        divDeg: 315,
        id: 7,
        title: 'Sneaker Lover',
        text: 'Another thing that I am pasionate about is sneakers. Love seing new relieses, collaborations. I own about 20 pairs of sneakers.'
    }
]

const IconCarousel = () => {
    const [carouselDeg, setcarouselDeg] = useState(0);
    const [itemDeg, setItemDeg] = useState(0);
    const [centerItem, setCenterItem] = useState(3);

    const next = () => {
        setcarouselDeg(carouselDeg + 45);
        setItemDeg(itemDeg - 45);
        if (centerItem == 0) {
            setCenterItem(7);
            return;
        }
        setCenterItem(centerItem - 1);

    };

    const prev = () => {
        setcarouselDeg(carouselDeg - 45);
        setItemDeg(itemDeg + 45);
        if (centerItem == 7) {
            setCenterItem(0);
            return;
        }
        setCenterItem(centerItem + 1);
    };

    // const handleClick = (divDeg) => {
    //     const currentDeg = rotation + divDeg
    //     const circleNum = Math.floor(currentDeg / 360)
    //     let neededDeg = 0
    //     if (currentDeg % 360 == 0 || currentDeg == 0) {
    //         neededDeg = currentDeg + 90
    //     } else if (currentDeg > 90 + 360 * circleNum) {
    //         neededDeg = 90 + (360 * (circleNum + 1))
    //     } else {
    //         neededDeg = 90 + 360 * circleNum
    //     }
    //     const rotationDeg = neededDeg - currentDeg + 45

    //     console.log(currentDeg)
    //     console.log(circleNum)
    //     console.log(neededDeg)
    //     console.log(rotationDeg)
    // }

    return (
        <div className='bg-pink flex items-center h-screen p-10'>
            <div className="flex items-center justify-center basis-1/2">
                <div className="relative w-30r h-30r">
                    {icons.map((icon, i) => (
                        <div key={i} className="absolute inset-0 transition-transform duration-500" style={{ transform: `rotate(${carouselDeg + icon.divDeg}deg)` }}>
                            <icon.name onClick={next} className="text-6xl absolute w-32 h-32 transition-transform duration-500 fill-light-pink" style={{ transform: `rotate(${itemDeg + - icon.divDeg}deg)` }} />
                        </div>
                    ))}
                </div>
            </div>
            <div className='bg-light-pink py-10 px-3 mx-16 rounded-xl flex basis-1/2 justify-between'>
                <button onClick={prev} className="text-red"><FiArrowLeft /></button>
                <div className='flex flex-col'>
                    <div className="text-red text-6xl font-primary text-center mb-5">
                        {icons[centerItem].title}
                    </div>
                    <div className="font-secondary text-center">
                        {icons[centerItem].text}
                    </div>
                </div>
                <button onClick={next} className="text-red"><FiArrowRight /></button>
            </div>
        </div>
    )
}

export default IconCarousel;
