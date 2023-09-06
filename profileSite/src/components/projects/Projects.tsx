import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <div className="bg-light-pink flex flex-col justify-center lg:h-screen py-10 px-5 md:p-10">
            <div className="text-red text-3xl md:text-6xl font-primary uppercase text-center drop-shadow">
                My projects
            </div>
            <div>
                <ProjectsCard />
            </div>
        </div>
    );
};

export default Projects;
