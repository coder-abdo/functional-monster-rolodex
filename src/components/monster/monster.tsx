import { FC } from "react";
import { MonsterType } from "../../types";

interface Props {
  monster: MonsterType;
}
export const Monster: FC<Props> = ({ monster }) => (
  <div
    data-testid="monster-container"
    className="max-w-[250px] pb-1 w-full bg-teal-500 hover:cursor-pointer hover:scale-105 transition-transform text-center text-white">
    <img
      className="w-full object-fill"
      data-testid="monster-image"
      alt={monster.name}
      src={`https://robohash.org/${monster.id}?set=set2`}
    />
    <h2 className="text-2xl my-2" data-testid="monster-title">{monster.name}</h2>
    <p className="text-base" data-testid="monster-email">{monster.email}</p>
  </div>
);
