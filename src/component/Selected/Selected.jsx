import SelectedSinglePlayer from "../SelectedSinglePlayer/SelectedSinglePlayer";

const Selected = ({selectedPlayer,handleDeletedPlayer,handleIsActive}) => {
    return (
        <div>
            <h1>Selected:{selectedPlayer.length}</h1>

            {
                selectedPlayer.map(player => <SelectedSinglePlayer handleDeletedPlayer={handleDeletedPlayer} player={player}></SelectedSinglePlayer>)
            }
             <button onClick={()=>{handleIsActive("available")}} className="btn btn-active bg-lime-400">Add More Player</button>
        </div>
    );
};

export default Selected;