import { RiDeleteBin5Line } from "react-icons/ri";

const SelectedSinglePlayer = ({player,handleDeletedPlayer}) => {
    const {id,image,playerName,role} = player
    return (
       <div>
         <div className="flex justify-between items-center bg-amber-50 shadow shadow-md shadow-mist-200  mb-3">
           <div className="flex gap-4">
            <img className="w-15 h-15" src={image} alt="" />
            <div>
                <h1 className="text-xl font-bold">{playerName}</h1>
                <h2 className="text-gray-400">{role}</h2>
            </div>
           </div>

           <div>
            <button onClick={()=>{handleDeletedPlayer(id)}} className="btn"><RiDeleteBin5Line /></button>

           </div>

        </div>

       
       </div>
    );
};

export default SelectedSinglePlayer;