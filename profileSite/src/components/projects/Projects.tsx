import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <div className="bg-light-pink py-6 flex flex-col justify-center lg:h-screen p-10">
            <div className="text-red text-3xl md:text-6xl font-primary lg:mb-10 uppercase text-center drop-shadow">
                My projects
            </div>
            <div>
                <ProjectsCard />
            </div>
        </div>
    );
};

export default Projects;
