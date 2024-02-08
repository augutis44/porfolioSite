import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div>
            <div className="bg-pink">
                <div className="bg-[url('/footerWave.png')] bg-[length:100%] h-[5rem] md:h-[7rem] xl:h-[9rem] 2xl:h-[11rem] w-full bg-left-bottom bg-no-repeat">

                </div>
            </div>

            <div className="bg-red flex flex-col lg:flex-row justify-around p-10 items-center">
                <div className="text-light-pink text-4xl md:text-6xl text-center mb-8 font-primary uppercase drop-shadow">
                    got questions?
                </div>
                <div className="flex flex-col font-secondary text-xl md:text-2xl break-all">
                    <div className="flex flex-row items-center drop-shadow">
                        <HiOutlineMail className="text-light-pink text-4xl mr-3" />
                        <p className="text-light-pink">kraujalytee@gmail.com</p>
                    </div>
                    <div className="flex flex-row items-center drop-shadow">
                        <FiGithub className="text-light-pink text-4xl mr-3 shrink-0" />
                        <a href="https://github.com/augutis44" className="text-light-pink">https://github.com/augutis44</a>
                    </div>
                    <div className="flex flex-row items-center drop-shadow">
                        <FaLinkedin className="text-light-pink text-4xl mr-3 shrink-0" />
                        <a href="https://www.linkedin.com/in/augustina-kraujalyte/" className="text-light-pink">https://www.linkedin.com/in/augustina-kraujalyte/</a>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Footer;
