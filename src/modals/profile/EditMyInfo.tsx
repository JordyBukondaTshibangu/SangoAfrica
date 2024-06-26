"use client";
import React, { useState } from "react";

type EditMyInfoProps = {
  onClose: () => void;
  bio: string;
};
const EditMyInfo: React.FC<EditMyInfoProps> = ({ onClose, bio }) => {
  const [aboutMe, setAboutMe] = useState<string>(bio);

  const handleUpdateMyDetails = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onClose();
  };

  return (
    <form
      className="flex flex-col gap-12 py-4"
      onSubmit={handleUpdateMyDetails}
    >
      <h2 className="text-xl font-bold ">My info </h2>
      <div className="flex flex-col md:flex-row justify-between gap-10">
        <textarea
          name="aboutMe"
          rows={20}
          cols={10}
          className="w-full bg-white dark:bg-darkHeader text-lightFontColor dark:text-fontColor border-none outline-none py-5 text-lg leading-10"
          value={aboutMe}
          onChange={(event) => setAboutMe(event.target.value)}
          required
        ></textarea>
      </div>
      <div className="flex justify-end py-4">
        <button
          type="submit"
          className="w-56 h-12  bg-primary dark:bg-dark text-white dark:text-grayFirst border-2border-grayFour dark:border-dark border-solid rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          Update
        </button>
      </div>
    </form>
  );
};

export default EditMyInfo;
