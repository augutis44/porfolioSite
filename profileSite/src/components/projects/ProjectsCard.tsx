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
                <div key={i} className="flex items-center flex-col text-center basis-1/3 mx-5 mt-10 lg:mt-0">
                    <PiStarFourFill className='md:text-6xl text-3xl text-pink drop-shadow' />
                    <div className="text-red text-2xl md:text-3xl font-seondary my-4 drop-shadow">
                        {project.name}
                    </div>
                    <div className="md:text-xl font-secondary mb-5">
                        {project.about}
                    </div>
                    <div className="h-48 w-36 lg:h-20r lg:w-15r bg-red rounded-xl drop-shadow-lg">
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsCard;
