
const technologies = [
    {
        name: 'React',
        icon: 'public/image (2).png'
    },
    {
        name: 'Tailwind',
        icon: 'public/image.png'
    },
    {
        name: 'MUI',
        icon: 'public/image (1).png'
    },
    {
        name: 'Typescript',
        icon: 'public/Typescript_logo_2020.svg.png'
    },
    {
        name: 'Javascript',
        icon: 'public/pngegg (1).png'
    }
]

const Technologies = () => {
    return (
        <div className="bg-pink lg:h-screen flex ">
            <div className="bg-light-pink m-3 lg:m-14 p-3 pt-10 rounded-xl flex flex-col justify-center drop-shadow-lg">
                <div className="text-red md:text-6xl text-3xl font-primary mb-10 uppercase text-center drop-shadow">
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
                <div className="text-base md:text-xl font-secondary text-center mt-10">
                    I am a react developer, programing mainly with JavaScript. Also learing TypeScript on the side.
                    Using Tailwind framework, but also have tried working with react component library Material-UI (MUI).
                    Beside that, I also know how to work with GitHub.
                    <br/>
                    I am a fast learner, so will be able to learn new frameworks or libaries that your company works with.
                </div>
            </div>
        </div>
    )
}

export default Technologies;
