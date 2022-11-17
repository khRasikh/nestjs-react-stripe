import React, { useState } from "react";
import apple from "./apple.jpeg";
import Image from "next/image";

export default function ProductList() {
  const [handleView, setHandleShowModal] = useState(false);
  return (
    <div className="mx-auto container px-3 xl:px-0">
      <div className="flex flex-col">
        <div className="grid lg:grid-cols-3 gap-x-8 gap-y-8 items-center">
          <div className="group group-hover:bg-opacity-60 transition duration-500 relative bg-gray-50 sm:p-28 py-36 px-10 flex justify-center items-center">
            <Image
              className="group-hover:opacity-60 transition duration-500"
              src={apple}
              alt="Apple"
            />
            <div className="absolute sm:top-8 top-4 left-4 sm:left-8 flex justify-start items-start flex-col space-y-2">
              <div>
                <p className="group-hover:opacity-60 transition duration-500 text-xl leading-5 text-gray-600">
                  Sectional Sofa
                </p>
              </div>
              <div>
                <p className="group-hover:opacity-60 transition duration-500 text-xl font-semibold leading-5 text-gray-800">
                  €10
                </p>
              </div>
            </div>
            <div className="group-hover:opacity-60 transition duration-500 absolute bottom-8 right-8 flex justify-start items-start flex-row space-x-2">
              <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
              <button className="bg-white border rounded-full focus:bg-gray-800 border-gray-600 p-1.5" />
            </div>
            <div className="flex flex-col bottom-8 left-8 space-y-4 absolute opacity-0 group-hover:opacity-100 transition duration-500">
              <button>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 2C10.0222 2 8.08879 2.58649 6.4443 3.6853C4.79981 4.78412 3.51809 6.3459 2.76121 8.17317C2.00433 10.0004 1.8063 12.0111 2.19215 13.9509C2.578 15.8907 3.53041 17.6725 4.92894 19.0711C6.32746 20.4696 8.10929 21.422 10.0491 21.8079C11.9889 22.1937 13.9996 21.9957 15.8268 21.2388C17.6541 20.4819 19.2159 19.2002 20.3147 17.5557C21.4135 15.9112 22 13.9778 22 12C22 10.6868 21.7413 9.38642 21.2388 8.17317C20.7363 6.95991 19.9997 5.85752 19.0711 4.92893C18.1425 4.00035 17.0401 3.26375 15.8268 2.7612C14.6136 2.25866 13.3132 2 12 2ZM15 13H13V15C13 15.2652 12.8946 15.5196 12.7071 15.7071C12.5196 15.8946 12.2652 16 12 16C11.7348 16 11.4804 15.8946 11.2929 15.7071C11.1054 15.5196 11 15.2652 11 15V13H9C8.73479 13 8.48043 12.8946 8.2929 12.7071C8.10536 12.5196 8 12.2652 8 12C8 11.7348 8.10536 11.4804 8.2929 11.2929C8.48043 11.1054 8.73479 11 9 11H11V9C11 8.73478 11.1054 8.48043 11.2929 8.29289C11.4804 8.10536 11.7348 8 12 8C12.2652 8 12.5196 8.10536 12.7071 8.29289C12.8946 8.48043 13 8.73478 13 9V11H15C15.2652 11 15.5196 11.1054 15.7071 11.2929C15.8946 11.4804 16 11.7348 16 12C16 12.2652 15.8946 12.5196 15.7071 12.7071C15.5196 12.8946 15.2652 13 15 13Z"
                    fill="#1F2937"
                  />
                </svg>
              </button>
              <button onClick={() => setHandleShowModal(true)}>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 13.5C12.8284 13.5 13.5 12.8284 13.5 12C13.5 11.1716 12.8284 10.5 12 10.5C11.1716 10.5 10.5 11.1716 10.5 12C10.5 12.8284 11.1716 13.5 12 13.5Z"
                    fill="#1F2937"
                  />
                  <path
                    d="M21.8701 11.5C21.2301 10.39 17.7101 4.82001 11.7301 5.00001C6.20007 5.14001 3.00007 10 2.13007 11.5C2.0423 11.652 1.99609 11.8245 1.99609 12C1.99609 12.1755 2.0423 12.348 2.13007 12.5C2.76007 13.59 6.13007 19 12.0201 19H12.2701C17.8001 18.86 21.0101 14 21.8701 12.5C21.9578 12.348 22.004 12.1755 22.004 12C22.004 11.8245 21.9578 11.652 21.8701 11.5ZM12.0001 15.5C11.3078 15.5 10.6311 15.2947 10.0556 14.9102C9.48 14.5256 9.0314 13.9789 8.76649 13.3394C8.50158 12.6999 8.43227 11.9961 8.56732 11.3172C8.70237 10.6383 9.03571 10.0146 9.52519 9.52514C10.0147 9.03565 10.6383 8.70231 11.3173 8.56726C11.9962 8.43221 12.6999 8.50152 13.3395 8.76643C13.979 9.03134 14.5256 9.47994 14.9102 10.0555C15.2948 10.6311 15.5001 11.3078 15.5001 12C15.5001 12.9283 15.1313 13.8185 14.4749 14.4749C13.8186 15.1313 12.9283 15.5 12.0001 15.5Z"
                    fill="#1F2937"
                  />
                </svg>
              </button>
              <button>
                <svg
                  width={24}
                  height={24}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12 21C11.8684 21.0008 11.7379 20.9755 11.6161 20.9258C11.4943 20.876 11.3834 20.8027 11.29 20.71L3.51999 12.93C2.54536 11.9452 1.99866 10.6156 1.99866 9.23C1.99866 7.84443 2.54536 6.51482 3.51999 5.53C4.50226 4.55051 5.83283 4.00047 7.21999 4.00047C8.60716 4.00047 9.93773 4.55051 10.92 5.53L12 6.61L13.08 5.53C14.0623 4.55051 15.3928 4.00047 16.78 4.00047C18.1672 4.00047 19.4977 4.55051 20.48 5.53C21.4546 6.51482 22.0013 7.84443 22.0013 9.23C22.0013 10.6156 21.4546 11.9452 20.48 12.93L12.71 20.71C12.6166 20.8027 12.5057 20.876 12.3839 20.9258C12.2621 20.9755 12.1316 21.0008 12 21Z"
                    fill="#1F2937"
                  />
                </svg>
              </button>
            </div>
            <div className="absolute top-4 right-6 bg-red-700 px-3 rounded-md">
              <p className="text-base leading-4 pb-0.5 text-white border-gray-600">
                New
              </p>
            </div>
          </div>
        </div>
        <div className="flex justify-end items-end mt-12">
          <div className="flex flex-row items-center justify-center space-x-8">
            <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
              <p>1</p>
            </button>
            <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
              <p>2</p>
            </button>
            <button className="text-base leading-none text-gray-800 border-b-2 border-transparent focus:outline-none focus:border-gray-800">
              <p>3</p>
            </button>
            <button className="flex justify-center items-center">
              <svg
                width={24}
                height={24}
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M9 6L15 12L9 18"
                  stroke="#1F2937"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>
      {handleView && (
        <div>
          <div className="py-12 bg-gray-700 opacity-80 z-50 fixed transition duration-150 ease-in-out top-0 right-0 bottom-0 left-0">
            <div
              role="alert"
              className="container mx-auto w-11/12 md:w-2/3 max-w-lg"
            >
              <div className="relative py-8 px-5 md:px-10 bg-white shadow-md rounded border border-gray-400">
                <div className="w-full flex justify-start text-gray-600 mb-3">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="icon icon-tabler icon-tabler-wallet"
                    width={52}
                    height={52}
                    viewBox="0 0 24 24"
                    strokeWidth={1}
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <path d="M17 8v-3a1 1 0 0 0 -1 -1h-10a2 2 0 0 0 0 4h12a1 1 0 0 1 1 1v3m0 4v3a1 1 0 0 1 -1 1h-12a2 2 0 0 1 -2 -2v-12" />
                    <path d="M20 12v4h-4a2 2 0 0 1 0 -4h4" />
                  </svg>
                </div>
                <h1 className="text-gray-800 font-lg font-bold tracking-normal leading-tight mb-4">
                  Enter Billing Details
                </h1>
                <label
                  htmlFor="name"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Owner Name
                </label>
                <input
                  id="name"
                  className="mb-5 mt-2 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                  placeholder="James"
                />
                <label
                  htmlFor="email2"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Card Number
                </label>
                <div className="relative mb-5 mt-2">
                  <div className="absolute text-gray-600 flex items-center px-4 border-r h-full">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-credit-card"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={3} y={5} width={18} height={14} rx={3} />
                      <line x1={3} y1={10} x2={21} y2={10} />
                      <line x1={7} y1={15} x2="7.01" y2={15} />
                      <line x1={11} y1={15} x2={13} y2={15} />
                    </svg>
                  </div>
                  <input
                    id="email2"
                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-16 text-sm border-gray-300 rounded border"
                    placeholder="XXXX - XXXX - XXXX - XXXX"
                  />
                </div>
                <label
                  htmlFor="expiry"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  Expiry Date
                </label>
                <div className="relative mb-5 mt-2">
                  <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-calendar-event"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <rect x={4} y={5} width={16} height={16} rx={2} />
                      <line x1={16} y1={3} x2={16} y2={7} />
                      <line x1={8} y1={3} x2={8} y2={7} />
                      <line x1={4} y1={11} x2={20} y2={11} />
                      <rect x={8} y={15} width={2} height={2} />
                    </svg>
                  </div>
                  <input
                    id="expiry"
                    className="text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="MM/YY"
                  />
                </div>
                <label
                  htmlFor="cvc"
                  className="text-gray-800 text-sm font-bold leading-tight tracking-normal"
                >
                  CVC
                </label>
                <div className="relative mb-5 mt-2">
                  <div className="absolute right-0 text-gray-600 flex items-center pr-3 h-full cursor-pointer">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="icon icon-tabler icon-tabler-info-circle"
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      fill="none"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path stroke="none" d="M0 0h24v24H0z" />
                      <circle cx={12} cy={12} r={9} />
                      <line x1={12} y1={8} x2="12.01" y2={8} />
                      <polyline points="11 12 12 12 12 16 13 16" />
                    </svg>
                  </div>
                  <input
                    id="cvc"
                    className="mb-8 text-gray-600 focus:outline-none focus:border focus:border-indigo-700 font-normal w-full h-10 flex items-center pl-3 text-sm border-gray-300 rounded border"
                    placeholder="MM/YY"
                  />
                </div>
                <div className="flex items-center justify-start w-full">
                  <button className="focus:outline-none transition duration-150 ease-in-out hover:bg-indigo-600 bg-indigo-700 rounded text-white px-8 py-2 text-sm">
                    Submit
                  </button>
                  <button
                    className="focus:outline-none ml-3 bg-gray-100 transition duration-150 text-gray-600 ease-in-out hover:border-gray-400 hover:bg-gray-300 border rounded px-8 py-2 text-sm"
                    onClick={() => setHandleShowModal(false)}
                  >
                    Cancel
                  </button>
                </div>
                <div
                  className="cursor-pointer absolute top-0 right-0 mt-4 mr-5 text-gray-400 hover:text-gray-600 transition duration-150 ease-in-out"
                  onClick={() => setHandleShowModal(false)}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    aria-label="Close"
                    className="icon icon-tabler icon-tabler-x"
                    width={20}
                    height={20}
                    viewBox="0 0 24 24"
                    strokeWidth="2.5"
                    stroke="currentColor"
                    fill="none"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path stroke="none" d="M0 0h24v24H0z" />
                    <line x1={18} y1={6} x2={6} y2={18} />
                    <line x1={6} y1={6} x2={18} y2={18} />
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
