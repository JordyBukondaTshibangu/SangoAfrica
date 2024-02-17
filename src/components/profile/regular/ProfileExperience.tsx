import React from "react";
import { UserExperienceT } from "../container/Profile";
import ViewTimelineIcon from "@mui/icons-material/ViewTimeline";
import Experince from "./Experince";

type ProfileExperienceProps = {
  experiences: UserExperienceT[];
  other: boolean;
};
const ProfileExperience: React.FC<ProfileExperienceProps> = ({
  experiences,
  other,
}) => {
  return (
    <div className="w-full bg-darkHeader px-5 py-10 flex flex-col gap-8">
      <div className="w-full flex gap-4 items-center">
        <ViewTimelineIcon className="text-3xl" />
        <h4 className="text-2xl font-bold">{!other && "My"} Experience</h4>
      </div>
      <div className="w-full flex flex-col gap-4 ">
        {experiences.map((experience: UserExperienceT, index: number) => (
          <Experince key={index} experience={experience} />
        ))}
      </div>
    </div>
  );
};

export default ProfileExperience;