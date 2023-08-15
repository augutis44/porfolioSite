import { FaHeart } from "react-icons/fa";

const LikeACat = () => {
    return (
        <div className="bg-red flex flex-row items-center justify-center">
            <div className="flex flex-col items-center text-center">
                <div className="text-light-pink text-7xl font-primary mb-5">
                    This is Meilutė <br /> Give her a <br /> Like
                </div>
                <div className="text-light-pink text-7xl font-primary mb-5">
                    9999
                </div>
                <FaHeart size='5rem' className="text-pink items-center" />
            </div>
            <div className="m-12">
                <img src='public\346132546_561809299468156_3423427807289056686_n (1).jpg' alt='Meilute the cat' className=" rounded-xl"/>
            </div>
        </div>
    )
}

export default LikeACat;
