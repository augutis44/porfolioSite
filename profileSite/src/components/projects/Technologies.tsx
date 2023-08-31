
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
        <div className="bg-pink">
            <div className="bg-light-pink m-4 lg:m-14 p-3 pt-10 lg:p-14 rounded-xl">
                <div className="text-red md:text-6xl text-4xl font-primary mb-10 uppercase text-center">
                    Technologies i work with
                </div>
                <div className="grid grid-rows-2 grid-flow-col">
                    {technologies.map((technologies, i) => (
                        <div key={i} className="flex items-center flex-row lg:flex-col lg:text-center">
                            <div className="lg:text-red lg:text-3xl lg:font-seondary lg:my-4 lg:inline hidden">
                                {technologies.name}
                            </div>
                            <img src={technologies.icon} alt={technologies.name} className="w-1/2"></img>
                        </div>
                    ))}
                </div>
                <div className="text-xl font-secondary text-center mt-10">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse sodales
                    purus sit amet porta aliquet. Cras vulputate tristique nunc nec cursus. Integer
                    risus odio, imperdiet in arcu vel, consectetur tincidunt est. Vestibulum maximus
                    tempus enim, tristique posuere nisl varius non. Nullam non erat massa. Fusce
                    eu gravida lorem. Aenean a accumsan diam, vel convallis diam. Curabitur eu
                    enim velit. Cras porta sit amet dolor ac ullamcorper.
                </div>
            </div>
        </div>
    )
}

export default Technologies;
