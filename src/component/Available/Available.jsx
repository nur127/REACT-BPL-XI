import { useEffect, useState } from "react";
import Player from "../Player/Player";


const Available = ({handleSelectedPlayer}) => {
    const[players,setPlayers] = useState([])


    useEffect(()=>{
        fetch ('../../../public/fakeData.json')
        .then (res =>res.json())
        .then(data=>setPlayers(data))
    },[])


    
    return (
        <div className="md:grid grid-cols-3 gap-3">
            {/* <h1>Available : {players.length}</h1> */}
            {
                players.map(player =><Player handleSelectedPlayer={handleSelectedPlayer} key={player.id} player={player}></Player>)
            }
        </div>
    );
};

export default Available;