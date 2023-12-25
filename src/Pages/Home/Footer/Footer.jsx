import { FaFacebook,FaXTwitter,FaYoutube  } from "react-icons/fa6";


const Footer = () => {
    return (
        <footer className="footer items-start max-w-7xl mx-auto p-4 sm:p-6 lg:p-8 text-neutral-content">
            <aside className="flex items-baseline">
                <h3 className="text-2xl">TaskNinja</h3>
                <p className="text-xs">Copyright © 2023 - All right reserved bg TaskNinja</p>
            </aside> 
            <nav className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
                <a href="https://www.facebook.com" target="_blank"><FaFacebook className="text-2xl text-white hover:text-blue-500 duration-300 cursor-pointer"/></a>
                <a href="https://www.twitter.com" target="_blank"><FaXTwitter className="text-2xl text-white hover:text-blue-500 duration-300 cursor-pointer"/></a>
                <a href="https://www.youtube.com" target="_blank"><FaYoutube className="text-2xl text-white hover:text-blue-500 duration-300 cursor-pointer"/></a>
            </nav>
        </footer>
    )}
export default Footer;