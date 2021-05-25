import React from "react";
import Image from "next/image";

export const Footer: React.FC = () => {
  var year = new Date().getFullYear();
  return (
    <div className="text-center pt-10 px-5 bg-gray-800 divide-solid divide-y-2 divide-gray-700">

      <div className="text-left flex items-center justify-around pb-5">
        <ul className="justify-center list-none p-0 m-0">
          <li className="mb-10">
            <a
            href="/"
            target="_blank"
            className="block mb-3 text-xl text-white hover:text-secondary uppercase font-medium"
            >
             Jobs
            </a>
          </li>
          <li>
            <a
            href="/"
            target="_blank"
            className="block mb-3 text-gray-500 hover:text-secondary"
            >
             Fulltime
            </a>
          </li>
          <li>
            <a
            href="/"
            target="_blank"
            className="block mb-3 text-gray-500 hover:text-secondary"
            >
             Part time
            </a>
          </li>
        </ul>
        <ul className="align-left justify-center list-none p-0 m-0">
          <li className="mb-10">
            <a
            href="/"
            target="_blank"
            className="block mb-3 text-xl text-white hover:text-secondary uppercase font-medium"
            >
             companies
            </a>
          </li>
          <li>
            <a
            href="/"
            target="_blank"
            className="block mb-3 text-gray-500 hover:text-secondary"
            >
             Local Companies
            </a>
          </li>
          <li>
            <a
            href="/"
            target="_blank"
            className="block mb-3 text-gray-500 hover:text-secondary"
            >
             Inernational Companies
            </a>
          </li>
        </ul>
        <ul className="justify-center list-none p-0 m-0">
          <li className="mb-10">
            <a
            href="/"
            target="_blank"
            className="block mb-3 text-xl text-white hover:text-secondary uppercase font-medium"
            >
             about
            </a>
          </li>
          <li>
            <a
            href="/"
            target="_blank"
            className="block mb-3 text-gray-500 hover:text-secondary"
            >
             Lorem
            </a>
          </li>
          <li>
            <a
            href="/"
            target="_blank"
            className="block mb-3 text-gray-500 hover:text-secondary"
            >
             Ipsum
            </a>
          </li>
        </ul>
      </div>

      <div className="flex items-center justify-between py-4">
        <div className="flex items-center">
          <a
            href="https://auis.edu.krd"
            target="_blank"
            className="block mb-3"
          >
            <Image
              data-test="icon"
              src="/icons/brand-logo-md.png"
              alt="logo"
              width="125"
              height="51.25"
            />
            
          </a>

          <ul className="flex justify-center list-none p-0 m-0">
            {/* <li className="mx-3">
              <a
              href="https://github.com/pankod"
              target="_blank"
              className="block mb-3"
              >
                <Image
                  data-test="icon"
                  src="/icons/github-icon.svg"
                  alt="github"
                  width="28"
                  height="29"
                />
              </a>
            </li> */}
            <li className="mx-3">
              <a
              href="https://twitter.com/auisofficial"
              target="_blank"
              className="block mb-3"
              >
                <Image
                  data-test="icon"
                  src="/icons/twitter-icon.svg"
                  alt="nextjs"
                  width="15"
                  height="15"
                />
              </a>

            </li>
            <li className="mx-3">
              <a
              href="https://www.youtube.com/user/AUISVideos"
              target="_blank"
              className="block mb-3"
              >
                <Image
                  data-test="icon"
                  src="/icons/youtube-icon.svg"
                  alt="youtube"
                  width="15"
                  height="16"
                />
              </a>

            </li>
            <li className="mx-3">
              <a
              href="https://www.linkedin.com/school/auisofficial/"
              target="_blank"
              className="block mb-3"
              >
                <Image
                  data-test="icon"
                  src="/icons/linkedin-icon.svg"
                  alt="linkedin"
                  width="15"
                  height="19"
                />
              </a>
            </li>
          </ul>
        </div>
        <p className="block text-white font-medium text-sm">
        {year} © All Rights Reserved by 
        <span>
          <a
            href="https://auis.edu.krd"
            target="_blank"
            className="mx-1 text-secondary"
          >
           AUIS
          </a>
        </span>
        </p>

      </div>
    </div>
  );
};
