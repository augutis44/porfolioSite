import LeftSide from "../helpers/LeftSide";
import RightSide from "../helpers/RightSide";
import { PiStarFourFill } from "react-icons/pi";

const Introduction = () => {
    return (
        <div className="flex">
            <LeftSide>
                <div className="text-center bg-pink min-h-50 flex flex-col items-center justify-center h-full">
                    <div className="mb-5">
                        <PiStarFourFill color='#FDDCE6' size='5rem' />
                    </div>
                    <div className="text-red text-8xl font-primary mb-5">
                        HI I'M <br/> AUGUSTINA
                    </div>
                    <div className="text-light-pink text-4xl font-secondary">
                        Wanna be front end web <br/> developer
                    </div>
                </div>
            </LeftSide>
            <RightSide>
                <img src='IMG_09141.jpg' alt='a photo of me' />
            </RightSide>
        </div>
    );
};

export default Introduction;
