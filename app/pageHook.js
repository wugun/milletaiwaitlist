"use client";

import { PiWarningThin } from "react-icons/pi";
import { TbArrowsJoin2 } from "react-icons/tb";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { IoIosArrowDown } from "react-icons/io";

import {
  AnimatePresence,
  motion,
  useTransform,
  useMotionValue,
  useSpring,
} from "framer-motion";

import Snowfall from "react-snowfall";

const people = [
  {
    id: 1,
    name: "JOIN NOW",
    designation: "How bout u join my fuqin waitlist 😂",
    image: "/img/email.png",
    href: "https://instagram.com/Joscriptt ",
  },
];

const accordingData = [
  {
    title: "What is Millet AI?",
    description:
      "Millet AI is a B2B influencer marketplace that connects influencers with e-commerce brands. With our AI-empowered matching algorithm and an exclusive pool of influencers and brands, Millet is able to match brands with influencers in all types of e-commerce categories.",
  },
  {
    title: "What is the pilot program at Millet?",
    description:
      "The pilot program aims to connect established and rising influencers with e-commerce brands for business collaboration. To ensure the quality of our services, the program is highly competitive. Influencers and brands can apply by joining our waitlist here.",
  },
  {
    title: "Who can join the waitlist? Is it open to any influencers or brands?",
    description:
      "The waitlist is open to vouched influencers and growth-stage e-commerce brands. We are highly selective with approving users off of the waitlist. Generally speaking, the priority is given to US-based influencers with at least 10,000 real followers and US or global e-commerce brands with a verifiable GMV record. However, we also give access to high-potential influencers and brands in special cases.",
  },

  {
    title: "How can I know if I am approved or not after joining the waitlist?",
    description:
      "Our team will reach out to eligible influencers and brands via email within 3 business days to follow up on the next steps.",
  },
];

import { useForm, Controller } from "react-hook-form";

import { z } from "zod";


