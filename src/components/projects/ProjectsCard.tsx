import { PiStarFourFill } from "react-icons/pi";

const projects = [
    {
        name: 'MB "Rigeta" site',
        type: 'Design and development',
        about: 'Site for accounting and other financial consulting business. Built using React, TS, MUI.',
        imageUrl: '/RigetaSite.png',
        link: 'https://glistening-banoffee-211c1b.netlify.app/'
    },
    {
        name: 'Elega shop',
        type: 'Development',
        about: 'Design example for an online clothing shop. The site\'s purpose is to ensure the design is visible on all devices. It is built using React, JavaScript, and Bootstrap.',
        imageUrl: '/ElegaShop.png',
        link: 'https://65b962d7cb39f53e2d497c61--melodic-brioche-754bdc.netlify.app/'
    },
    {
        name: 'Card Game',
        type: 'Design and development',
        about: 'Memory card game for kids, focusing on correct card movements. Built using HTML, CSS, JS.',
        imageUrl: '/cardGame.png',
        link: 'https://cerulean-pothos-cdecd6.netlify.app/'
    },
    {
        name: 'Employee Management System',
        type: 'Design and development',
        about: 'CRUD application for managing employees. Built using React, JS, Node.js, MongoDB, Bootstrap.',
        imageUrl: '/EmplManagement.png',
        link: 'https://github.com/augutis44/EmployeeManagement'
    }
]

const ProjectsCard = () => {
    return (
        <div className="flex flex-col gap-14 lg:gap-10 justify-center items-center">
            {projects.map((project, i) => (
                <div key={i} className="flex lg:gap-14 flex-col lg:flex-row text-center lg:text-left lg:max-w-[1200px] lg:w-full">

                    <div className="h-[15rem] md:h-[20rem] w-full">
                        <div
                            style={{
                                backgroundImage: `url(${project.imageUrl})`
                            }}
                            className={`h-full rounded-lg drop-shadow-lg bg-no-repeat bg-cover`}>
                        </div>
                    </div>

                    <div className="w-full flex flex-col items-center lg:items-start">
                        <div className="flex gap-6 py-6 lg:pt-10 justify-center items-center">
                            <PiStarFourFill className='md:text-4xl text-2xl text-pink drop-shadow' />

                            <div className="text-red text-2xl md:text-3xl font-seondary drop-shadow">
                                {project.name}
                            </div>

                            <PiStarFourFill className='md:text-4xl text-2xl text-pink drop-shadow' />
                        </div>

                        <div className="text-base md:text-lg font-secondary pb-5">
                            {project.type}
                        </div>

                        <div className="text-base md:text-xl font-secondary">
                            {project.about}
                        </div>

                        <div className="py-5 lg:py-10 inline-block">
                            <a
                                href={project.link}
                                target="_blank"
                                className="bg-red hover:bg-[#852A2A] rounded-lg text-light-pink py-4 px-8 font-secondary text-xl inline-block"
                            >Visit site
                            </a>
                        </div>

                    </div>

                </div>
            ))
            }
        </div >
    );
};

export default ProjectsCard;
