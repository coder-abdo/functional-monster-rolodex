import { FC } from "react";
import { MonsterType } from "../../types";

interface Props {
  monster: MonsterType;
}
export const Monster: FC<Props> = ({ monster }) => (
  <div className="max-w-[250px] pb-1 w-full bg-teal-500 hover:cursor-pointer hover:scale-105 transition-transform text-center text-white">
    <img
      className="w-full object-fill"
      alt={monster.name}
      src={`https://robohash.org/${monster.id}?set=set2`}
    />
    <h2 className="text-2xl my-2">{monster.name}</h2>
    <p className="text-base">{monster.email}</p>
  </div>
);
