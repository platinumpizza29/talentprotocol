import { BiCaretRight } from "react-icons/bi";
import { PiSuitcaseSimpleBold, PiComputerTowerBold } from "react-icons/pi";
import { ImFacebook2, ImYoutube } from "react-icons/im";
import { BsFilePost } from "react-icons/bs";
import { RiTwitterXFill } from "react-icons/ri";
import { FiUsers } from "react-icons/fi";
import { FaSlackHash } from "react-icons/fa";
import Lottie from "lottie-react";
import animationData from "../assets/job.json";
import { useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();
  return (
    <div className="h-screen w-screen font-my-font bg-base-100 overflow-x-hidden !scroll-smooth">
      {/* navbar starts here */}
      <div className="navbar">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow bg-base-100 rounded-box w-52"
            >
              <li>
                <a
                  className="flex flex-row justify-between items-center"
                  onClick={() => navigate("/register")}
                >
                  Sign Up <BiCaretRight className="text-lg" />
                </a>
              </li>
              <li>
                <a
                  className="flex flex-row justify-between items-center"
                  onClick={() => navigate("/login")}
                >
                  Sign In <BiCaretRight className="text-lg" />
                </a>
              </li>
            </ul>
          </div>
          <a className="btn btn-ghost normal-case text-2xl font-my-font-bold">
            Talent Protocol
          </a>
        </div>
        <div className="navbar-end hidden lg:flex">
          <ul className="menu menu-horizontal p-1">
            <button
              className="btn btn-outline btn-primary mr-2"
              onClick={() => navigate("/register")}
            >
              Sign Up
            </button>
            <button
              className="btn btn-primary"
              onClick={() => navigate("/login")}
            >
              Sign In
            </button>
          </ul>
        </div>
      </div>
      {/* navbar ends here */}
      {/* Boby div starts here */}
      <div className="">
        {/* heading animation section */}
        <section className="grid grid-cols-1 md:grid-cols-2 place-items-center p-8">
          <div className="" style={{ height: "100%", width: "100%" }}>
            <Lottie
              animationData={animationData}
              style={{ height: "90%", width: "90%" }}
            />
          </div>
          <div className="font-my-font-bold font-bold px-2">
            <h1 className="text-transparent bg-gradient-to-r bg-clip-text from-blue-500 to-green-500">
              Find a job that <br />
              Match Your <br />
              Passion.
            </h1>
            <p className="mt-6 text-slate-500">
              Talent protocol is a job search for people with passion. <br />
              and quickly search from thousands of jobs that suits your passion.
            </p>
          </div>
        </section>
        {/* cards section starts here */}
        <section className="grid grid-cols-1 place-items-center mt-10 md:grid-cols-2 p-8">
          <div className="w-full md:w-1/2">
            <span className="text-3xl">
              Features of Talent Protocol <br />
            </span>
            <h1 className="font-bold">that you'll love</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quis quia
              dignissimos quam at, nostrum, rem eligendi possimus animi illum
              cumque blanditiis! Sint, nihil fugit. Repudiandae natus
              perspiciatis hic quasi nobis porro doloribus? Sint magnam nisi
              placeat earum autem, dignissimos veritatis vitae odit vel nostrum.
              Impedit rerum eum expedita suscipit fugiat.
            </p>
          </div>
          {/* cards div */}
          <div className="grid grid-cols-1 place-items-center md:grid-cols-2 gap-4">
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="avatar placeholder">
                  <div className="bg-gradient-to-r bg-clip-content from-blue-500 to-green-500 text-neutral-content rounded-full w-20">
                    <BsFilePost className="text-2xl" />
                  </div>
                </div>
                <h2 className="card-title">Job Posting</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="avatar">
                  <div className="avatar placeholder">
                    <div className="bg-gradient-to-r bg-clip-content from-blue-500 to-green-500 text-neutral-content rounded-full w-20">
                      <PiSuitcaseSimpleBold className="text-2xl" />
                    </div>
                  </div>
                </div>
                <h2 className="card-title">Career Page</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="avatar placeholder">
                  <div className="bg-gradient-to-r bg-clip-content from-blue-500 to-green-500 text-neutral-content rounded-full w-20">
                    <FiUsers className="text-2xl" />
                  </div>
                </div>
                <h2 className="card-title">Talent Pools</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-full bg-base-100 shadow-xl">
              <div className="card-body">
                <div className="avatar placeholder">
                  <div className="bg-gradient-to-r bg-clip-content from-blue-500 to-green-500 text-neutral-content rounded-full w-20">
                    <PiComputerTowerBold className="text-2xl" />
                  </div>
                </div>
                <h2 className="card-title">Interview Schedules</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* pricing section begins here */}
        <section className="p-8 mt-10">
          <div className="w-full h-36 flex flex-col justify-start md:justify-center items-center">
            <span className="text-4xl">Choose the plan</span>
            <h1 className="font-bold">that is right for you</h1>
          </div>
          {/* cards start from here */}
          <div className="grid grid-cols-1 gap-8 place-items-center md:grid-cols-3 p-8">
            <div className="card w-full h-96 bg-base-100 shadow-xl md:w-96">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="sailor.png" />
                  </div>
                </div>
                <h2 className="card-title">Sailor Plan</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="bg-gradient-to-tr bg-clip-content from-purple-500 to-blue-500 card w-full h-96 shadow-xl md:w-96">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="voyages.png" />
                  </div>
                </div>
                <h2 className="card-title">Voyager plan</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-accent">Buy Now</button>
                </div>
              </div>
            </div>
            <div className="card w-full h-96 bg-base-100 shadow-xl md:w-96">
              <div className="card-body">
                <div className="avatar">
                  <div className="w-24 rounded-full">
                    <img src="adventurer.png" />
                  </div>
                </div>
                <h2 className="card-title">Voyager Plan</h2>
                <p>If a dog chews shoes whose shoes does he choose?</p>
                <div className="card-actions justify-end">
                  <button className="btn btn-primary">Buy Now</button>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* the card footer starts here */}
        <section className="flex flex-row justify-center items-center md:flex-col mt-10">
          <div className="card w-1/2 bg-base-100 shadow-xl border-2 border-purple-500">
            <div className="card-body">
              <p>We are using cookies for no reason.</p>
            </div>
          </div>
        </section>
      </div>
      {/* footer secttion starts here */}
      <section className="mt-10">
        <footer className="footer p-10 bg-base-200 text-base-content">
          <nav>
            <header className="footer-title">Services</header>
            <a className="link link-hover">Branding</a>
            <a className="link link-hover">Design</a>
            <a className="link link-hover">Marketing</a>
            <a className="link link-hover">Advertisement</a>
          </nav>
          <nav>
            <header className="footer-title">Company</header>
            <a className="link link-hover">About us</a>
            <a className="link link-hover">Contact</a>
            <a className="link link-hover">Jobs</a>
            <a className="link link-hover">Press kit</a>
          </nav>
          <nav>
            <header className="footer-title">Legal</header>
            <a className="link link-hover">Terms of use</a>
            <a className="link link-hover">Privacy policy</a>
            <a className="link link-hover">Cookie policy</a>
          </nav>
          <form>
            <header className="footer-title">Newsletter</header>
            <fieldset className="form-control w-80">
              <label className="label">
                <span className="label-text">Enter your email address</span>
              </label>
              <div className="relative">
                <input
                  type="text"
                  placeholder="username@site.com"
                  className="input input-bordered w-full pr-16"
                />
                <button className="btn btn-primary absolute top-0 right-0 rounded-l-none">
                  Subscribe
                </button>
              </div>
            </fieldset>
          </form>
        </footer>
        <footer className="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300">
          <aside className="items-center grid-flow-col">
            <FaSlackHash className="text-3xl" />
            <p>
              Talent Protocol <br />
              Connecting Talent to Opportunity.
            </p>
          </aside>
          <nav className="md:place-self-center md:justify-self-end">
            <div className="grid grid-flow-col gap-4">
              <RiTwitterXFill className="text-2xl" />
              <ImYoutube className="text-2xl" />
              <ImFacebook2 className="text-2xl" />
            </div>
          </nav>
        </footer>
      </section>
    </div>
  );
}
