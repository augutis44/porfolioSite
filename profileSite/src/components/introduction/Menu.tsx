import { PiStarFourFill } from "react-icons/pi";
import { Link } from 'react-scroll';

const links: { label: string; link: string; }[] = [
    {
        label: 'About me',
        link: 'about'
    },
    {
        label: 'My work & technologies',
        link: 'work'
    },
    {
        label: 'Cute picture of my cat',
        link: 'cat'
    },
    {
        label: 'Contacts',
        link: 'contacts'
    }
];

const renderedLinks = links.map((link, index) => {
    return (
        <button className="flex mb-5 transition ease-in-out hover:scale-110" key={index}>
            <PiStarFourFill color='#FFAEC7' size='2rem' className="mx-4" />
            <div className="text-red text-xl lg:text-3xl font-secondary">
                <Link activeClass="active" smooth spy to={link.link}>
                    {link.label}
                </Link>
            </div>
            <PiStarFourFill color='#FFAEC7' size='2rem' className="mx-4" />
        </button>
    )
})

const Menu = () => {
    return (
        <div className="flex flex-col md:flex-row">
            <div className="basis-1/2 hidden md:inline">
                <div className="bg-red flex justify-center h-screen">
                    <img src='IMG_5846.jpg' alt='a photo of me' className="bg-contain p-24">
                    </img>
                </div>
            </div>
            <div className="basis-1/2">
                <div className="bg-light-pink h-full flex flex-col items-center text-center justify-center py-22">
                    <div className="text-red text-5xl lg:text-6xl font-primary mb-10 uppercase mt-10 md:mt-0">
                        Let me help <br /> to find what  <br />you are <br /> looking for
                    </div>
                    <div className="flex flex-col items-center">
                        {renderedLinks}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Menu;
