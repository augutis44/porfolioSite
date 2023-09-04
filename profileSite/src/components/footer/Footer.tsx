import { HiOutlineMail } from "react-icons/hi";
import { AiOutlinePhone } from "react-icons/ai";
import { FiGithub } from "react-icons/fi";
import { FaLinkedin } from "react-icons/fa";



const Footer = () => {
    return (
        <div className="bg-light-pink flex flex-col md:flex-row justify-between	py-10 md:px-20">
            <div className="text-red text-5xl md:text-6xl text-center mb-8 font-primary uppercase drop-shadow">
                got questions?
            </div>
            <div className="flex flex-col">
                <div className="flex flex-row items-center text-xl md:text-3xl drop-shadow">
                    <HiOutlineMail className="text-red text-5xl mx-3"/>
                    kraujalytee@gmail.com
                </div>
                <div className="flex flex-row items-center text-xl md:text-3xl drop-shadow">
                    <FiGithub className="text-red text-5xl mx-3" />
                    <a href="https://github.com/augutis44">https://github.com/augutis44</a>
                </div>
                <div className="flex flex-row items-center text-xl md:text-3xl drop-shadow">
                    <FaLinkedin className="text-red text-5xl mx-3" />
                    <a href="https://www.linkedin.com/in/augustina-kraujalyte/">https://www.linkedin.com/in/augustina-kraujalyte/</a>
                </div>
            </div>
        </div>
    )
}

export default Footer;
