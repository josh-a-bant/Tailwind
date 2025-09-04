import React from "react";

const Hero = () => {
  return (
    <div className=" my-4  flex flex-col justify-center items-center w-full">
      <h1 className="max-w-3xl text-center text-7xl font-bold tracking-tight leading-tight bg-clip-text text-transparent bg-gradient-to-r from-neutral-50 to-neutral-500">
        Unleash the power of intuitive finance
      </h1>
      <p className="text-neutral-300 max-w-2xl text-xl text-center mt-10 selection:bg-white">
        Say goodbye to the outdated financial tools. Every small business owner,
        regardless of the background, can now manage their business like a pro.
        Simple. Intuitive. And never boring.
      </p>
      <div className="mt-8 flex justify-center">
        <button className="relative text-white bg-transparent border border-neutral-700 rounded-xl px-4 py-2">
          <div className=" absolute h-px -bottom-px inset-x-0 bg-gradient-to-r from-transparent via-sky-600/50 to-transparent w-full rounded-xl" />
          Join the waitlist
        </button>
      </div>
    </div>
  );
};

export default Hero;
