import SelectedSinglePlayer from "../SelectedSinglePlayer/SelectedSinglePlayer";

const Selected = ({selectedPlayer,handleDeletedPlayer,handleIsActive}) => {
    return (
        <div className="mt-4 pb-48">
            
            {
                selectedPlayer.map(player => <SelectedSinglePlayer handleDeletedPlayer={handleDeletedPlayer} player={player}></SelectedSinglePlayer>)
            }
             <button onClick={()=>{handleIsActive("available")}} className="btn btn-active bg-lime-400 mt-5">Add More Player</button>
        </div>
    );
};

export default Selected;