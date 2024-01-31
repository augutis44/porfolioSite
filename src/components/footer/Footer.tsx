import { HiOutlineMail } from "react-icons/hi";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <div className="bg-light-pink flex flex-col lg:flex-row justify-around py-10 items-center">
            <div className="text-red text-4xl md:text-6xl text-center mb-8 font-primary uppercase drop-shadow">
                got questions?
            </div>
            <div className="flex flex-col font-secondary text-xl md:text-2xl break-all">
                <div className="flex flex-row items-center drop-shadow">
                    <HiOutlineMail className="text-red text-4xl mr-3" />
                    kraujalytee@gmail.com
                </div>
                <div className="flex flex-row items-center drop-shadow">
                    <FiGithub className="text-red text-4xl mr-3 shrink-0" />
                    <a href="https://github.com/augutis44">https://github.com/augutis44</a>
                </div>
                <div className="flex flex-row items-center drop-shadow">
                    <FaLinkedin className="text-red text-4xl mr-3 shrink-0" />
                    <a href="https://www.linkedin.com/in/augustina-kraujalyte/">https://www.linkedin.com/in/augustina-kraujalyte/</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
