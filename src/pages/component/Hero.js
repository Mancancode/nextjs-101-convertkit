import Tick from "../../icons/Tick"
import SignupForm from "../component/SignupForm"
const outcomes = [
    "How to build this landing page with Next.js",
    "How to create API endpoint and integrate with ConvertKit API",
    "How to use React Hook Form and TailwindCSS",
];

const ComingSoonBadge = () => (
    <span className="bg-blue-500 text-white text-xs py-1 px-2 rounded-md mb-4 inline-block">
        Coming Soon!
    </span>
);

const Hero = () => {
    return <div className="border border-gray-100 md:flex ">
        <div className="bg-gray-200 md:w-1/3 text-centre">
            <img src="/assets/img_nextjs-101-cover.png" />
        </div>
        <div className="py-4  px-8 md:w-2/3 self-center pl-8">
            <h2 className="font-bold text-2xl mb-3  ">What to learn in this course are few</h2>
            {
                outcomes && (<ul>
                    { outcomes.map((i) => {
                        return <li key={i} className="text-gray-700 flex mb-2">
                            <span className="self-center mr-2">
                                <Tick className="h-4" />
                            </span>
                            <span className="opacity-75">{i} </span>
                        </li>;
                    })}
                </ul>)
            }
            <ComingSoonBadge />
            <SignupForm title="Leave your email below to be notified when the course is ready " />

        </div>

    </div >
};

export default Hero;