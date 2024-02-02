
export interface AboutProps {
    title: string;
    text: string;
  }

const About = ({ title, text }: AboutProps) => {
    return (
        <div>
            <div className="bg-light-pink py-10 px-3 mx-16 rounded-xl">
                <div className="text-red text-6xl font-primary text-center mb-5">
                    {title}
                </div>
                <div className="font-secondary text-center">
                    {text}
                </div>
            </div>
        </div>
    );
}

export default About;
