import { FiArrowUp } from "react-icons/fi";
import { Link } from 'react-scroll';


const ToTopButton = () => {

    return (
        <button className="rounded-full bg-white fixed bottom-3 right-3 text-5xl drop-shadow-lg z-10 hover:animate-bounce">
            <Link activeClass="active" smooth spy to='menu'>
                <FiArrowUp className="text-red" />
            </Link>
        </button>
    )
}

export default ToTopButton;
