
const technologies = [
    {
        name: 'Javascript',
        icon: '/pngegg (1).png'
    },
    {
        name: 'React',
        icon: '/image (2).png'
    },
    {
        name: 'Tailwind',
        icon: '/image.png'
    },
    {
        name: 'Bootstrap',
        icon: '/Bootstrap_logo.svg.png'
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
        name: 'Node.Js',
        icon: '/nodeJS.png'
    },
    {
        name: 'Figma',
        icon: '/figma.png'
    }
]

const Technologies = () => {
    return (
        <div>
            <div className="bg-pink">
                <div className="bg-[url('/Untitled_Artwork-reversev2.png')] bg-[length:100%] h-[9rem] md:h-[11rem] xl:h-[13rem] 2xl:h-[17rem] w-full bg-left-top bg-no-repeat"></div>
            </div>
            <div id='technologies' className="bg-pink flex">
                <div className="bg-light-pink m-3 lg:m-14 p-3 rounded-xl flex flex-col justify-center drop-shadow-lg">
                    <div className="text-red md:text-6xl text-3xl font-primary pb-10 uppercase text-center drop-shadow">
                        Technologies i work with
                    </div>
                    <div className="grid grid-rows-2 md:flex grid-flow-col md:justify-center place-items-center">
                        {technologies.map((technologies, i) => (
                            <div key={i} className="flex items-center flex-row lg:flex-col lg:text-center justify-center">
                                {/* <div className="lg:text-red lg:text-3xl lg:font-seondary lg:my-4 lg:inline hidden drop-shadow">
                                    {technologies.name}
                                </div> */}
                                <img src={technologies.icon} alt={technologies.name} className="w-1/2 drop-shadow-lg"></img>
                            </div>
                        ))}
                    </div>
                    <div className="text-base md:text-xl font-secondary text-center mt-10 lg:mx-16">
                        I am a React developer, mainly programming with JavaScript while also learning TypeScript on the side.
                        Front-end work is my passion, so I enjoy experimenting with various frameworks and libraries such as Tailwind, Bootstrap, and MUI.
                        While I admit that back-end development is not my strong suit, I'm actively working on improving my skills in that area.
                        Beside all that, I also know how to work with GitHub for version control and can design/develop pixel to pixel by design with Figma.
                        <br />
                        <br />
                        As a fast learner, I'm enthusiastic about adapting to new technologies that align with your company's needs.
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Technologies;
