import ProjectsCard from "./ProjectsCard";

const Projects = () => {
    return (
        <div>
            <div className="bg-light-pink">
                <div className="bg-[url('/Untitled_Artworkv2.png')] bg-[length:100%] h-[9rem] md:h-[10rem] xl:h-[11rem] 2xl:h-[14rem] w-full bg-left-top bg-no-repeat"></div>
            </div>
            <div className="bg-light-pink flex flex-col gap-2 lg:h-screen py-10 px-5 md:px-10">
                <div className="text-red text-3xl md:text-6xl font-primary uppercase text-center drop-shadow mb-6 md:mb-10">
                    My projects
                </div>
                <div>
                    <ProjectsCard />
                </div>
            </div>
        </div>
    );
};

export default Projects;
