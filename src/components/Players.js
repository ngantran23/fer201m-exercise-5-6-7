import React from "react";
import { Players } from "../shared/ListOfPlayers";
import { useState } from "react";

export default function Player() {
    const [player, setPlayer] = useState([]);
    return (
        <div className="container">
            {Players.map((player) => (
                <div className="column" key={player.id}>
                    <div className="card">
                        <img src={player.img} />
                        <h3>{player.name}</h3>
                        <p className="title">{player.club}</p>
                        <p>
                            <button
                                onClick={() => {
                                    setPlayer(player);
                                }}
                            >
                                <a href="#popup1" id="openPopUp">
                                    Detail
                                </a>
                            </button>
                        </p>
                    </div>
                </div>
            ))}
        </div>
    );
}
