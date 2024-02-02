import { IconsProps } from "./PropTypes";

interface MobileAboutProps {
    icons: IconsProps[]
}

const MobileAbout = ({ icons }: MobileAboutProps) => {

    return (
        <div className="lg:hidden bg-pink items-center pt-10 pb-3">
            <div className="text-red text-3xl md:text-6xl font-primary uppercase text-center pb-10 drop-shadow">
                About Me
            </div>
            <div className='flex flex-col'>
                {icons.map((icon, i) => (
                    <div key={i} className="bg-light-pink rounded-xl mt-3 mx-3 p-4 drop-shadow">
                        <div className="flex justify-center my-2 items-center">
                            <icon.name className="fill-red text-2xl mr-2" />
                            <div className="text-red text-2xl font-primary text-center">
                                {icon.title}
                            </div>
                        </div>
                        <div className="text-base md:text-xl font-secondary text-center">
                            {icon.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileAbout;
