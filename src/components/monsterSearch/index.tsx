import React, { ChangeEvent, FC } from "react";
interface Props {
  searchTerm: string;
  handleChange: (e: ChangeEvent<HTMLInputElement>) => void;
}
export const MonsterSearchBox: FC<Props> = ({ searchTerm, handleChange }) => {
  return (
    <input
      type="search"
      data-testid="monster-search-box"
      value={searchTerm}
      onChange={handleChange}
      className="max-w-xs w-full py-3 px-4 rounded mb-5 outline-none border border-transparent focus:border-teal-400"
      placeholder="Search Monster"
    />
  );
};