function PageHook() {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpenModel, setIsOpenModel] = useState(false);

  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [error, setError] = useState([]);
  const [success, setSuccess] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();

    console.log("First name: ", firstname);
    console.log("Last name: ", lastname);
    console.log("Email: ", email);
    console.log("Role: ", role);

    const res = await fetch("api/email", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify({
        firstname,
        lastname,
        email,
        role,
      }),
    });

    const { msg, success } = await res.json();
    setError(msg);
    setSuccess(success);

    if (success) {
      setFirstname("");
      setLastname("");
      setEmail("");
      setRole("");
    }
  };

  const springConfig = { stiffness: 100, damping: 5 };
  const x = useMotionValue(0); // going to set this value on mouse move

  const [activeIndex, setActiveIndex] = useState(null);

  const handleActiveState = (index) => {
    setActiveIndex((prevIndex) => (prevIndex === index ? null : index));
  };

  const {
    control,
    formState: { errors, isSubmitting, isDirty, isValid },
    reset,
  } = useForm();

  // rotate the tooltip
  const rotate = useSpring(
    useTransform(x, [-100, 100], [-45, 45]),
    springConfig
  );

  // translate the tooltip
  const translateX = useSpring(
    useTransform(x, [-100, 100], [-50, 20]),
    springConfig
  );

  const validateEmail = (mail) => {
    const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
    return emailRegex.test(mail);
  };

  const handleOpenModel = () => {
    setIsOpenModel(true);
    setTimeout(() => {
      setIsOpenModel(false);
    }, 4000);
  };

  return (
    <div className="h-full w-full p-3 flex items-center justify-center relative z-50">
      <Snowfall
        snowflakeCount={200}
        color="grey"
        style={{
          position: "fixed",
          width: "100vw",
          height: "100vh",
          zIndex: -9,
        }}
        speed={"140"}
        radius={"12"}
      />
      <section className=" mt-5  ">
        <div className="space-y-4 ">
          <div className="space-y-2 text-center">
            <div className="flex justify-center">
              {/* You can use video here as well */}
              <Image
                width={128}
                height={128}
                alt="shake head"
                src={"/img/time.png"}
                className="w-32"
              />
            </div>
            <div className="flex items-center justify-center">
              
              <div className="p-[1px] bg-transparent  relative">
                <div className="p-2 ">
                  <span className="absolute inset-0 px-3 rounded-3xl overflow-hidden">
                    <motion.span
                      className="w-[500%] aspect-square absolute bg-[conic-gradient(from_0deg,transparent_0_340deg,white_360deg)] opacity-20"
                      initial={{
                        rotate: -90,
                      }}
                      animate={{
                        rotate: 90,
                      }}
                      transition={{
                        duration: 3.8,
                        ease: "linear",
                        repeat: Infinity,
                        repeatType: "reverse",
                      }}
                      style={{
                        translateX: "-50%",
                        translateY: "-10%",
                        zIndex: -1,
                      }}
                    />
                  </span>
                  <span className="bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-700">
                     Pilot Program Waitlist
                  </span>
                </div>
              </div>
              {/* <p className="bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800">
                Amazing Framer Templates & Resources!
              </p> */}
            </div>
            <h1 className="text-3xl font-bold  sm:text-5xl xl:text-6xl/none bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800 capitalize md:max-w-2xl lg:max-w-3xl mx-auto ">
              Millet AI
            </h1>
            <p className="max-w-[600px]  leading-7 text-center text-[16px] bg-clip-text text-transparent dark:bg-gradient-to-br bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-700 mx-auto ">
              Millet is a B2B influencer marketplace that connects vouched influencers with growth-stage e-commerce brands worldwide.
            </p>
            {errors.email && (
              <p className="border dark:border-white/25 border-[#704705] flex gap-x-3 items-center p-2 pl-5 max-w-md bg-gradient-to-r from-10% dark:from-[#704705] text-[#3a2503] from-[#f5a524] via-30% dark:via-black dark:to-black to-100% to-[#704705] mx-auto rounded-md dark:text-white ">
                <PiWarningThin className="text-[#704705] dark:text-white text-lg" />
                {errors.email.message}
              </p>
            )}
            </div>
            <div className="flex justify-center items-center h-screen">
              <div className="w-full max-w-md bg-transparent rounded-lg shadow-lg p-6">
                <form
                  onSubmit={handleSubmit}
                  className="space-y-4"
                >
                  <div className="flex flex-col space-y-1">
                    <label htmlFor="firstname" className="font-medium text-gray-700">First Name</label>
                    <input
                      onChange={(e) => setFirstname(e.target.value)}
                      className={`py-2.5 outline-none focus:border-2 focus:border-neutral-100 dark:border bg-opacity-20 shadow-md border 
                        border-neutral-400 dark:text-white dark:border-white/20 placeholder:text-neutral-500 pl-5 rounded-lg focus-within:border-none ${
                        isDirty && !isValid
                          ? "bg-[#f5a524] "
                          : isDirty && isValid
                          ? "bg-green-500"
                          : ""
                      }`}
                      value={firstname}
                      type="text"
                      id="firstname"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label htmlFor="lastname" className="font-medium text-gray-700">Last Name</label>
                    <input
                      onChange={(e) => setLastname(e.target.value)}
                      className={`py-2.5 outline-none focus:border-2 focus:border-neutral-100 dark:border bg-opacity-20 shadow-md border 
                        border-neutral-400 dark:text-white dark:border-white/20 placeholder:text-neutral-500 pl-5 rounded-lg focus-within:border-none ${
                        isDirty && !isValid
                          ? "bg-[#f5a524] "
                          : isDirty && isValid
                          ? "bg-green-500"
                          : ""
                      }`}
                      value={lastname}
                      type="text"
                      id="lastname"
                    />
                  </div>

                  <div className="flex flex-col space-y-1">
                    <label htmlFor="email" className="font-medium text-gray-700">Email</label>
                    <input
                      onChange={(e) => setEmail(e.target.value)}
                      className={`py-2.5 outline-none focus:border-2 focus:border-neutral-100 dark:border bg-opacity-20 shadow-md border 
                        border-neutral-400 dark:text-white dark:border-white/20 placeholder:text-neutral-500 pl-5 rounded-lg focus-within:border-none ${
                        isDirty && !isValid
                          ? "bg-[#f5a524] "
                          : isDirty && isValid
                          ? "bg-green-500"
                          : ""
                      }`}
                      value={email}
                      type="text"
                      id="email"
                    />
                  </div>

                  <div className="flex flex-col space-y-1 mt-4">
                    <label htmlFor="role" className="font-medium text-gray-700">Role</label>
                    <div className="flex space-x-4">
                      <label className="flex items-center space-x-2">
                        <input
                          type="radio"
                          name="role"
                          value="Influencer"
                          checked={role === "Influencer"}
                          onChange={(e) => setRole(e.target.value)}
                          className="form-radio text-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Influencer</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="role"
                          value="Brand"
                          checked={role === "Brand"}
                          onChange={(e) => setRole(e.target.value)}
                          className="form-radio text-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Brand</span>
                      </label>
                      <label className="flex items-center">
                        <input
                          type="radio"
                          name="role"
                          value="Other"
                          checked={role === "Other"}
                          onChange={(e) => setRole(e.target.value)}
                          className="form-radio text-blue-500"
                        />
                        <span className="ml-2 text-gray-700">Other</span>
                      </label>
                    </div>
                    {errors.role && <p className="text-red-600">{errors.role}</p>}
                  </div>

                  <div className="flex justify-center">
                    <button
                      disabled={isSubmitting}
                      className="flex items-center justify-center gap-x-3 bg-gradient-to-tr from-black from-50% via-black/40 to-gray-600/40 via-45% border-t-gray-700 disabled:cursor-not-allowed w-1/2 shadow-md border border-b-0 border-r-0 border-l-0 bg-black mt-4 lg:mt-0 rounded-md px-2 py-2.5 font-InterMedium text-sm text-gray-200 dark:text-gray-500"
                      type="submit"
                    >
                      {isSubmitting ? "Loading" : <span className="shrink-0">Join Waitlist</span>}
                    </button>
                  </div>
                </form>

                {error && (
                  <div className="bg-transparent px-4 py-2 rounded-md mt-4 flex flex-col justify-center items-center">
                    {error.map((e, index) => (
                     <div
                      key={index}
                      className={`${
                        success ? "text-green-800" : "text-red-600"
                      } px-5 py-2 text-center`}
                     >
                        {success ? "You're on the waitlist! We'll reach out shortly." : e}
                     </div>
                    ))}
                  </div>
                )}
              </div>
            </div>


          <div>
          <h1 className="text-center text-lg font-bold sm:text-3xl xl:text-4xl mt-16 mb-8 bg-clip-text text-transparent dark:bg-gradient-to-r bg-gradient-to-tr dark:from-white from-black to-neutral-600 dark:to-neutral-800 capitalize md:max-w-2xl lg:max-w-3xl mx-auto">
              Frequently Asked Questions
          </h1>
          <main className=" w-full flex items-center justify-center flex-col gap-4">
              {accordingData?.map((item, index) => (
                <div
                  className="w-full sm:w-[50%] border border-gray-500 rounded p-4"
                  key={index}>
                  <div
                    className={`${
                      activeIndex === index ? " text-gray-300" : " text-gray-500"
                    } flex items-center justify-between cursor-pointer font-semibold`}
                    onClick={() => handleActiveState(index)}>
                    <h3 className="text-[1rem] ">{item.title}</h3>
                    <IoIosArrowDown
                      className={`text-[1rem] transition-all duration-300 ${
                        activeIndex === index && "rotate-[180deg]"
                      }`}
                    />
                  </div>
                  <div
                    className={` overflow-hidden grid transition-all duration-300${
                      activeIndex === index
                        ? " grid-rows-[1fr] py-4"
                        : " grid-rows-[0fr] py-0"
                    }`}>
                    <p className="text-[0.9rem] overflow-hidden text-gray-300">
                      {item.description}
                    </p>
                  </div>
                </div>
              ))}
            </main>
          </div>
          <div className="p-3 rounded-lg border dark:border-white/10 border-neutral-400 dark:border-opacity-10 relative top-14 sm:top-14 lg:top-24 max-w-xl mx-auto flex flex-col lg:flex-row justify-between items-center text-sm">
            <p className=" text-zinc-500 dark:text-zinc-100">
               Millet AI © 2024
            </p>
            <Link
              //onClick={() => setIsOpen(true)}
              className=" bg-zinc-700/30 lg:py-1 py-2 px-2 w-full lg:w-fit mt-3 md:mt-3 lg:mt-0 text-center rounded-md  text-white"
              href="https://www.linkedin.com/company/millet-ai/"
            >
              <span>LinkedIn</span>
            </Link>
            <SpringModal isOpen={isOpen} setIsOpen={setIsOpen} />
            <RecievedModal
              isOpenModel={isOpenModel}
              setIsOpenModel={setIsOpenModel}
            />
          </div>
        </div>
        {/* {isOpenModel && <p>Submitted</p>} */}
      </section>
    </div>
  );
}

