import { FC } from "react";
import { MonsterType } from "../../types";
import { Monster } from "../monster/monster";
interface Props {
  monsters: MonsterType[];
}
export const Monsters: FC<Props> = ({ monsters }) => {
  return (
    <div
      data-testid="monsters-container"
      className="flex flex-wrap justify-center gap-5 w-full">
      {monsters.map((monster) => (
        <Monster key={monster.id} monster={monster} />
      ))}
    </div>
  );
};
