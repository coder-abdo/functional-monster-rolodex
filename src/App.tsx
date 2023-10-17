import { ChangeEvent, useEffect, useState } from "react";
import { MonsterType } from "./types";
import { Monsters } from "./components/monsters/monsters";
import { MonsterSearchBox } from "./components/monsterSearch";

function App() {
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
  const filteredMonsters = monsters.filter((monster) =>
    monster.name.toLowerCase().includes(searchTerm.toLowerCase()),
  );
  return (
    <div className="max-w-7xl w-full mx-auto text-center pt-10">
      <h1 className="text-7xl main-title capitalize mb-10">monster rolodex</h1>
      <MonsterSearchBox searchTerm={searchTerm} handleChange={handleChange} />
      <Monsters monsters={filteredMonsters} />
    </div>
  );
}

export default App;
