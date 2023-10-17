import { ChangeEvent, useEffect, useMemo, useState } from "react";
import { MonsterType } from "../types";
export const useMonsters = () => {
  const [monsters, setMonsters] = useState<MonsterType[]>([]);
  const [searchTerm, setSearchTerm] = useState("");
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(e.target.value);
  };
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((res) => res.json())
      .then((users) => setMonsters((prev) => (prev = [...users])));
  }, []);
  const filteredMonsters = useMemo(
    () =>
      monsters.filter((monster) =>
        monster.name.toLowerCase().includes(searchTerm.toLowerCase()),
      ),
    [monsters, searchTerm],
  );
  return { searchTerm, filteredMonsters, handleChange };
};
