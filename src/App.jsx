
import { useState } from 'react'
import './App.css'
import Allplayer from './component/Allplayer/Allplayer'
import Header from './component/Header/Header'

function App() {

      const [isActive,setIsActive] = useState({
        active :true,
        status : 'available'
    })
    // Selected Player State
    const [selectedPlayer,setSelectedPlayer] = useState([]);

    const handleSelectedPlayer=(player)=>{
      const newSelected = [...selectedPlayer,player]
      setSelectedPlayer(newSelected)
      // console.log(player)
    }


    const handleIsActive =(status)=>{
        if(status =="available"){
            setIsActive({
        active :true,
        status : 'available'
    })}
    else{
         setIsActive({
        active :false,
        status : 'seleted'
    })
        
    }


    }

  return (
    <div className='max-w-7xl mx-auto'>
      <Header></Header>
      <Allplayer selectedPlayer={selectedPlayer} handleSelectedPlayer={handleSelectedPlayer} handleIsActive={handleIsActive} isActive={isActive}></Allplayer>

    </div>
  )
}

export default App
