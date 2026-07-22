
const Player = ({player,handleSelectedPlayer}) => {

    const{image,playerName,nationality,role,rating,battingStyle,bowlingStyle,price}=player

    return (
        <div className="bg-amber-50 shadow-lg p-3 space-y-2 mb-2 rounded-2xl">
            <img className="w-full h-80 rounded-2xl" src={image} alt="" />
            <div className="flex items-center gap-3">
                <img className="w-7 rounded-full" src={image} alt="" />
                <h1 className="font-bold">{playerName}</h1>
            </div>
            <div className="flex justify-between items-center">
                <p className="text-gray-500">Country : {nationality}</p>
                <div className="bg-gray-300 rounded-md p-1 btn">{role}</div>
            </div>
            <hr className="text-gray-400" />
            <h1 className="font-bold">Rating : {rating}</h1>
            <div className=" font-bold items-center">
                <h1>Batting Style: <span className="text-gray-500 text-[14px]">{battingStyle}</span></h1>
                <h1>Bowling Style: <span className="text-gray-500 text-[14px]">{bowlingStyle}</span></h1>
            </div>
            <div className="flex justify-between items-center">
                <h1>Price : ${price}</h1>
                <button onClick={()=>{handleSelectedPlayer(player)}} className="btn btn-info">Choose Player</button>
            </div>

            
        </div>
    );
};

export default Player;