import React from "react";

const LoadingEvent = () => {
  return (
    <div
      role="status"
      className="w-full mx-auto animate-pulse  flex flex-col gap-10"
    >
      <div className="flex w-full h-96 rounded bg-grayThird dark:bg-darkHeader"></div>

      <div className="w-full">
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader mb-2.5"></div>
        <div className="h-2 bg-grayThird rounded-full dark:bg-darkHeader max-w-[440px] mb-2.5"></div>
      </div>
      <div className="flex flex-col lg:flex-row gap-20 justify-between my-5">
        <div className="w-full">
          <div className="flex w-full h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        </div>
        <div className="w-full">
          <div className="flex w-full h-96 rounded bg-grayThird dark:bg-darkHeader"></div>
        </div>
      </div>
      <span className="sr-only">Loading...</span>
    </div>
  );
};

export default LoadingEvent;
