import { Component } from "react";
import type { Character } from "../fma-data";
import "../css/reset.css";
import "../css/character-cards.css";

type Props = {
  character: Character;
}

export class CharacterCard extends Component<Props> {
  render() {
    const { name, nickName, imageUrl, background } = this.props.character;
    return (      
      <div className="card">
        <div className="card-titles">
          <h3>{name}</h3>
          {nickName && <h4>{nickName}</h4>}
        </div>
        <img
          src={imageUrl}
          alt={name}
        />
        <p>
          {background}
        </p>
      </div>
    )
  }
}