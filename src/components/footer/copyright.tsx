import React from "react";
import Image from "next/image";

const Copyright : React.FC = () => {
    var year = new Date().getFullYear();
    return (
        <div className="grid grid-cols-1 lg:flex place-items-center lg:justify-between py-2 lg:py-4">
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

            <ul className="flex justify-center list-none">
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
          <p className="block text-white font-medium text-xs lg:text-sm">
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
    );
}

export default Copyright;