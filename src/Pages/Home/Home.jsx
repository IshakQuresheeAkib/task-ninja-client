import Banner from "./Banner/Banner";
import Footer from "./Footer/Footer";
import MeetOurUsers from '../../Pages/MeetOurUsers/MeetOurUsers'

const Home = () => {
    return (
        <div>
            <Banner></Banner>
            <div className="my-36"><MeetOurUsers></MeetOurUsers></div>
            <Footer></Footer>
        </div>
    )}
export default Home;