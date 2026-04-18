import { Character } from "../fma-data";
import "../css/character-ratings.css"

type Props = {
  data: Character[];
}

export function TopCharacters({data}: Props) {
  const topCharacters = [...data].sort((a,b) => (b.votes - a.votes)).slice(0,5);

  return (
    <>
      {topCharacters.map((character, charIndex) => {
        const { name, skillset, votes } = character;
        const isSecond = (charIndex + 2) % 2 === 0;
        return (
          <tr key={name} className={isSecond ? "dark" : "light"}>
            <td>{name}</td>
            <td>{skillset.join(', ')}</td>
            <td>{votes}</td>
          </tr>
        )
      })}
    </>
  );
}
