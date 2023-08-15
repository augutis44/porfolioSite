import LeftSide from "../helpers/LeftSide";
import RightSide from "../helpers/RightSide";
import { PiStarFourFill } from "react-icons/pi";

const links: { label: string }[] = [
    { label: 'About me' },
    { label: 'My work & technologies' },
    { label: 'Cute picture of my cat' },
    { label: 'Contacts' }
];

const renderedLinks = links.map((link, index) => {
    return (
        <button className="flex mb-5" key={index}>
            <PiStarFourFill color='#FFAEC7' size='2rem' className="mx-4"/>
            <div className="text-red text-3xl font-secondary">
                {link.label}
            </div>
            <PiStarFourFill color='#FFAEC7' size='2rem' className="mx-4"/>
        </button>
    )
})

const Menu = () => {
    return (
        <div className="flex">
            <LeftSide>
                <div>
                    <div className="bg-red flex justify-center">
                        <img src='IMG_5846.jpg' alt='a photo of me' className="bg-contain p-24">
                        </img>
                    </div>
                </div>
            </LeftSide>
            <RightSide>
                <div className="bg-light-pink h-full flex flex-col items-center text-center justify-center py-22">
                    <div className="text-red text-6xl font-primary mb-10 uppercase">
                        Let me help <br /> to find what  <br />you are <br /> looking for
                    </div>
                    <div className="flex flex-col items-center">
                        {renderedLinks}
                    </div>
                </div>
            </RightSide>
        </div>
    )
}

export default Menu;
