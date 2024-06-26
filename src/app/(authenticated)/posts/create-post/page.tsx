// /* eslint-disable @next/next/no-img-element */
// /* eslint-disable react/no-unescaped-entities */
"use client";
import React, { useState } from "react";
import Tooltip from "@mui/material/Tooltip";
import PostAddOutlinedIcon from "@mui/icons-material/PostAddOutlined";
import ImageOutlinedIcon from "@mui/icons-material/ImageOutlined";
import { styled } from "@mui/material/styles";
import Button from "@mui/material/Button";

const user = {
  id: 2390239032,
  name: "Jordy Tshibangu",
  email: "charlotte7@example.com",
  position: "Business owner | Entrepreneur",
  profile: "/assets/profile_five.jpg",
};

const VisuallyHiddenInput = styled("input")({
  clip: "rect(0 0 0 0)",
  clipPath: "inset(50%)",
  height: 1,
  overflow: "hidden",
  position: "absolute",
  bottom: 0,
  left: 0,
  whiteSpace: "nowrap",
  width: 1,
});

type CreateNewPostProps = {
  onClose: () => void;
};
const CreateNewPost: React.FC<CreateNewPostProps> = ({ onClose }) => {
  const [title, setTitle] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [file, setFile] = useState<File | null>(null);
  const [tag, setTag] = useState<string>("");
  const [tags, setTags] = useState<string[]>([]);
  const [showTags, setShowTags] = useState<boolean>(false);
  const [showAddImage, setShowAddImage] = useState<boolean>(false);

  const handleAddTag = (event: React.MouseEvent<HTMLButtonElement>) => {
    if (tag) {
      setTags((prevState) => [...prevState, tag]);
      setTag("");
    }
  };
  const handleUploadFile = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) setFile(files[0]);
  };
  const handlePost = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const post = {
      title,
      content,
      publishedAt: new Date().toString(),
      author: user,
      tags,
      image: file,
      comments: [],
      likes: 0,
    };

    console.log(post);
    onClose();
  };

  return (
    <form className="flex flex-col gap-12 py-4" onSubmit={handlePost}>
      <div className="flex gap-3 items-center border-b-2 border-solid pb-5border-grayFour dark:border-dark">
        <PostAddOutlinedIcon className="text-4xl text-grayFirst" />
        <input
          type="text"
          className="bg-light dark:bg-dark text-3xl font-medium outline-none text-grayFirst"
          placeholder="Post title"
          required
          value={title}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            setTitle(event.target.value)
          }
        />
      </div>
      <textarea
        className="bg-light dark:bg-dark outline-none text-white px-5 text-xl rounded-lg"
        cols={5}
        rows={14}
        value={content}
        required
        placeholder="What's in your mind Jordy?"
        onChange={(event: React.ChangeEvent<HTMLTextAreaElement>) =>
          setContent(event.target.value)
        }
      ></textarea>
      <Tooltip title="Add Image" placement="top">
        <Button
          component="label"
          className="w-full flex justify-center items-cente"
          // onClick={handleUploadFile}
          startIcon={
            <ImageOutlinedIcon className="text-sm lg:text-lg leading-none" />
          }
        >
          <VisuallyHiddenInput type="file" />
        </Button>
      </Tooltip>
      <span
        className="text-lg text-grayFirst font-medium cursor-pointer"
        onClick={() => setShowTags(!showTags)}
      >
        Click to add tag for more relevance in your post
      </span>
      {showTags && (
        <div className="flex flex-col gap-3 -mt-8">
          <h4 className="text-lg font-medium text-grayFirst">Tags:</h4>
          <ul className="flex gap-2 flex-wrap">
            {tags.map((tag: string, index: number) => (
              <span
                key={index}
                className="bg-light dark:bg-dark px-5 py-2 rounded-lg text-grayFirst text-sm min-w-max"
              >
                {tag}
              </span>
            ))}
          </ul>
          <div className="flex items-center mt-5">
            <input
              type="text"
              name="tag"
              className=" bg-white  dark:bg-darkHeader text-grayFirst px-2 borderborder-grayFour dark:border-dark outline-none w-fit h-10"
              value={tag}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setTag(event.target.value?.toUpperCase())
              }
            />
            <button
              type="button"
              className="border border-solid border-grayFour dark:border-darkHeader flex items-center justify-center px-4 py-2 text-sm text-white"
              onClick={handleAddTag}
            >
              Add tag
            </button>
          </div>
        </div>
      )}
      <div className="w-full flex border-t border-solid border-grayFour dark:border-dark py-4">
        <button
          type="submit"
          className="w-full py-3  bg-white  dark:bg-darkHeader text-grayFirst border-2border-grayFour dark:border-dark border-solid rounded-lg text-lg font-medium hover:bg-primary hover:text-white transition duration-300 ease-in-out"
        >
          Post
        </button>
      </div>
    </form>
  );
};

export default CreateNewPost;
