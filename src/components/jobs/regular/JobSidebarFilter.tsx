import React, { ChangeEvent, useState } from "react";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import Drawer from "@mui/material/Drawer";
import Checkbox from "@mui/material/Checkbox";
import FormGroup from "@mui/material/FormGroup";
import { Anchor } from "../Jobs";
import Button from "@mui/material/Button";
import TuneOutlinedIcon from "@mui/icons-material/TuneOutlined";
import {
  datePostedList,
  experienceLevelList,
  jobTypeList,
} from "@/utils/jobFiltersOptions";

type JobSidebarFilterProps = {
  industryList: string[];
  rolesList: string[];
  anchor: Anchor;
  state: any;
  onClose: any;
  toggleDrawer: any;
  applyFilter: (
    datePosted: string,
    jobType: string,
    industry: string,
    experienceLevel: string,
    roles: string[],
  ) => void;
};

export default function JobSidebarFilter({
  industryList,
  rolesList,
  anchor,
  state,
  toggleDrawer,
  applyFilter,
}: JobSidebarFilterProps) {
  const [datePosted, setDatePosted] = useState<string>("");
  const [jobType, setJobType] = useState<string>("");
  const [experienceLevel, setExperienceLevel] = useState<string>("");
  const [roles, setRoles] = useState<string[]>([]);
  const [industry, setIndustry] = useState<string>("");

  const handleApplyFilter = () => {
    applyFilter(datePosted, jobType, industry, experienceLevel, roles);
  };

  return (
    <div className="hidden lg:flex">
      <Drawer
        anchor={anchor}
        open={state}
        onClick={toggleDrawer(anchor, false)}
        onKeyDown={toggleDrawer(anchor, false)}
      >
        <div className="flex flex-col gap-4 lg:w-[480px]  bg-white  dark:bg-darkHeader  py-20 px-10 min-h-[100vh] overflow-auto">
          <div
            className="flex flex-col gap-5"
            role="presentation"
            onClick={(event) => event.stopPropagation()}
          >
            <div className="flex gap-4 mb-8 items-center">
              <TuneOutlinedIcon className="text-lightFontColor dark:text-white text-4xl font-bold" />
              <h2 className="text-2xl font-medium text-lightFontColor dark:text-white uppercase">
                Job Filters
              </h2>
            </div>
            <FormControl className="flex flex-col gap-6 border border-solid border-grayFour dark:border-dark text-lightFontColor dark:text-grayFirst rounded-lg px-5 py-5">
              <FormLabel className="text-lightFontColor dark:text-grayFirst font-medium">
                Date Posted
              </FormLabel>
              <RadioGroup
                className="grid grid-cols-2 gap-2"
                defaultValue={datePosted}
                value={datePosted}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setDatePosted((event.target as HTMLInputElement).value);
                }}
              >
                {datePostedList.map((dateItem, index) => (
                  <FormControlLabel
                    key={index}
                    value={dateItem}
                    control={<Radio />}
                    label={dateItem}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <FormControl className="flex flex-col gap-6 border border-solid border-grayFour dark:border-dark text-lightFontColor dark:text-grayFirst rounded-lg px-5 py-5">
              <FormLabel className="text-lightFontColor dark:text-grayFirst font-medium">
                Job Type
              </FormLabel>
              <RadioGroup
                defaultValue={jobType}
                className="grid grid-cols-2"
                value={jobType}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setJobType((event.target as HTMLInputElement).value);
                }}
              >
                {jobTypeList.map((jobTypeItem, index) => (
                  <FormControlLabel
                    key={index}
                    value={jobTypeItem}
                    control={<Radio />}
                    label={jobTypeItem}
                  />
                ))}
              </RadioGroup>
            </FormControl>

            <FormControl className="flex flex-col gap-6 border border-solid border-grayFour dark:border-dark text-lightFontColor dark:text-grayFirst rounded-lg px-5 py-5">
              <FormLabel className="text-lightFontColor dark:text-grayFirst font-medium">
                Experience level
              </FormLabel>
              <RadioGroup
                defaultValue={experienceLevel}
                className="grid grid-cols-2"
                value={experienceLevel}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setExperienceLevel((event.target as HTMLInputElement).value);
                }}
              >
                {experienceLevelList.map((experienceLevelItem, index) => (
                  <FormControlLabel
                    key={index}
                    value={experienceLevelItem}
                    control={<Radio />}
                    label={experienceLevelItem}
                  />
                ))}
              </RadioGroup>
            </FormControl>
            <FormGroup className="flex flex-col gap-6 border border-solid border-grayFour dark:border-dark text-lightFontColor dark:text-grayFirst rounded-lg px-5 py-5">
              <FormLabel className="text-lightFontColor dark:text-grayFirst font-medium">
                Role
              </FormLabel>

              <div className="flex flex-col gap-2">
                {rolesList.map((roleItem, index) => (
                  <FormControlLabel
                    key={index}
                    control={
                      <Checkbox
                        value={roleItem}
                        onChange={(event: ChangeEvent<HTMLInputElement>) =>
                          setRoles((prevState) => [
                            ...prevState,
                            event.target.value,
                          ])
                        }
                      />
                    }
                    label={roleItem}
                  />
                ))}
              </div>
            </FormGroup>
            <FormControl className="flex flex-col gap-6 border border-solid border-grayFour dark:border-dark text-lightFontColor dark:text-grayFirst rounded-lg px-5 py-5">
              <FormLabel className="text-lightFontColor dark:text-grayFirst font-medium">
                Industry
              </FormLabel>
              <RadioGroup
                defaultValue={industry}
                value={industry}
                onChange={(event: ChangeEvent<HTMLInputElement>) => {
                  setIndustry((event.target as HTMLInputElement).value);
                }}
              >
                {industryList.map((industry, index) => (
                  <FormControlLabel
                    key={index}
                    value={industry}
                    control={<Radio />}
                    label={industry}
                  />
                ))}
              </RadioGroup>
            </FormControl>
          </div>
          <Button
            className="bg-primary hover:bg-light w-full py-3 rounded-lg cursor-pointer flex justify-center items-center gap-4 text-xl text-white mt-6"
            onClick={handleApplyFilter}
          >
            <TuneOutlinedIcon className="text-xl font-bold" />
            <span className="text-sm lg:text-lg font-medium">
              Apply Filters
            </span>
          </Button>
        </div>
      </Drawer>
    </div>
  );
}
