import { Monsters } from "./components/monsters/monsters";
import { MonsterSearchBox } from "./components/monsterSearch";
import { useMonsters } from "./hooks/useMonsters";

function App() {
  const { searchTerm, handleChange, filteredMonsters } = useMonsters();
  return (
    <div className="max-w-7xl w-full mx-auto text-center pt-10">
      <h1 className="text-7xl main-title capitalize mb-10">monster rolodex</h1>
      <MonsterSearchBox searchTerm={searchTerm} handleChange={handleChange} />
      <Monsters monsters={filteredMonsters} />
    </div>
  );
}

export default App;