export default PageHook;

const SpringModal = ({ isOpen, setIsOpen }) => {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // onClick={() => setIsOpen(false)}
          className="bg-black/80  p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll "
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.2,
              stiffness: "20",
              type: "just",
              damping: 100,
            }}
            exit={{ scale: 0 }}
            // onClick={(e) => e.stopPropagation()}
            className="bg-white/20 backdrop-blur-lg  border border-white/10 border-opacity-10 text-white p-6 rounded-lg w-full max-w-lg shadow-xl cursor-default relative "
          >
            <Image
              width={100}
              height={100}
              className="w-16 absolute right-0 -top-16"
              src="/img/whisper.png"
              alt="whisper"
            />

            <div className="relative z-10">
              <p className="lg:text-justify  leading-6 mb-6">
                I'm doing a little Giveaway on the Launch of this Template
                Website by December. So If you sign up today, which will only
                take a few seconds and 1 click, you'll automatically be
                participated in our giveaway and 10 lucky people will get free
                access to one of Our Premium Templates, free of cost!
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpen(false)}
                  className=" flex gap-x-3 items-center justify-center lg:justify-start bg-transparent bg-white text-black hover:bg-neutral-300  transition-colors duration-200 dark:text-black font-semibold lg:w-fit w-full py-2 lg:py-1.5 rounded px-8"
                >
                  Got that
                  <Image
                    width={5}
                    height={5}
                    className="w-5"
                    src="/img/alarm.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
