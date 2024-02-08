import { PiStarFourFill } from "react-icons/pi";

const projects = [
    {
        name: 'UAB "Rigeta" site',
        about: 'Site for accounting and other financial consulting business. Built using React, JS, MUI'
    },
    {
        name: 'Online toy renting store',
        about: 'Site for online toy renting store. Built using this and this techolosies. '
    },
    {
        name: 'UAB "Rigeta" site',
        about: 'Site for another amazing project. Built using this and this techolosies. '
    }
]

const ProjectsCard = () => {
    return (
        <div className="flex flex-col md:flex-row">
            {projects.map((project, i) => (
                <div key={i} className="flex items-center flex-col text-center basis-1/3 md:mx-5">
                    <PiStarFourFill className='md:text-4xl text-2xl text-pink drop-shadow' />
                    <div className="text-red text-2xl md:text-3xl font-seondary my-2 md:my-4 drop-shadow">
                        {project.name}
                    </div>
                    <div className="text-base md:text-xl font-secondary mb-2 md:mb-5">
                        {project.about}
                    </div>
                    <div className="h-48 w-full bg-red rounded-xl drop-shadow-lg">
                        <a href="#">
                        <iframe src="https://glistening-banoffee-211c1b.netlify.app/"></iframe>
                        </a>
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsCard;
