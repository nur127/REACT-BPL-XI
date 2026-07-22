import SelectedSinglePlayer from "../SelectedSinglePlayer/SelectedSinglePlayer";

const Selected = ({selectedPlayer,handleDeletedPlayer}) => {
    return (
        <div>
            <h1>Selected:{selectedPlayer.length}</h1>

            {
                selectedPlayer.map(player => <SelectedSinglePlayer handleDeletedPlayer={handleDeletedPlayer} player={player}></SelectedSinglePlayer>)
            }
             <a href="../Available"><button className="btn btn-active bg-lime-400">Add More Player</button></a>
        </div>
    );
};

export default Selected;