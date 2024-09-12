import React from "react";
import { assets } from "../assets/assets";

const Footer = () => {
  return (
    <div className="md:mx-10">
      <div className="flex flex-col sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-40 text-sm">
        {/* ------- Left Side ------- */}
        <div>
          <img className="mb-5 w-40" src={assets.logo} alt="" />
          <p className="w-full md:w-2/3 text-gray-600 leading-6">
            Pioneering healthcare optimizations that improves treatments,
            reduces sickness and helps people's healthcare in needs.
          </p>
        </div>

        {/* ------- Center Side ------- */}
        <div>
          <p className="text-xl font-medium mb-5">COMPANY</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>Home</li>
            <li>About us</li>
            <li>Contact us</li>
            <li>Privacy policy</li>
          </ul>
        </div>

        {/* ------- Right Side ------- */}
        <div>
          <p className="text-xl font-medium mb-5">GET IN TOUCH</p>
          <ul className="flex flex-col gap-2 text-gray-600">
            <li>088-8879576</li>
            <li>prescripto@healthcare.com</li>
          </ul>
        </div>
      </div>

      {/* --------- Copyright Text---------- */}
      <div>
        <hr />
        <p className="py-5 text-sm text-center">Copyright 2024@ Prescripto - All Rights Reserved.</p>
      </div>
    </div>
  );
};

export default Footer;
