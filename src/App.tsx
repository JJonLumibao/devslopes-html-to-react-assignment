import { CharacterCard } from "./components/CharacterCards";
import { TopCharacters } from "./components/TopCharacters";
import { data } from "./fma-data";
import "./css/header.css";

function App() {
  return (
    <div id="app">
      <header>
        <h1>Fullmetal Alchemist</h1>
        <nav>
          <li>about us</li>
          <li>info</li>
          <li>support us</li>
        </nav>
      </header>
      <section id="character-ratings">
      <h4>Top Characters</h4>
      <table>
        <thead>
          <tr>
            <th>Name</th>
            <th>Skillset</th>
            <th>Votes</th>
          </tr>
        </thead>
        <tbody>
          <TopCharacters data={data}/>
        </tbody>
      </table>
    </section>
    <section id="character-cards">
      {data.map((character) => {
        return <CharacterCard key={character.name} character={character}/>
      })}
    </section>
    </div>
  );
}

export default App;