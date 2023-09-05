
const MobileAbout = ({ icons }) => {

    return (
        <div className="lg:hidden bg-pink items-center py-3">
            <div className="text-red text-3xl font-primary uppercase text-center py-3 drop-shadow">
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
                        <div className="text-base font-secondary text-center">
                            {icon.text}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default MobileAbout;
