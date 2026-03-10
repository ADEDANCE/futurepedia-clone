import React from "react";
import { logo } from "../assets/index";
import Button from "../components/Button";
import { FaLinkedin } from "react-icons/fa6";
import {
  FaFacebook,
  FaInstagram,
  FaTiktok,
  FaTwitter,
  FaYoutube,
} from "react-icons/fa";

const Footer = () => {
  const categories = [
    "  Productivity Tools",
    "Image Generators",
    "Text Generators",
    "Video Tools",
    "Art Generators",
    "All Ai Tools",
  ];
  const Resources = [
    "Best AI Art Generators",
    "Best AI Image Generators",
    "Best AI Chatbots",
    "Best AI Text Generators",
    "Best AI 3D Generators",
    "All Resources",
    "Skill Leap",
  ];
  const Companys = [
    "About Us",
    "Contact Us",
    "Advertise",
    "Submit a Tool",
    "Request a Feature",
    "Update a Tool",
    "Login",
    "Editorial Guidelines",
  ];
  return (
    <footer className=" bg-gray-900 text-white py-12">
      <div
        className="max-w-7xl mx-auto px-4 text-center grid grid-cols-1 lg:grid-cols-3 lg:gap-16 gap-6
      "
      >
        <div className=" text-start">
          <img src={logo} alt="" />
          <p className=" mt-4">
            Advertiser Disclosure: Futurepedia.io is committed to rigorous
            editorial standards to provide our users with accurate and helpful
            content. To keep our site free, we may receive compensation when you
            click some links on our site.
          </p>
        </div>

        <div className="grid grid-cols-2">
          <div className=" grid grid-cols-1 gap-2 text-start ">
            <h5 className=" font-bold">Categories</h5>
            {categories.map((category, index) => (
              <p key={index} className=" hover:underline text-sm ">
                {category}
              </p>
            ))}
          </div>

          <div className=" grid grid-cols-1 gap-2 text-start">
            <h5 className=" font-bold">Resources</h5>
            {Resources.map((Resource, index) => (
              <p key={index} className=" hover:underline text-sm text-start">
                {Resource}
              </p>
            ))}
          </div>
        </div>

        {/* Thrid column */}
        <div className="grid grid-cols-2 gap-10">
          <div className=" grid grid-cols-1 gap-2 text-start">
            <h5 className=" font-bold">Company</h5>
            {Companys.map((Company, index) => (
              <a key={index} className=" hover:underline text-sm text-start">
                {Company}
              </a>
            ))}
          </div>

          <div className=" hidden lg:block">
            <Button
              className={"bg-blue-400 hover:bg-blue-500 text-white mb-7 "}
              children={"Sign Up for free"}
            />
            <div className=" flex gap-3 ">
              <FaLinkedin />
              <FaTwitter />
              <FaYoutube />
              <FaTiktok />
              <FaInstagram />
              <FaFacebook />
            </div>
          </div>
        </div>

        <div className=" grid lg:hidden">
          <Button
            className={
              "bg-blue-400 hover:bg-blue-500 text-white mb-7 md:max-w-60 "
            }
            children={"Sign Up for free"}
          />
          <div className=" flex gap-3 ">
            <FaLinkedin />
            <FaTwitter />
            <FaYoutube />
            <FaTiktok />
            <FaInstagram />
            <FaFacebook />
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
