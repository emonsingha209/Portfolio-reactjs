import React from "react";

function LinkButton(props) {
  return (
    <div>
      <div className="text-white transition duration-150 ease-in-out delay-150 rounded-lg bg-navColor w-fit ring-2 ring-navColor ring-offset-2 ring-offset-gray-800 hover:bg-blue-600 hover:ring-blue-600 hover:-translate-y-1 hover:scale-110">
        <a
          href={props.link}
          target="_blank"
          rel="noreferrer"
          className="block w-40 h-full p-3 rounded-lg"
        >
          {props.text}
        </a>
      </div>
    </div>
  );
}

export default LinkButton;
