import React, { FunctionComponent, useState } from "react";

// const Index = () => {
interface AlertProps {
  status: boolean;
  type: string;
  message: string;
}
const successInfo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
      clipRule="evenodd"
    />
  </svg>
);

const erorrInfo = (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="h-5 w-5"
    viewBox="0 0 20 20"
    fill="currentColor"
  >
    <path
      fillRule="evenodd"
      d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z"
      clipRule="evenodd"
    />
  </svg>
);
const Alert: FunctionComponent<AlertProps> = ({
  type,
  status = false,
  message,
}) => {
  const [flag, setFlag] = useState(status);

  return (
    <div className="flex flex-wrap">
      <div className="w-3/4"></div>
      <div className="w-1/4 -mt-16 z-50 ">
        {flag && (
          <div className="">
            <div className="flex items-center justify-center px-4 lg:px-0 py-2 ">
              <div
                id="alert"
                className={
                  flag
                    ? "transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-green-100 md:flex items-center justify-between shadow rounded"
                    : "transition duration-150 ease-in-out lg:w-11/12 mx-auto py-3 px-4  dark:bg-gray-800 bg-green-100 md:flex items-center justify-between shadow rounded translate-hide"
                }
              >
                <div className="sm:flex sm:items-start lg:items-center">
                  <div className="flex items-end">
                    <div className="mr-2 text-green-400">
                      {type === "success" ? successInfo : erorrInfo}
                    </div>
                    <p className="mr-2 text-base font-bold text-gray-800 dark:text-green-100">
                      Info
                    </p>
                  </div>
                  <div className="h-1 w-1 bg-gray-300 dark:bg-gray-700 rounded-full mr-2 hidden xl:block" />
                  <p className="text-sm sm:text-base text-gray-600 dark:text-gray-400 pt-2 sm:pt-0 pb-2 sm:pb-0">
                    {message}
                  </p>
                </div>
                <div className="flex items-center justify-end sm:mt-4 md:mt-0 ml-4">
                  <div
                    onClick={() => setFlag(false)}
                    className="cursor-pointer text-gray-400"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width={18}
                      height={18}
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth={2}
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="feather feather-x"
                    >
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
    </div>
  );
};
export default Alert;
