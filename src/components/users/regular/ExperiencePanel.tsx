import React from "react";
import Timeline from "@mui/lab/Timeline";
import TimelineItemElement from "@/components/users/regular/Timeline";
import { UserExperienceT } from "@/components/profile/container/Profile";

type ExperiencePanelProps = {
  experiences: UserExperienceT[];
};

const ExperiencePanel: React.FC<ExperiencePanelProps> = ({ experiences }) => {
  return (
    <div className="w-full min-w-[350px] md:min-w-[300px] lg:min-w-[200px] 3xl:min-w-[350px] flex flex-col gap-4 mt-5">
      <div className="bg-dark w-full p-5 rounded-lg flex flex-col gap-4">
        <h4 className="text-[16px] font-medium border-b border-primary border-solid w-fit">
          Experience
        </h4>
        <Timeline>
          {experiences.map((experience: UserExperienceT, index: number) => (
            <TimelineItemElement key={index} experience={experience} />
          ))}
        </Timeline>
      </div>
    </div>
  );
};

export default ExperiencePanel;