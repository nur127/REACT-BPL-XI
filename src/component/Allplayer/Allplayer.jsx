import Available from "../Available/Available";
import Selected from "../Selected/Selected";


const Allplayer = ({handleIsActive,isActive,handleSelectedPlayer,selectedPlayer}) => {

    return (
    <div>
            <div className="flex justify-between mt-4 items-center bg-slate-200 p-3 rounded-3xl">
            <div>
                <h1 className="text-2xl font-bold"> {isActive.active ?"Available Player ":`Selected Players : ${selectedPlayer.length}`}</h1>

            </div>
            <div className="flex justify-between gap-3">
                <button onClick={()=>handleIsActive("available")} className={isActive.active==true ? "btn btn-primary":"btn"}>Available</button>
                <button onClick={()=>handleIsActive("selected")} className={isActive.active==true ? "btn":"btn btn-primary"}>Selected({selectedPlayer.length})</button>

            </div>
        </div>

        {
            isActive.active ?<Available handleSelectedPlayer={handleSelectedPlayer}></Available> : <Selected selectedPlayer={selectedPlayer}></Selected>
        }
    </div>
    );
};

export default Allplayer;