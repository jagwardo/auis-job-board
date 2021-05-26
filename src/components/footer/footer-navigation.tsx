import React from "react";

export const FooterNavigation : React.FC = () => {
    return (
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
    );
}

export default FooterNavigation;