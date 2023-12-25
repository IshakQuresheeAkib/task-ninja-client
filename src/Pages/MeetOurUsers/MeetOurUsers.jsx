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
                                <CiBank/>
                            </div>
                            <p className="font-heading ml-16 text-3xl leading-6 font-bold text-white/90">Bankers</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-sm text-white/80">TaskNinja helps bankers manage tasks better. It helps prioritize time, collaborate on projects easily, and track deadlines. It improves client relationships, keeps documents in one place, and makes workflows smoother. The simple interface makes it easy to use, boosting productivity and organization in banking.</dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md text-5xl text-blue-500/90">
                                <HiBuildingOffice2/>
                            </div>
                            <p className="font-heading ml-16 text-3xl leading-6 font-bold text-white/90"> Corporate Professionals</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-sm text-white/80">TaskNinja is your go-to tool for corporate tasks. It makes managing time, teamwork, and deadlines a breeze. Plus, it improves client interactions, organizes documents, and simplifies work. With an easy-to-use interface, it boosts productivity for corporate professionals.</dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md text-5xl text-blue-500/90">
                                <GoCodeReview/>

                            </div>
                            <p className="font-heading ml-16 text-3xl leading-6 font-bold text-white/90">Developers
                            </p>
                        </dt>
                        <dd className="mt-2 ml-16 text-sm text-white/80">TaskNinja is like a helper for software developers. It makes managing tasks easy by helping with time, teamwork on projects, and keeping track of deadlines. It also makes dealing with clients better, keeps documents in one place, and makes work smoother.</dd>
                    </div>
                    <div className="relative">
                        <dt>
                            <div
                                className="absolute flex items-center justify-center h-12 w-12 rounded-md text-5xl text-blue-500/90">
                                <FaBusinessTime />

                            </div>
                            <p className="font-heading ml-16 text-3xl leading-6 font-bold text-white/90">Business Person</p>
                        </dt>
                        <dd className="mt-2 ml-16 text-sm text-white/80">For business folks, TaskNinja is your task buddy. It makes time, teamwork, and deadlines a walk in the park. It amps up client interactions, tidies up documents, and simplifies work. Easy to use, it's a productivity boost for business people.</dd>
                    </div>
                </dl>
            </div>

        </div>
    </div>
</section>
    )}
export default MeetOurUsers;