const RecievedModal = ({ isOpenModel, setIsOpenModel }) => {
  return (
    <AnimatePresence>
      {isOpenModel && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          // onClick={() => setIsOpen(false)}
          className="bg-black/80  p-8 fixed inset-0 z-50 grid place-items-center overflow-y-scroll "
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{
              duration: 0.2,
              stiffness: "20",
              type: "just",
              damping: 100,
            }}
            exit={{ scale: 0 }}
            // onClick={(e) => e.stopPropagation()}
            className="bg-white/20 backdrop-blur-lg  border border-white/10 border-opacity-10 text-white p-6 rounded-lg w-full max-w-md shadow-xl cursor-default relative "
          >
            <Image
              width={100}
              height={100}
              className="w-16 absolute right-0 -top-16"
              src="/img/party.png"
              alt=""
            />
            <h1 className="text-3xl font-InterBold text-center">
              You're on the waitlist
            </h1>

            <div className="relative z-10">
              <p className=" text-center text-lg mt-4  mb-6">
                We'll send a notification as soon as v0 is ready for you to
                experience
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setIsOpenModel(false)}
                  className=" flex justify-center gap-x-3 items-center bg-transparent bg-white text-black hover:bg-neutral-300  transition-colors duration-200 dark:text-black font-semibold w-60 mx-auto py-2 rounded px-8"
                >
                  <span>Happy Coding</span>
                  <Image
                    width={7}
                    height={7}
                    className="w-7"
                    src="/img/got.png"
                    alt=""
                  />
                </button>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
