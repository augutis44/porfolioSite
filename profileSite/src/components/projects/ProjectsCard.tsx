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
        <div className="flex items-center">
            {projects.map((project, i) => (
                <div key={i} className="flex items-center flex-col text-center basis-1/3 mx-5">
                    <PiStarFourFill color='#F47CB9' size='3rem' />
                    <div className="text-red text-3xl font-seondary my-4">
                        {project.name}
                    </div>
                    <div className="text-xl font-secondary mb-5">
                        {project.about}
                    </div>
                    <div className="h-20r w-15r bg-red rounded-xl">
                    </div>
                </div>
            ))}
        </div>
    );
};

export default ProjectsCard;
