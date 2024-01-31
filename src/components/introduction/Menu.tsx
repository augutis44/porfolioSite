import { PiStarFourFill } from "react-icons/pi";
import { Link } from 'react-scroll';

const links: { label: string; link: string; }[] = [
    {
        label: 'About me',
        link: 'about'
    },
    {
        label: 'My work',
        link: 'work'
    },
    {
        label: 'Technologies',
        link: 'technologies'
    },
    // {
    //     label: 'Cute picture of my cat',
    //     link: 'cat'
    // },
    {
        label: 'Contacts',
        link: 'contacts'
    }
];

const renderedLinks = links.map((link, index) => {
    return (
        <button className="flex mb-3 md:mb-5 transition ease-in-out hover:scale-110 items-center" key={index}>
            <PiStarFourFill color='#FFAEC7' className="mx-4 drop-shadow text-2xl" />
            <div className="text-red text-2xl md:text-3xl font-secondary drop-shadow">
                <Link activeClass="active" smooth spy to={link.link}>
                    {link.label}
                </Link>
            </div>
            <PiStarFourFill color='#FFAEC7' className="mx-4 drop-shadow text-2xl" />
        </button>
    )
})

const Menu = () => {
    return (
        <div className="lg:flex lg:flex-row">
            <div className="hidden lg:inline lg:basis-1/2">
                <div className="bg-red flex justify-center h-screen py-12 px-32">
                    <div className="h-auto self-center">
                        <div className="bg-light-pink rounded p-4 drop-shadow-lg">
                            <img src='IMG_0965.JPG' alt='a photo of me' className="object-cover md:h-full rounded" />
                        </div>
                    </div>
                </div>
            </div>
            <div className="lg:basis-1/2">
                <div className="bg-light-pink h-full flex flex-col items-center text-center justify-center py-10">
                    <div className="text-red text-4xl md:text-6xl font-primary mb-5 md:mb-10 uppercase mt-5 md:mt-10 lg:mt-0 drop-shadow">
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
