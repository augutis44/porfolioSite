import { useState } from 'react';
import { FaRunning, FaHamburger, FaPlane, FaHome, FaCat } from 'react-icons/fa';
import { BsPaletteFill } from "react-icons/bs";
import { FaCalculator } from "react-icons/fa6";
import { PiSneakerFill } from "react-icons/pi";
import { FiArrowLeft, FiArrowRight } from "react-icons/fi";
import MobileAbout from './MobileAbout';
import { IconsProps } from './PropTypes';

const icons: IconsProps[] = [
    {
        name: FaRunning,
        divDeg: 0,
        id: 0,
        title: 'Sports',
        text: 'Trying to stay active all year round. In the summer I like outdoor activities like running and hiking. In the cold season I go to the gym and pole sport classes.'
    },
    {
        name: FaHamburger,
        divDeg: 45,
        id: 1,
        title: 'Cooking',
        text: 'I am a FOODIE. Love cooking food at home, making homemade pizza and burgers all from scratch, even the dough. Also, sometimes make cakes and buns.'
    },
    {
        name: FaPlane,
        divDeg: 90,
        id: 2,
        title: 'Travel',
        text: 'Trying to have at least one vacation in a year. Been to Italy, Spain, Portugal, Netherlands, Belgium, Poland, England, Baltic States, Slovakia, Ibiza and Capri islands. The most beautiful place I\'ve been to would be Capri island.'
    },
    {
        name: FaHome,
        divDeg: 135,
        id: 3,
        title: 'My home',
        text: 'Most of my life was spent in Utena, I grew up there. After school moved out to Vilnius for studies and now after finishing university, still living in Vilnius.'
    },
    {
        name: FaCat,
        divDeg: 180,
        id: 4,
        title: 'Love for animals',
        text: 'Oh, how I love animals. Dreaming about owning a big house with at least one dog and two cats. For now I have a cat. Found her in the streets and now she\'s our home princess. Also donating money every year to animal shelters.'
    },
    {
        name: BsPaletteFill,
        divDeg: 225,
        id: 5,
        title: 'Arts and crafts',
        text: 'Another inseparable part of my life is art. Finished art school with a praise. Now I love painting on clothes like shoes and t-shirts. Also love to make some silly crafts like Nike box handbag.'
    },
    {
        name: FaCalculator,
        divDeg: 270,
        id: 6,
        title: 'Math',
        text: 'My love for math started in 9th grade. Then I realized, I wanted to study mathematics in Vilnius university. My small dream came true and after hard 4 years in university I can proudly say I\'m a graduate of mathematics and application of mathematics.'
    },
    {
        name: PiSneakerFill,
        divDeg: 315,
        id: 7,
        title: 'Shoe lover',
        text: 'Another thing that I am passionate about is shoes. Love seeing new releases and collaborations. I own about 25 pairs of shoes (and the collection is getting bigger).'
    }
]

const IconCarousel = () => {
    const [carouselDeg, setcarouselDeg] = useState(-13);
    const [itemDeg, setItemDeg] = useState(13);
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

    return (
        <div>
            <div className="bg-light-pink">
                <div className="bg-[url('/Untitled_Artwork-reverse.png')] bg-[length:100%] h-[9rem] md:h-[10rem] xl:h-[11rem] 2xl:h-[14rem] w-full bg-left-bottom bg-no-repeat"></div>
            </div>
            <div>
                <div className='hidden bg-pink lg:flex items-center px-10 py-7'>

                    <div className="flex items-center justify-center basis-1/2">
                        <div className="relative w-[35vw] h-[35vw]">
                            {icons.map((icon, i) => (
                                <div key={i} className="absolute inset-0 transition-transform duration-500" style={{ transform: `rotate(${carouselDeg + icon.divDeg}deg)` }}>
                                    <icon.name onClick={next} className="text-6xl absolute w-[17vw] h-[17vh] transition-transform duration-500 fill-light-pink drop-shadow-lg" style={{ transform: `rotate(${itemDeg - icon.divDeg}deg)` }} />
                                </div>
                            ))}
                        </div>
                    </div>

                    <div className='flex flex-col basis-1/2 h-full md:ml-10'>
                        <div className='text-red text-6xl font-primary uppercase text-center justify-start h-1/3 drop-shadow md:mb-8'>
                            ABOUT ME
                        </div>
                        <div className='bg-light-pink px-3 rounded-xl flex justify-between items-center drop-shadow-lg lg:h-[18rem] xl:h-[16rem]'>
                            <button onClick={prev} className="text-red mr-5 text-2xl"><FiArrowLeft /></button>
                            <div className='flex flex-col'>
                                <div className="text-red text-5xl font-primary text-center mb-5">
                                    {icons[centerItem].title}
                                </div>
                                <div className="font-secondary text-center">
                                    {icons[centerItem].text}
                                </div>
                            </div>
                            <button onClick={next} className="text-red ml-5 text-2xl"><FiArrowRight /></button>
                        </div>
                    </div>

                </div>
                <MobileAbout icons={icons} />
            </div>
        </div>
    )
}

export default IconCarousel;
