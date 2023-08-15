import IconCarousel from "./IconCarousel";

const About = () => {
    return (
        <div className="bg-pink flex justify-center	items-center">
            <div className="flex justify-center items-center ml-40">
                <IconCarousel />
            </div>
            <div className="w-2/4">
                <div className="bg-light-pink py-10 px-3 mr-16 rounded-xl">
                    <div className="text-red text-6xl font-primary text-center mb-5">
                        LOVE FOR <br/> MATH
                    </div>
                    <div className="font-secondary text-center">
                        Graduated bachlor degree in Mathematics and application of mathematics
                        in Vilnius University. My love for math started in school, where I did
                        math homework the next lesson
                    </div>
                </div>
            </div>
        </div>
    );
}

export default About;
