import { CiBank } from "react-icons/ci";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { GoCodeReview } from "react-icons/go";
import { FaBusinessTime } from "react-icons/fa6";


const MeetOurUsers = () => {
    return (
        <section className="">
    <div className="py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="lg:text-center">
                <h2
                    className="font-heading mb-4 bg-blue-100 text-blue-600 px-4 py-2 rounded-lg md:w-64 md:mx-auto text-xs font-semibold tracking-widest  uppercase title-font">
                    Everyday Champions
                </h2>
                <p className="font-heading my-5 text-3xl leading-8 font-semibold tracking-tight text-white sm:text-4xl">
                Seize the Day: Empower Your Workflow with TaskNinja
                </p>
                <p className="mt-4 max-w-3xl text-sm text-white/90 lg:mx-auto">
                Discover the diverse professionals finding success with our task management platform. Real stories, real impact – explore how everyday heroes are mastering their tasks effortlessly.
                </p>
            </div>
            <div className="mt-16">
                <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md text-5xl text-blue-500/90">
                                <CiBank />
                            </div>
                            <p className="font-heading ml-16 text-2xl leading-6 font-bold text-white/90">Bankers</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-xs text-blue/90">
                            Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md text-5xl text-blue-500/90">
                                <HiBuildingOffice2/>
                            </div>
                            <p className="font-heading ml-16 text-2xl leading-6 font-bold text-white/90"> Corporate Professionals</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-xs text-white/90"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md text-5xl text-blue-500/90">
                                <GoCodeReview/>

                            </div>
                            <p className="font-heading ml-16 text-2xl leading-6 font-bold text-white/90">Developers
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-xs text-white/90"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md text-5xl text-blue-500/90">
                                <FaBusinessTime />

                            </div>
                            <p className="font-heading ml-16 text-2xl leading-6 font-bold text-white/90">Business Person</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-xs text-white/90"> Lorem ipsum, dolor sit amet consectetur
                            adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate
                            blanditiis ratione.
                        </dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
    )}
export default MeetOurUsers;