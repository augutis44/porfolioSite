
const technologies = [
    {
        name: 'React',
        icon: '/image (2).png'
    },
    {
        name: 'Tailwind',
        icon: '/image.png'
    },
    {
        name: 'MUI',
        icon: '/image (1).png'
    },
    {
        name: 'Typescript',
        icon: '/Typescript_logo_2020.svg.png'
    },
    {
        name: 'Javascript',
        icon: '/pngegg (1).png'
    }
]

const Technologies = () => {
    return (
        <div>
            <div className="bg-light-pink">
                <div className="bg-[url('/Untitled_Artwork-reversev2.png')] bg-[length:100%] h-[9rem] md:h-[10rem] xl:h-[11rem] 2xl:h-[14rem] w-full bg-left-bottom bg-no-repeat"></div>
            </div>
            <div className="bg-pink flex ">
                <div className="bg-light-pink m-3 lg:m-14 p-3 rounded-xl flex flex-col justify-center drop-shadow-lg">
                    <div className="text-red md:text-6xl text-3xl font-primary pb-10 uppercase text-center drop-shadow">
                        Technologies i work with
                    </div>
                    <div className="grid grid-rows-2 md:flex grid-flow-col md:justify-center place-items-center">
                        {technologies.map((technologies, i) => (
                            <div key={i} className="flex items-center flex-row lg:flex-col lg:text-center justify-center">
                                <div className="lg:text-red lg:text-3xl lg:font-seondary lg:my-4 lg:inline hidden drop-shadow">
                                    {technologies.name}
                                </div>
                                <img src={technologies.icon} alt={technologies.name} className="w-1/2 drop-shadow-lg"></img>
                            </div>
                        ))}
                    </div>
                    <div className="text-base md:text-xl font-secondary text-center mt-10 lg:mx-16">
                        I am a react developer, programing mainly with JavaScript. Also learing TypeScript on the side.
                        Using Tailwind framework, but also have tried working with react component library Material-UI (MUI).
                        Beside that, I also know how to work with GitHub.
                        <br />
                        I am a fast learner, so will be able to learn new frameworks or libaries that your company works with.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;
