import { AiFillGithub, AiFillLinkedin, AiFillYoutube } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { GiTie } from "react-icons/gi";
import { BsWhatsapp } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
const Sidebar = () => {
  return (
    <div>
      <img
        src="/profill.jpg"
        alt="Profil"
        className="w-32 h-32 mx-auto rounded-full"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="mr-2 text-blue-500">Taufik</span>Hidayat
      </h3>
      <p className="px-2 py-1 bg-gray-200 rounded-full">Web Developer</p>
      <a
        className="flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full"
        href=" "
        download="name"
      >
        <GiTie className="w-8 h-8" />
        Download Resume
      </a>
      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-blue-500 md:w-full">
        <a href="">
          <AiFillYoutube className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillGithub className="w-8 h-8 cursor-pointer" />
        </a>
        <a href="">
          <AiFillLinkedin className="w-8 h-8 cursor-pointer" />
        </a>
      </div>

      {/* addres */}
      <div
        className="py-4 my-5 bg-gray-200"
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Cilacap, Jawa Tengah Indonesia</span>
        </div>
        <div className="flex items-center justify-center space-x-1">
          <AiOutlineMail />
          <p className="my-3">Taufikhdyt@gmail.com</p>
        </div>
        <div className="flex items-center justify-center space-x-2">
          <BsWhatsapp />
          <a
            href="https://wa.me/6283871940605"
            target="_blank"
            className="my-2"
          >
            083871940605
          </a>
        </div>
      </div>

      {/* Button */}
      <button
        onClick={() => window.open("mailto:taufikhdyt2599@gmail.com")}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-red-500 focus:outline-none"
      >
        Email me
      </button>
      <button className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-blue-500 to-red-500">
        Light Ui
      </button>
    </div>
  );
};

export default Sidebar;
