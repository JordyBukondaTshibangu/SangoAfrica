"use client";
import React, { ChangeEvent } from "react";
import TextField from "@mui/material/TextField";
import SearchIcon from "@mui/icons-material/Search";

import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select, { SelectChangeEvent } from "@mui/material/Select";

type ArticleFilterProps = {
  searchEvent: (value: string) => void;
  searchOrganiser: (value: string) => void;
  searchCategory: (value: string) => void;
  searchDate: (value: string) => void;
  organisers: string[];
  categories: string[];
  dates: string[];
};

const EventFilter: React.FC<ArticleFilterProps> = ({
  searchEvent,
  searchOrganiser,
  searchCategory,
  searchDate,
  organisers,
  categories,
  dates,
}) => {
  const handleChangeAuthor = (event: SelectChangeEvent) => {
    searchOrganiser(event.target.value);
  };

  const handleChangeCategory = (event: SelectChangeEvent) => {
    searchCategory(event.target.value);
  };

  const handleSearchEvent = (event: ChangeEvent<HTMLInputElement>) => {
    searchEvent(event.target.value);
  };

  const handleSearchDate = (event: SelectChangeEvent) => {
    searchDate(event.target.value);
  };

  return (
    <div className="w-full flex flex-col lg:flex-row items-center gap-8 lg:gap-5">
      <span className="w-full flex-1 relative">
        <SearchIcon className="absolute top-4 right-4 text-2xl text-primary" />
        <TextField
          id="outlined-basic"
          variant="outlined"
          className="w-full h-full"
          placeholder="Search by : Event name, Keyword..."
          onChange={handleSearchEvent}
        />
      </span>
      <div className="w-full flex-1 flex flex-col lg:flex-row items-center">
        <FormControl
          sx={{ m: 1, minWidth: 150 }}
          size="medium"
          className="w-full"
        >
          <InputLabel>Organiser</InputLabel>
          <Select label="Author" onChange={handleChangeAuthor}>
            {organisers.map((author, index) => (
              <MenuItem key={index} value={author}>
                {author}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 150 }}
          size="medium"
          className="w-full"
        >
          <InputLabel>Category</InputLabel>
          <Select label="Category" onChange={handleChangeCategory}>
            {categories.map((category, index) => (
              <MenuItem key={index} value={category}>
                {category}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
        <FormControl
          sx={{ m: 1, minWidth: 150 }}
          size="medium"
          className="w-full"
        >
          <InputLabel>Date</InputLabel>
          <Select label="Date" onChange={handleSearchDate}>
            {dates.map((date, index) => (
              <MenuItem key={index} value={date}>
                {date}
              </MenuItem>
            ))}
          </Select>
        </FormControl>
      </div>
    </div>
  );
};

export default EventFilter;
