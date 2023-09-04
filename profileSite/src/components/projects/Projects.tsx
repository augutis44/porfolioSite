import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <div className="bg-light-pink py-6 flex flex-col justify-center lg:h-screen">
            <div className="text-red text-5xl md:text-6xl font-primary lg:mb-10 uppercase text-center drop-shadow">
                My projects
            </div>
            <div>
                <ProjectsCard />
            </div>
        </div>
    );
};

export default Projects;
